import { Apple } from 'lucide-react';

const Sticker = ({
    text,
    rotation,
    colorClass,
    positionClass,
    shapeClass = "rounded-xl",
    textColor = "text-[#3f3f46]",
}:
    {
        text: React.ReactNode,
        rotation: string,
        colorClass: string,
        positionClass: string,
        shapeClass?: string
        textColor?: string
    }) => {
    return (
        <div className={`absolute ${positionClass} ${rotation} ${colorClass} ${shapeClass} ${textColor} p-4 shadow-lg flex items-center justify-center text-center font-bold  text-sm md:text-base z-10 select-none hidden lg:flex`}>
            {text}
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-32 overflow-hidden">

            {/* Main Content */}
            <div className="z-20 flex flex-col items-center max-w-4xl mx-auto mt-10">
                {/* Central Logo Box */}
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mb-10 shadow-2xl border border-gray-800">
                    <img className='w-24 h-24 object-contain p-2' src="/setapp-logo.png" alt="" />
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                    Dozens of apps.<br />
                    One subscription.<br />
                    $9.99
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
                        Try free for 7 days
                    </button>
                    <div className="flex gap-2">
                        <div className="bg-white p-3.5 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                            <Apple className="w-6 h-6 text-black" fill="currentColor" />
                        </div>
                        <div className="bg-white p-3.5 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                            {/* Simple Google 'G' icon standard SVG */}
                            <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.13c-.22-.66-.35-1.36-.35-2.13s.13-1.47.35-2.13V7.03H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.97l3.66-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.03l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-gray-400 max-w-sm">
                    Power up your workflow with Setapp, a smart way to get apps.
                </p>
            </div>



            {/* Top Left: WORK WITH PICS */}
            <Sticker
                text={<span className="leading-tight rotate-40">WORK<br />WITH<br />PICS</span>}
                rotation="-rotate-70"
                colorClass="bg-[#F0AD84]"
                textColor="text-[#A54E34]"
                positionClass="top-20 left-20 w-25 h-25"
                shapeClass="rounded-2xl"
            />
            {/* Small donut chart icon near Work with Pics */}
            <div className="hidden lg:flex absolute top-40 left-20 w-8 h-8 bg-[#DF96AE] rounded-full items-center justify-center   z-20">
                <div className="w-4 h-4  border-4 border-[#844461] border-t-transparent rounded-full"></div>
            </div>


            {/* Middle Left: PDF • VPN • AD BLOCKER (Circle with curved text) */}
            <div className="absolute top-42 z-20 left-35 w-20 h-20 rotate-12">
                <div className="relative w-full h-full bg-[#e2e8f0] rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                        </defs>
                        <text className="text-[16px] fill-[#4a5568] font-bold tracking-wider">
                            <textPath href="#circlePath" startOffset="0%">
                                • AD BLOCKER • PDF • VPN
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            {/* Bottom Left: BOOST TEAMWORK (Using stretched rectangle frame) */}
            <div className="absolute bottom-40 left-10 -rotate-6 z-10">
                <div className="relative w-56 h-20">
                    <img src="/streched_rectangle_vector.png" alt="" className="absolute inset-0 w-full h-full object-fill" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#2c5282] font-bold text-base tracking-wide uppercase">
                            BOOST TEAMWORK
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom-Bottom Left: STAY SECURE */}
            <Sticker
                text={<span className="rotate-40 leading-tight">STAY SECURE</span>}
                rotation="-rotate-70"
                textColor="text-[#384C75]"
                colorClass="bg-[#f1f5f9]"
                positionClass="bottom-15 left-24 w-25 h-25"
                shapeClass="rounded-2xl"
            />


            {/* Top Right: FIX WIFI  */}
            <Sticker
                text="FIX WIFI"
                rotation="rotate-12"
                colorClass="bg-[#F6CF98]"
                positionClass="top-25 right-25 w-32 h-14"
                textColor="text-[#A54E34]"
            />

            {/* Middle Right: PLAN YOUR DAY  */}
            <Sticker
                text={<span className="leading-tight">PLAN<br />YOUR<br />DAY</span>}
                rotation="-rotate-28"
                colorClass="bg-[#99D7F1]"
                textColor="text-[#384C75]"
                positionClass="top-35 right-45 w-22 h-22"
                shapeClass="rounded-xl"
            />

            {/* Middle Right: CONVERT TO JPG (Using round curl vector frame with curved text) */}
            <div className="absolute top-72 right-10 w-28 h-28 rotate-12 z-20">
                <div className="relative  w-full h-full">
                    <img src="/round_curl_vector.png" alt="" className="absolute inset-0 w-full h-full object-contain" />

                    {/* SVG for curved text */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                        <defs>
                            <path
                                id="curvedTextPath"
                                d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                            />
                        </defs>
                        <text className="text-[13px]  fill-[#4a5568] font-bold tracking-widest uppercase" transform="rotate(-90 50 50)">
                            <textPath href="#curvedTextPath" startOffset="0%">
                                CONVERT HEIC TO JPG
                            </textPath>
                        </text>
                    </svg>


                </div>
            </div>

            {/* Bottom Right: MANAGE YOUR MAC */}
            <Sticker
                text={<span className="leading-tight">MANAGE<br />YOUR MAC</span>}
                rotation="rotate-12"
                colorClass="bg-[#DF96AE]" // Pink
                positionClass="bottom-38 right-33 w-36 "
                textColor='text-[#844461]'
            />

            {/* Bottom-Bottom Right: CODE EASIER  */}
            <Sticker
                text={<span className="leading-tight">CODE<br />EASIER</span>}
                rotation="-rotate-10"
                colorClass="bg-[#fdba74]"
                positionClass="bottom-15 right-32 w-22 h-22"
                shapeClass="rounded-2xl"
                textColor='text-[#A54E34]'
            />

        </section>
    );
};

export default Hero;
