import productOne from "../../../../public/1.png";
import { LiaEyeSolid } from "react-icons/lia";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ coffee }) => {
  const { _id, name, chefName, price } = coffee;
  return (
    <div className="bg-[#F5F4F1] rounded-xl px-10 py-5">
      <div className="flex">
        <div>
          <img src={productOne} className="" alt="" />
        </div>
        <div className="grid grid-cols-1 items-center">
          <div>
            <h1 className="font-raleway-font font-bold text-black my-2">
              Name: <span className="font-light tracking-wider"> {name}</span>
            </h1>
            <h1 className="font-raleway-font font-bold text-black my-2">
              Chef:{" "}
              <span className="font-light tracking-wider"> {chefName}</span>
            </h1>
            <h1 className="font-raleway-font font-bold text-black my-2">
              Price:{" "}
              <span className="font-light tracking-wider">
                <span> {price}</span> Taka
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 ml-10">
          <Link to={"viewCoffee"}>
            <button className=" w-10 h-10 rounded-lg bg-[#D2B48C] px-1 py-1 text-3xl">
              <LiaEyeSolid className="text-white"></LiaEyeSolid>
            </button>
          </Link>
          <Link to={"updateCoffee"}>
            <button className=" w-10 h-10 rounded-lg bg-gray-900 px-1 py-1 text-lg flex items-center justify-center">
              <FaPen className="text-white"></FaPen>
            </button>
          </Link>
          <Link>
            <button className=" w-10 h-10 rounded-lg bg-red-500 px-1 py-1 text-3xl">
              <MdDelete className="text-white"></MdDelete>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
