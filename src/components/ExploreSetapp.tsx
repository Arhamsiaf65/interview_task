import React from 'react';
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';

const ExploreSetapp = () => {
    return (
        <section className="bg-[#1e1e24] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="What you get on Setapp."
                    subtitle="With a single monthly subscription at $9.99, you get 240+ apps for your Mac."
                />

                {/* Feature Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Large Feature Card - Keep your Mac clean */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-[#E8A5C0] to-[#C98FB0] rounded-3xl p-8 overflow-hidden relative">
                        <div className="flex items-start gap-6 mb-6">
                            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                                <img src="/macpaw.svg.png" alt="CleanMyMac" className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#5a1a3a] mb-2">Keep your Mac clean</h3>
                                <p className="text-[#7a3a5a] text-sm">Remove junk, scan for malware, wipe email attachments</p>
                            </div>
                        </div>

                        {/* App Screenshot */}
                        <div className="relative">
                            <img
                                src="/app_info_sction_img.png"
                                alt="CleanMyMac Interface"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Write Code Card */}
                    <div className="bg-[#F5F1E8] rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#5BA3E0] rounded-2xl flex items-center justify-center flex-shrink-0">
                                <img src="/code.svg.png" alt="Code" className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Write code</h3>
                                <p className="text-gray-600 text-sm">Create applications in more than 25 languages</p>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <img
                                src="/coderunner.png.png"
                                alt="Code Editor"
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Join Meetings Card */}
                    <div className="bg-[#4A6B8A] rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                                <div className="w-10 h-10 bg-[#7B9FBF] rounded-full flex items-center justify-center">
                                    <div className="flex gap-0.5">
                                        <div className="w-1 h-4 bg-white rounded-full"></div>
                                        <div className="w-1 h-5 bg-white rounded-full"></div>
                                        <div className="w-1 h-3 bg-white rounded-full"></div>
                                        <div className="w-1 h-5 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Join meetings in a click</h3>
                                <p className="text-gray-300 text-sm">Quickly access links to your meetings from menu bar</p>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <img
                                src="/meeter.png.png"
                                alt="Meeter App"
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                <SectionFooter text="View all superpowers" />
            </div>
        </section>
    );
};

export default ExploreSetapp;
