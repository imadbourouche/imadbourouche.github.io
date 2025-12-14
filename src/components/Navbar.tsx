import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '/blog' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Only track sections on home page
            if (location.pathname === '/') {
                const sections = navLinks
                    .filter(link => link.href.startsWith('#'))
                    .map(link => link.href.substring(1));

                const current = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });

                if (current) {
                    setActiveSection(current);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Set active section based on path for non-home pages
    useEffect(() => {
        if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) {
            setActiveSection('blog');
        } else if (location.pathname === '/') {
            // Logic handled by scroll listener
        }
    }, [location.pathname]);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href.startsWith('/')) {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Hash link
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation then scroll
                setTimeout(() => {
                    const id = href.substring(1);
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                const id = href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const isActive = (link: { name: string, href: string }) => {
        if (link.href.startsWith('/')) {
            return location.pathname.startsWith(link.href);
        }
        return activeSection === link.href.substring(1);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/'
                        ? 'bg-white/95 backdrop-blur-sm shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-center relative">

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`text-slate-600 hover:text-slate-900 transition-colors relative ${isActive(link) ? 'text-slate-900' : ''
                                        }`}
                                >
                                    {link.name}
                                    {isActive(link) && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-500"></span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden absolute right-0 text-slate-900 hover:text-teal-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>

                    <div className="absolute top-20 left-0 right-0 bg-white shadow-2xl mx-4 rounded-2xl p-6">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`text-left px-4 py-3 rounded-lg transition-colors ${isActive(link)
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
