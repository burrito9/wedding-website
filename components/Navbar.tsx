import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Stay', href: '#stay' },
        { name: 'Weekend', href: '#weekend' },
        { name: 'Wedding Day', href: '#wedding-day' },
        { name: 'RSVP', href: '#rsvp' },
        { name: 'FAQs', href: '#faq' },
    ];

    const registryLinks = [
        { name: 'Heath', href: 'https://heathceramics.myshopify.com/apps/registry/mila-roberto-wedding?shared_url=true' },
        { name: 'Zola', href: 'https://www.zola.com/registry/robertoandmila' },
    ];

    const [isRegistryOpen, setIsRegistryOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-brand-off-white/95 backdrop-blur-sm shadow-sm z-50 font-montserrat">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="font-gaegu text-3xl text-gray-800">
                            Mila & Roberto
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium tracking-wider uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                            
                            {/* Registry Dropdown */}
                            <div className="relative group">
                                <button
                                    onMouseEnter={() => setIsRegistryOpen(true)}
                                    onMouseLeave={() => setIsRegistryOpen(false)}
                                    className="text-gray-600 group-hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium tracking-wider uppercase flex items-center"
                                >
                                    Registry
                                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                <div 
                                    onMouseEnter={() => setIsRegistryOpen(true)}
                                    onMouseLeave={() => setIsRegistryOpen(false)}
                                    className={`absolute right-0 w-40 bg-white border border-gray-100 rounded-md shadow-lg py-1 transition-all duration-200 ${isRegistryOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                                >
                                    {registryLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-brand-off-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-brand-orange hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-orange"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-brand-orange hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        {/* Mobile Registry Section */}
                        <div className="pt-2 pb-1 border-t border-gray-100">
                            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Registry</p>
                            {registryLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-brand-orange hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium pl-6"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;