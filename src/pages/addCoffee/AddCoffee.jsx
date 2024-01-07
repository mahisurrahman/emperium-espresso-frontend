import { FaArrowLeft } from "react-icons/fa";
import "./AddCoffee.css";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const navigate = useNavigate();

  const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chefName = form.chefName.value;
    const price = form.price.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addedCoffee = {name, chefName, price, taste, category, details, photo};
    // console.log(addedCoffee);

    fetch('http://localhost:5000/coffees',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addedCoffee),
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      if(data.insertedId){
        Swal.fire("Successfully Added");
        navigate('/');
      }
    })
    .catch(err=>console.log(err))
  }


  return (
    <div className="bg-white px-28 py-10 addCoffeeBG">
      <NavLink to="/">
        <button className="flex font-rancho-font text-2xl text-[#374151] gap-2 items-center hover:font-bold hover:cursor-pointer hover:duration-700">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </button>
      </NavLink>

      <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] my-5 px-20">
        <div className="text-center pt-10 pb-5">
          <h1 className="font-rancho-font text-4xl font-bold text-[#374151] tracking-wider">
            Add a New Coffee
          </h1>
          <p className="font-raleway-font text-black text-sm my-4 tracking-widest">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <div className="font-raleway-font grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-black mb-4 text-md font-semibold">
              Name
            </label>
            <input
              className="bg-white py-2 px-4 w-full"
              type="text"
              name="name"
              placeholder="Enter Coffee Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black mb-4 text-md font-semibold">
              Chef
            </label>
            <input
              className="bg-white py-2 px-4 w-full"
              type="text"
              name="chefName"
              placeholder="Enter Coffee Chef"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black mb-4 text-md font-semibold">
              Price
            </label>
            <input
              className="bg-white py-2 px-4 w-full"
              type="text"
              name="price"
              placeholder="Enter Coffee Price $"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black mb-4 text-md font-semibold">
              Taste
            </label>
            <input
              className="bg-white py-2 px-4 w-full"
              type="text"
              name="taste"
              placeholder="Enter Coffee Taste"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black mb-4 text-md font-semibold">
              Category
            </label>
            <input
              className="bg-white py-2 px-4 w-full"
              type="text"
              name="category"
              placeholder="Enter Coffee Category"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black mb-4 text-md font-semibold">
              Details
            </label>
            <input
              className="bg-white py-2 px-4 w-full"
              type="text"
              name="details"
              placeholder="Enter Coffee Details"
            />
          </div>
        </div>
        <div>
          <div className="mt-4">
            <label className="text-black text-md font-semibold">
              Photo URL
            </label>
            <input
              className="bg-white py-2 px-4 w-full mt-2 mb-5 text-lg"
              type="text"
              name="photo"
              placeholder="Enter Coffee Photo"
            />
          </div>
          <div className="w-full text-centers pb-20">
            <input
              type="submit"
              value="Add Coffee"
              className="w-full font-rancho-font text-[#331A15] text-2xl font-bold border-2 border-[#331A15] rounded-md py-1 bg-[#D2B48C] hover:text-[#D2B48C] hover:bg-[#331A15] hover:cursor-pointer hover:duration-700"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
