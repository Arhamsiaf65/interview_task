import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    image: string;
    hasVideo?: boolean;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
        author: "Jason Staczek",
        image: "/person.png",
        hasVideo: true
    },
    {
        id: 2,
        quote: "Setapp helps me streamline my workflow and focus on what matters most - creating amazing content.",
        author: "Sarah Johnson",
        image: "/person.png",
        hasVideo: false
    },
    {
        id: 3,
        quote: "With Setapp, I have access to all the tools I need without the hassle of managing multiple subscriptions.",
        author: "Michael Chen",
        image: "/person.png",
        hasVideo: false
    },
    {
        id: 4,
        quote: "The productivity boost I get from Setapp is incredible. It's like having a Swiss Army knife for my Mac.",
        author: "Emily Rodriguez",
        image: "/person.png",
        hasVideo: false
    }
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className=" py-20 px-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-[#765070]  rounded-3xl overflow-hidden min-h-[400px] flex items-center">
                    {/* Content */}
                    <div className="flex flex-col md:flex-row items-center w-full px-12 pt-12 gap-12">
                        {/* Left Side - Text Content */}
                        <div className="flex-1 z-10">
                            <p className="text-white text-xl   leading-relaxed mb-8">
                                {currentTestimonial.quote}
                            </p>
                            <p className="text-white/70 text-base mb-8">
                                {currentTestimonial.author}
                            </p>

                            {currentTestimonial.hasVideo && (
                                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors group">
                                    <Play className="w-6 h-6 text-[#6B5B7E] ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                                </button>
                            )}
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex-1 relative">

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute right-10  -translate-y-1/2 w-12 h-12  hover:bg-white/20  rounded-full flex items-center justify-center transition-all z-20"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute right-0  -translate-y-1/2 w-12 h-12 hover:bg-white/20  rounded-full flex items-center justify-center transition-all z-20"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.author}
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>
                    </div>


                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-white w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
