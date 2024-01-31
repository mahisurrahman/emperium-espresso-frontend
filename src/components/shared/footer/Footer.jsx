import "./footer.css";
import logo01 from "../../../../public/more/logo1.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 footer-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 px-4 md:px-28">
        <div>
          <div>
            <img src={logo01} className="w-10 h-10 my-2" alt="" />
            <h1 className="font-rancho-font text-4xl font-bold text-[#331A15]">
              Espresso Emperium
            </h1>
            <p className="font-raleway-font text-xs text-black my-4 tracking-widest">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion
            </p>
            <div className="flex gap-2">
              <FaFacebook className="text-3xl text-[#331A15]"></FaFacebook>
              <FaInstagram className="text-3xl text-[#331A15]"></FaInstagram>
              <FaYoutube className="text-3xl text-[#331A15]"></FaYoutube>
              <FaTwitter className="text-3xl text-[#331A15]"></FaTwitter>
            </div>
          </div>
          <div className="pt-10 pb-2">
            <h1 className="font-rancho-font text-3xl font-bold text-[#331A15]">
              Get In Touch
            </h1>
          </div>
          <div>
            <div className="mb-2 flex gap-5 items-center text-[#331A15]">
              <FaPhone></FaPhone>
              <h1>+8801621754583</h1>
            </div>
            <div className="mb-2 flex gap-5 items-center text-[#331A15]">
              <FaEnvelope></FaEnvelope>
              <h1>mahisur.rahman.001@gmail.com</h1>
            </div>
            <div className="mb-2 flex gap-5 items-center text-[#331A15]">
              <FaLocationArrow></FaLocationArrow>
              <h1>359no. Saha Suja Road, Baburail Boubazar, Narayangonj</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center pt-10">
          <h1 className="font-rancho-font text-3xl font-bold text-[#331A15]">
            Contact With Us
          </h1>
          <form>
            <input className="bg-white px-4 py-2 w-full md:w-10/12 my-2" type="text" name="name" placeholder="Name" />
            <br />
            <input className="bg-white px-4 py-2 w-full md:w-10/12 my-2" type="email" name="email" placeholder="Email" />
            <br />
            <textarea className="bg-white px-4 py-2 w-full md:w-10/12 my-2" placeholder="Message" name="text" cols="30" rows="5"></textarea>
            <input type="submit" value="Send Message" className="px-4 py-1 font-rancho-font text-lg text-[#331A15] border-2 border-[#331A15] rounded-3xl" />
          </form>
        </div>
      </div>
      <div className="down-footer py-1 text-center mt-10">
        <h1 className="font-rancho-font text-xl text-white font-light px-4 md:px-0">
          Copyright Espresso Emporium by Mahisur Rahman! All Rights Reserved © 2024
        </h1>
      </div>
    </div>
  );
};

export default Footer;
