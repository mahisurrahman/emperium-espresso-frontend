import { RiCupLine } from "react-icons/ri";
import "./allproducts.css";
import { Link } from "react-router-dom";
import Cards from '../shared/cards/Cards';

const AllProducts = ({coffees}) => { 
  const allCoffees = coffees;
  return (
    <div className="allProductsCSS py-10 md:py-20">
      <div className="px-4 md:px-28">
        <div>
          <div className="text-center">
            <h1 className="text-[#1B1A1A] text-lg font-raleway-font">
              {" "}
              --- Sip & Savor ---{" "}
            </h1>
            <h1 className="text-[#331A15] text-5xl font-bold font-rancho-font drop-shadow-xl drop-shadow-black">
              Our Popular Products
            </h1>
          </div>
          <div className="flex justify-center">
            <Link to={`addCoffee`}>
              <button className="flex gap-2 bg-[#E3B577] px-4 py-2 rounded-md items-center text-white text-xl mt-5 font-rancho-font border-2 border-[#331A15] hover:text-black hover:rounded-full hover:cursor-pointer hover:duration-700">
                Add Coffee <RiCupLine className="text-[#331A15] "></RiCupLine>
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {
            allCoffees.map(coffee=><Cards key={coffee._id} coffee={coffee}></Cards>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
