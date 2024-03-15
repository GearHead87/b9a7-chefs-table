// import BannerBG from "../assets/BannerBG.svg"
const Banner = () => {
    return (
        <div className="bg-bannerBG bg-no-repeat bg-center text-center px-10 lg:px-64 py-4 lg:py-32 mt-4 lg:mt-10 rounded-2xl flex flex-col items-center justify-center">
            <h2 className="text-xl lg:text-6xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h2>\
            <p className="text-white text-base lg:text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <button className="btn bg-[#0BE58A] border-none">Explore Now</button>
            <button className="btn bg-transparent text-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;