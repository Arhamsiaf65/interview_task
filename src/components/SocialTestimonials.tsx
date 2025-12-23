import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface SocialTestimonial {
    id: number;
    text: string;
    author: string;
    handle: string;
    platform: 'twitter' | 'instagram' | 'facebook';
    color: string;
}

const socialTestimonials: SocialTestimonial[] = [
    {
        id: 1,
        text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
        author: "Arash Pourhabibi",
        handle: "@ArashPourhabibi",
        platform: "twitter",
        color: "bg-[#6B7B9E]"
    },
    {
        id: 2,
        text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
        author: "Mauricio Sanchez",
        handle: "@m7x11",
        platform: "instagram",
        color: "bg-[#D4A574]"
    },
    {
        id: 3,
        text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
        author: "Meredith Sweet",
        handle: "@meredith.sweet.illustration",
        platform: "facebook",
        color: "bg-[#8B6B8E]"
    },
    {
        id: 4,
        text: "Setapp has completely transformed my workflow. I can't imagine working without it now!",
        author: "John Doe",
        handle: "@johndoe",
        platform: "twitter",
        color: "bg-[#6B7B9E]"
    },
    {
        id: 5,
        text: "The variety of apps available on Setapp is incredible. It's like having a Swiss Army knife for productivity!",
        author: "Jane Smith",
        handle: "@janesmith",
        platform: "instagram",
        color: "bg-[#D4A574]"
    },
    {
        id: 6,
        text: "Best subscription I've ever had. Setapp saves me time and money every single day.",
        author: "Mike Johnson",
        handle: "@mikejohnson",
        platform: "facebook",
        color: "bg-[#8B6B8E]"
    }
];

const SocialIcon = ({ platform }: { platform: string }) => {
    const iconClass = "w-4 h-4";

    switch (platform) {
        case 'twitter':
            return <Twitter className={iconClass} />;
        case 'instagram':
            return <Instagram className={iconClass} />;
        case 'facebook':
            return <Facebook className={iconClass} />;
        default:
            return <Twitter className={iconClass} />;
    }
};

const SocialTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(socialTestimonials.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const visibleTestimonials = socialTestimonials.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <section className="bg-white py-20 px-12">
            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Setapp in your words.</h2>
                    <div className="flex items-center gap-6">
                        <p className="text-gray-600 ">What you say about how Setapp powers you up.</p>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-[#4267B2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Facebook className="w-5 h-5 text-white" fill="currentColor" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Twitter className="w-5 h-5 text-white" fill="currentColor" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Youtube className="w-5 h-5 text-white" fill="currentColor" />
                            </a>
                        </div>


                    </div>
                </div>


                {/* Navigation Arrows */}
                <div className="flex gap-2 absolute right-0 top-15">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>



                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-18 mb-8">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`${testimonial.color} rounded-2xl p-8 text-white min-h-[280px] flex flex-col justify-between`}
                        >
                            <p className="text-base leading-relaxed mb-6">
                                {testimonial.text}
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.author}</p>
                                    <p className="text-sm opacity-80">{testimonial.handle}</p>
                                </div>
                                <div className="opacity-80">
                                    <SocialIcon platform={testimonial.platform} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-gray-900 w-8'
                                : 'bg-gray-400 hover:bg-gray-600'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialTestimonials;
