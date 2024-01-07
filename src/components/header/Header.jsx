import logo from '../../../public/more/logo1.png';
import './header.css';

const Header = () => {
    return (
        <div className='logo-background bg-cover bg-center'>
            <div className='flex justify-center items-center gap-2'>
                <img src={logo} className='w-14 h-14' alt="" />
                <h1 className='font-rancho-font text-white text-3xl tracking-wider'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;