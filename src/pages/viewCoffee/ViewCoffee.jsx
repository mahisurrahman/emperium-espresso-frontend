import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const coffee = useLoaderData();

  return (
    <div className="px-28 py-10 bg-white">
      <h1 className="my-5 text-center font-rancho-font text-5xl font-bold text-red-950">
        {" "}
        Details of: <span className="text-black">{coffee.name}</span>
      </h1>
      <div className="bg-blue-100 rounded-2xl">
        <div className="grid grid-cols-2 items-center py-10 gap-10 px-10">
          <div>
            <img src={coffee.photo} className="w-full h-full" alt="" />
          </div>
          <div>
            <h1 className="my-2 font-rancho-font text-3xl font-bold text-red-950">
              Name:{" "}
              <span className="text-gray-500 tracking-widest">
                {coffee.name}
              </span>
            </h1>
            <h1 className="my-2 font-rancho-font text-3xl font-bold text-red-950">
              Chef Name:{" "}
              <span className="text-gray-500 tracking-widest">
                {coffee.chefName}
              </span>
            </h1>
            <h1 className="my-2 font-rancho-font text-3xl font-bold text-red-950">
              Taste:{" "}
              <span className="text-gray-500 tracking-widest">
                {coffee.taste}
              </span>
            </h1>
            <h1 className="my-2 font-rancho-font text-3xl font-bold text-red-950">
              Category:{" "}
              <span className="text-gray-500 tracking-widest">
                {coffee.category}
              </span>
            </h1>
            <h1 className="my-2 font-rancho-font text-3xl font-bold text-red-950">
              Price:{" "}
              <span className="text-gray-500 tracking-widest">
                {coffee.price} TK
              </span>
            </h1>
            <h1 className="my-2 font-rancho-font text-3xl font-bold text-red-950">
              Details:{" "}
              <span className="text-gray-500 text-md">{coffee.details}</span>
            </h1>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <button className="mt-5 flex font-rancho-font text-3xl text-[#374151] gap-2 items-center hover:font-bold hover:cursor-pointer hover:duration-700">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ViewCoffee;
