import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`flex justify-between items-center mb-12 ${className}`}>
            <h2 className="text-2xl  font-bold text-white max-w-md">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 max-w-md text-base md:text-base">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
