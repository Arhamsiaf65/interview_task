import React from 'react';
import { ArrowRight, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#2a2a2e] text-white py-16 px-32">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                    {/* Logo and Newsletter */}
                    <div className="md:col-span-2">
                        {/* Logo */}
                        <div className="flex gap-2 items-center  mb-8">
                            <img className='w-6 h-6' src="/setapp-logo.png" alt="" />
                            <span className="text-xl font-semibold">SETAPP</span>
                        </div>

                        {/* Newsletter */}
                        <p className="text-gray-400 text-sm mb-4">
                            Updates from our team, written with love 🧡
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-[#3a3a3e] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            <button className="bg-white text-gray-900 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* DMCA Badge */}
                        <div className="mt-8">
                            <div className="inline-flex items-center gap-2 bg-[#3a3a3e] px-3 py-2 rounded text-xs text-gray-400">
                                <span className="font-semibold">DMCA</span>
                                <span>PROTECTED</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 1 */}
                    <div>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Apps</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Setapp for Teams</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Podcast</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Download</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Education Discount</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Family Plan</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For Developers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gift Cards</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Redeem Card or Code</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Setapp Reviews</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mac Developer Survey 2023</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Getting started with Setapp</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Remote access to other Mac</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fix macOS Ventura problems</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best productivity apps</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best YouTube downloaders</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Uninstall apps</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <div className="text-xs text-gray-500">
                        <p>© 2023 Setapp Limited, 7 Hallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425018H</p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        </div>
                    </div>

                    {/* Language and Social */}
                    <div className="flex items-center gap-6">
                        {/* Language Selector */}
                        <div className="flex items-center gap-2 text-sm">
                            <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-3" />
                            <span>English</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
