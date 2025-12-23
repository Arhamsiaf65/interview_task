

const CTASection = () => {
    return (
        <section className="relative py-20 px-32">
            <div className="absolute inset-0">
                <div className="h-1/2 bg-white"></div>
                <div className="h-1/2 bg-[#2B2D32]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="bg-gray-100 rounded-3xl p-16 flex flex-col items-start">
                    {/* Logo */}
                    <div className="mb-8">
                        <img src="/setapp-logo.png" alt="Setapp logo" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Superpowers starting $9.99/month.
                    </h2>
                    <p className="text-5xl font-bold text-gray-900 mb-12">
                        Free for 7 days.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                            Get started now
                        </button>
                        <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
                            More about Setapp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
