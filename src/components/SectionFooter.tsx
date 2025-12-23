
import { ArrowRight } from 'lucide-react';

interface SectionFooterProps {
    text: string;
    className?: string;
}

const SectionFooter: React.FC<SectionFooterProps> = ({ text, className = '' }) => {
    return (
        <div className={`flex justify-center items-center mt-16 ${className}`}>
            <a
                href="#"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="text-base font-medium">{text}</span>
            </a>
        </div>
    );
};

export default SectionFooter;
