import { IoIosArrowRoundForward } from "react-icons/io";
import monitor from "../assets/monitor-card.webp"
export default function MonitorSection() {
    return (
        <section id="services" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
             <div className="flex flex-cols md:flex-rows items-center justify-between gap-12 md:gap-24">
                {/* left part */}
                 <div className="md:w-1/2 w-full">
                    <p className="text-green-400 font-semibold">Monitor</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Introducing best mobile <br/> carousels</h2>
                    <p className="text-gray-600 mb-8">
                        Before the ship is really back. Round, round, all around the world. Round, all round the world.Round all around the world. Round all around the world.
                    </p>

                    <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                        Learn more about monitoring
                        <IoIosArrowRoundForward className="size-8" />
                    </a>
                 </div>
                {/* right part */}
                <div className="md:w-1/2 w-full">
                    <img src={monitor} alt="monitoring" className="w-full h-auto" />
                </div>
             </div>
        </section>
    )
}