const Banner = () => {
    return (
        <div className="bg-[url('/BannerBG.svg')] bg-no-repeat bg-center text-center px-4 lg:px-64 py-20 lg:py-32 mt-4 lg:mt-10 rounded-2xl mx-4 flex flex-col items-center justify-center">
            <h2 className="text-xl lg:text-6xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h2>
            <p className="text-white text-base lg:text-lg mt-4">Discover the joy of cooking with fresh ingredients and elevate your culinary skills to new heights in a welcoming and supportive environment.</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
                <button className="btn bg-[#0BE58A] border-none">Explore Now</button>
                <button className="btn bg-transparent text-white">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;