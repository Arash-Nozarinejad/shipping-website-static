import Link from "next/link";

const mainFunction = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Hero = () => {
    return(
        <div className="flex justify-between 2xl:h-[35vh] h-[50vh] mt-1 p-4 bg-blue-50">
            {/* Website title and motto */}
            <div className="flex flex-col w-1/3">
                <h1 className="text-xl font-bold">Shipping & Logistics LLC</h1>
                <h2 className="m-2">All your logistics websites in one place.</h2>
            </div>
            {/* Website main function and button */}
            <div className="flex flex-col w-2/3 items-start justify-end p-1 border-l-4 border-orange-300">
                <p className="mt-1 ml-2 mr-2">{mainFunction}</p>
                <Link className="ml-5 mt-2 p-1 text-sm border-2 border-black rounded-lg hover:bg-gray-100 hover:pointer" href="/services/shipment-tracking">Track Your Shipment</Link>
            </div>
        </div>
    )
}

export default Hero;
