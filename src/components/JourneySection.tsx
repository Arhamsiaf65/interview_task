import React from 'react';
import SectionHeader from './SectionHeader';

const JourneySection = () => {
    return (
        <section className="bg-[#1e1e24] py-16 px-32">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Your Setapp journey."
                    subtitle="Type in your task into Setapp search and get instant app recommendations."
                />

                {/* Separator Line */}
                <div className="w-full h-px bg-gray-700 mt-12"></div>
            </div>
        </section>
    );
};

export default JourneySection;
