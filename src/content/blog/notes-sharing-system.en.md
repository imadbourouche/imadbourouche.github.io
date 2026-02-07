---

title: "Building a note sharing system for free: Why i ditched notion for my own stack"

summary: "Why i built my own note sharing system using Obsidian, GitHub, and Cloudflare Workers."

date: "2026-01-21"

tags: ["Obsidian", "GitHub", "Cloudflare", "Nodejs"]

readTime: "5 min read"

---

## Context

Recently, I became interested in hosting and owning my own data. I started with the basics: my notes. I had been using Notion for a long time, but I realized that I didn't truly own my data and was dependent on their platform. I needed a replacement and found [Obsidian](https://obsidian.md/), which proved to be an excellent alternative.

With Obsidian, I could sync notes across devices using GitHub. However, at work, sharing documentation was often a pain, links would break or permissions would get messy. I wanted a solution that combined the privacy of local files with the ability to share notes publicly on my own domain whenever I wanted.

So, I built this system. *Take a look at [public note at notes.imadbourouche.site](https://notes.imadbourouche.site/public/Public_note.md)*

---

## Why i build this ?

### 1. Data Sovereignty

Before this, I was using Notion. It’s a great tool, but I didn't truly "own" my data. If Notion goes down or changes its pricing, my knowledge base is at risk. By moving to a system where I use Obsidian locally and sync via GitHub, I regained full control. My notes are just `.md` files on my hard drive. No vendor lock-in.

### 2. The Broken Link Problem

By hosting notes on my own subdomain, I created a stable, permanent reference point. When I share a link with a colleague, they know exactly where it’s coming from, and I know that link will never expire or change.

### 3. The Joy of Engineering

Building tools is fun. Implementing a system that handles Markdown parsing, GitHub API integration, and Edge computing (Cloudflare Workers) was a rewarding technical challenge.

---

## Technical Implementation

I wanted this notes-sharing system to be as simple as possible. The system is designed to be "serverless" and lightweight. I wanted to be able to edit a note on my phone or laptop, have my website update automatically, and easily share notes with the public.

### Global Architecture

![architecture](/architecture.webp)

1. **The Source (Obsidian):** I write and organize everything in Obsidian. It provides a beautiful local interface and supports standard Markdown. Its local-first approach ensures my data is always accessible, even offline.

2. **The Hosting (GitHub):** When I save a note, I push it to a private GitHub repository (using the Obsidian Git plugin). This acts as my database and version control system. GitHub provides improved reliability and a granular history of changes compared to a traditional database, and best of all, it's free.

3. **The Proxy (Cloudflare Workers):** I chose Cloudflare Workers as a proxy between GitHub and my website for performance and simplicity. It will handle:
	- Authentication and permissions.
	- Fetching the raw Markdown file from the GitHub API.
	- Parsing the Markdown and rendering it into clean HTML on the fly.
	- Publishing/Unpublishing of notes.
	- Security (storing private keys) and rate limiting.
	- Running at the edge ensures minimal latency for anyone accessing the notes.

### Sharing Notes

![sharing-notes](/sharing-notes.webp)

I use **Cloudflare's Key-Value (KV) storage** to manage the "Publish/Unpublish" status of notes.

*   **Why KV?** It decouples the content (GitHub) from the access state (KV). This allows for instant toggling of visibility and supports Time-to-Live (TTL) natively, which is perfect for temporary or permanent shares.

1.  **Publish:** When I click the publish button, I choose a TTL (Time To Live). The worker updates the note's status in the KV store (e.g., `blog-path: { public: true, expiresIn: 24h }`).

2.  **Unpublish:** When I click unpublish, the worker removes the note from the KV store, instantly revoking public access.

---

## Design Analysis

Every architecture involves trade-offs. Here is a look at the pros and cons of this system:

### The Pros

*   **Blazing Fast:** Cloudflare Workers run at the "edge" (close to the user), meaning minimal latency. Plus, the free tier handles up to 100,000 requests per day.

*   **Zero Infrastructure:** No servers to patch, no databases to manage, and almost zero cost.

*   **Data Control & Security:** Since the source is a private GitHub repo, the only "door" to my data is the Worker code I wrote.

*   **Full Customization:** I control the system so i can make my notes look exactly how I want.

*   **Offline First:** Since Obsidian is local, I can write without an internet connection and sync later.

*   **Version History:** Git provides a complete changelog of every note, something difficult to achieve with standard databases.

### The Cons

*   **API Rate Limits:** Relying on the GitHub API means I have to be mindful of request limits (though caching helps).

*   **Searchability:** Implementing a full-text search across all notes is more difficult in a serverless environment than in a traditional database.

*   **Single Point of Failure:** If GitHub's API goes down, the website cannot fetch content.

*   **No Real-time Collaboration:** Unlike Google Docs, multiple people cannot edit the same note simultaneously in real-time.

*   **Limited Observability:** Currently, there is no logging or alerting to notify if the Worker fails.

*   **Complexity:** Unlike Notion, if something breaks, I’m the one who has to fix the code.

*   **Predictible URLs:** For now the url of the public note is predictible using the path of the note.

---

## Possible improvements

The system works, but a digital garden is never truly finished. Here is what I’m planning to add:

* [ ] **Add UI to show version history:** adding a UI to show version history of the folder/note using github API.

* [ ] **Global Search:** Using the GitHub search API or a lightweight indexing tool to allow me or users to search through my public/private notes.

* [ ] **Theme Toggling:** A proper Dark/Light mode for better readability.

* [ ] **Interactive Callouts:** Adding support for Obsidian-style "admonitions" or "alerts" in the HTML rendering.

* [ ] **Alerting and observability system:** Implementing an observability system to handle logs and alerting.

* [ ] **Notes replication and buckup:** Implementing a system to replicate notes to a private Gitlab repository.

* [ ] **Add url randomization:** Add url randomization to make it more secure for public notes.

---

## Final Thoughts

Building this system was a fun project. Most importantly, I now own my data and i am responsible for it (despite using GitHub as a database 🙂).

If you’re tired of "renting" your data from big platforms, I highly encourage you to try building your own small corner of the web. This is just a first step, but I'll continue to Improving this system and explore ways to own my digital footprint.
