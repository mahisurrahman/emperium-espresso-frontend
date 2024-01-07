import iconOne from '../../../public/icons/1.png';
import iconTwo from '../../../public/icons/2.png';
import iconThree from '../../../public/icons/3.png';
import iconFour from '../../../public/icons/4.png';

const RibbonBanner = () => {
    return (
        <div className="bg-[#ECEAE3] px-28">
            <div className='flex justify-evenly gap-10 py-10'>
                <div className=''>
                    <img src={iconOne} className='w-16' alt="" />
                    <h1 className='font-rancho-font text-[#1B1A1A] text-3xl mt-3 mb-1'>Awesome Aroma</h1>
                    <p className='text-[#1B1A1A] text-xs'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className=''>
                    <img src={iconTwo} className='w-16' alt="" />
                    <h1 className='font-rancho-font text-[#1B1A1A] text-3xl mt-3 mb-1'>High Quality</h1>
                    <p className='text-[#1B1A1A] text-xs'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className=''>
                    <img src={iconThree} className='w-16' alt="" />
                    <h1 className='font-rancho-font text-[#1B1A1A] text-3xl mt-3 mb-1'>Pure Grades</h1>
                    <p className='text-[#1B1A1A] text-xs'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className=''>
                    <img src={iconFour} className='w-16' alt="" />
                    <h1 className='font-rancho-font text-[#1B1A1A] text-3xl mt-3 mb-1'>Proper Roasting</h1>
                    <p className='text-[#1B1A1A] text-xs'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default RibbonBanner;