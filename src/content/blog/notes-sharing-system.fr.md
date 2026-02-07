---

title: "Créer un système de partage de notes gratuitement : Pourquoi j'ai abandonné Notion pour ma propre stack"

summary: "Pourquoi j'ai construit mon propre système de partage de notes avec Obsidian, GitHub et Cloudflare Workers."

date: "2026-01-21"

tags: ["Obsidian", "GitHub", "Cloudflare", "Nodejs"]

readTime: "5 min de lecture"

---

## Contexte

Récemment, je me suis intéressé à l'hébergement et à la propriété de mes propres données. J'ai commencé par les bases : mes notes. J'utilisais Notion depuis longtemps, mais j'ai réalisé que je ne possédais pas vraiment mes données et que j'étais dépendant de leur plateforme. J'avais besoin d'un remplacement et j'ai trouvé [Obsidian](https://obsidian.md/), qui s'est avéré être une excellente alternative.

Avec Obsidian, je pouvais synchroniser mes notes entre appareils via GitHub. Cependant, au travail, le partage de documentation était souvent pénible : les liens cassaient ou les permissions devenaient confuses. Je voulais une solution combinant la confidentialité des fichiers locaux avec la possibilité de partager des notes publiquement sur mon propre domaine quand je le souhaitais.

Alors, j'ai construit ce système. *Jetez un œil à [une note publique sur notes.imadbourouche.site](https://notes.imadbourouche.site/public/Public_note.md)*

---

## Pourquoi j'ai construit ça ?

### 1. Souveraineté des Données

Avant, j'utilisais Notion. C'est un excellent outil, mais je ne « possédais » pas vraiment mes données. Si Notion tombe en panne ou change ses tarifs, ma base de connaissances est en danger. En passant à un système où j'utilise Obsidian localement et synchronise via GitHub, j'ai repris le contrôle total. Mes notes sont juste des fichiers `.md` sur mon disque dur. Aucun verrouillage fournisseur.

### 2. Le Problème des Liens Cassés

En hébergeant mes notes sur mon propre sous-domaine, j'ai créé un point de référence stable et permanent. Quand je partage un lien avec un collègue, il sait exactement d'où il vient, et je sais que ce lien n'expirera jamais et ne changera pas.

### 3. Le Plaisir de l'Ingénierie

Construire des outils, c'est amusant. Implémenter un système qui gère le parsing Markdown, l'intégration de l'API GitHub et le Edge computing (Cloudflare Workers) était un défi technique gratifiant.

---

## Implémentation Technique

Je voulais que ce système de partage de notes soit aussi simple que possible. Le système est conçu pour être « serverless » et léger. Je voulais pouvoir éditer une note sur mon téléphone ou mon ordinateur portable, que mon site web se mette à jour automatiquement, et partager facilement des notes publiquement.

### Architecture Globale

![architecture](/architecture.webp)

1. **La Source (Obsidian) :** J'écris et j'organise tout dans Obsidian. Il fournit une belle interface locale et supporte le Markdown standard. Son approche local-first garantit que mes données sont toujours accessibles, même hors ligne.

2. **L'Hébergement (GitHub) :** Quand je sauvegarde une note, je la pousse vers un dépôt GitHub privé (en utilisant le plugin Obsidian Git). Cela sert de base de données et de système de contrôle de version. GitHub offre une meilleure fiabilité et un historique granulaire des modifications par rapport à une base de données traditionnelle, et le meilleur de tout, c'est gratuit.

3. **Le Proxy (Cloudflare Workers) :** J'ai choisi Cloudflare Workers comme proxy entre GitHub et mon site web pour la performance et la simplicité. Il gère :
	- L'authentification et les permissions.
	- La récupération du fichier Markdown brut depuis l'API GitHub.
	- Le parsing du Markdown et son rendu en HTML propre à la volée.
	- La publication/dépublication des notes.
	- La sécurité (stockage des clés privées) et la limitation de débit.
	- L'exécution à la périphérie garantit une latence minimale pour quiconque accède aux notes.

### Partage des Notes

![sharing-notes](/sharing-notes.webp)

J'utilise le **stockage Key-Value (KV) de Cloudflare** pour gérer le statut « Publier/Dépublier » des notes.

*   **Pourquoi KV ?** Il découple le contenu (GitHub) de l'état d'accès (KV). Cela permet un basculement instantané de la visibilité et supporte nativement le Time-to-Live (TTL), ce qui est parfait pour les partages temporaires ou permanents.

1.  **Publier :** Quand je clique sur le bouton publier, je choisis un TTL (Time To Live). Le worker met à jour le statut de la note dans le store KV (ex : `blog-path: { public: true, expiresIn: 24h }`).

2.  **Dépublier :** Quand je clique sur dépublier, le worker supprime la note du store KV, révoquant instantanément l'accès public.

---

## Analyse de la Conception

Toute architecture implique des compromis. Voici un aperçu des avantages et inconvénients de ce système :

### Les Avantages

*   **Ultra Rapide :** Les Cloudflare Workers fonctionnent à la « périphérie » (proche de l'utilisateur), ce qui signifie une latence minimale. De plus, le niveau gratuit gère jusqu'à 100 000 requêtes par jour.

*   **Zéro Infrastructure :** Aucun serveur à patcher, aucune base de données à gérer, et un coût quasi nul.

*   **Contrôle des Données & Sécurité :** Puisque la source est un dépôt GitHub privé, la seule « porte » vers mes données est le code du Worker que j'ai écrit.

*   **Personnalisation Totale :** Je contrôle le système donc je peux faire en sorte que mes notes ressemblent exactement à ce que je veux.

*   **Offline First :** Puisqu'Obsidian est local, je peux écrire sans connexion internet et synchroniser plus tard.

*   **Historique des Versions :** Git fournit un changelog complet de chaque note, quelque chose de difficile à réaliser avec des bases de données standard.

### Les Inconvénients

*   **Limites de l'API :** Dépendre de l'API GitHub signifie que je dois être attentif aux limites de requêtes (bien que le cache aide).

*   **Recherche :** Implémenter une recherche full-text sur toutes les notes est plus difficile dans un environnement serverless que dans une base de données traditionnelle.

*   **Point de Défaillance Unique :** Si l'API GitHub tombe en panne, le site web ne peut pas récupérer le contenu.

*   **Pas de Collaboration en Temps Réel :** Contrairement à Google Docs, plusieurs personnes ne peuvent pas modifier la même note simultanément en temps réel.

*   **Observabilité Limitée :** Actuellement, il n'y a pas de logging ou d'alerting pour notifier si le Worker échoue.

*   **Complexité :** Contrairement à Notion, si quelque chose casse, c'est moi qui dois corriger le code.

*   **URLs Prévisibles :** Pour l'instant, l'URL de la note publique est prévisible en utilisant le chemin de la note.

---

## Améliorations Possibles

Le système fonctionne, mais un jardin numérique n'est jamais vraiment terminé. Voici ce que je prévois d'ajouter :

* [ ] **Ajouter une UI pour afficher l'historique des versions :** ajouter une interface pour afficher l'historique des versions du dossier/de la note en utilisant l'API GitHub.

* [ ] **Recherche Globale :** Utiliser l'API de recherche GitHub ou un outil d'indexation léger pour me permettre ou permettre aux utilisateurs de chercher dans mes notes publiques/privées.

* [ ] **Basculement de Thème :** Un mode Sombre/Clair approprié pour une meilleure lisibilité.

* [ ] **Callouts Interactifs :** Ajouter le support des « admonitions » ou « alertes » style Obsidian dans le rendu HTML.

* [ ] **Système d'alerting et d'observabilité :** Implémenter un système d'observabilité pour gérer les logs et l'alerting.

* [ ] **Réplication et sauvegarde des notes :** Implémenter un système pour répliquer les notes vers un dépôt Gitlab privé.

* [ ] **Ajouter la randomisation des URLs :** Ajouter la randomisation des URLs pour les rendre plus sécurisées pour les notes publiques.

---

## Réflexions Finales

Construire ce système a été un projet amusant. Plus important encore, je possède maintenant mes données et j'en suis responsable (malgré l'utilisation de GitHub comme base de données 🙂).

Si vous en avez assez de « louer » vos données aux grandes plateformes, je vous encourage vivement à essayer de construire votre propre petit coin du web. Ce n'est qu'une première étape, mais je continuerai à améliorer ce système et à explorer des moyens de posséder mon empreinte numérique.
