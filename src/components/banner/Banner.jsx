import './banner.css';

const Banner = () => {
    return (
        <div className="banner-css w-full min-h-screen grid grid-cols-1 md:grid-cols-3">
            <div className='col-span-1 hidden md:block'></div>
            <div className='col-span-2 flex items-center px-4 md:px-20'>
                <div className='ml-0 md:ml-20'>
                    <h1 className='font-rancho-font text-5xl md:text-4xl text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white font-raleway-font text-lg md:text-sm tracking-widest font-light my-4 '>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='text-[#242222] px-4 py-2 bg-[#E3B577] font-rancho-font text-2xl hover:text-[#E3B577] hover:bg-[#242222] hover:cursor-pointer hover:duration-700 hover:rounded-2xl'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;