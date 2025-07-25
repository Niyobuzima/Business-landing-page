import slack from "../assets/slack.png";
import woocommerce from "../assets/woocommerce.png";
import amazon from "../assets/amazon.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

export default function CompanyLogo() {

    const logos = [slack, woocommerce, amazon, meundies, sitepoint]
    return (
        <div className="w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start">
           <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 px-4 z-10 sm:text-base text-xl font-semibold text-left">Proud partner at <br /> Hubspot & Segment</div>
           <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => {
                return <img key={index} src={logo} alt="company logo" className="mx-12 h-8 w-26 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
            })}

            {logos.map((logo, index) => {
                return <img key={`duplicates-${index}`} src={logo} alt="company logo" className="mx-12 h-8 w-26 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
            })}

           </div>
        </div>
    )
}