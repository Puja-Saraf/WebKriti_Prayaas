import React, { useState } from "react";
import donate from "../img/donate.jpg";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function Donate({ user , func}) {
  const [amount, setAmount] = useState(0);

  if(amount>0) func(amount);

  const navigate=useNavigate();

  const handleClick=()=>{
    if(amount>0) navigate('/checkout');
    else navigate('/');
  }

  return (
    <div
      className="bg-cover h-[100vh]"
      style={{ backgroundImage: `url(${donate})` }}
    >
      <Navbar1 user={user} />
      <div className="mt-24 flex flex-col p-6 md:p-10 lg:p-14 bg-[#306F5E] text-white text-center text-lg md:text-2xl lg:text-3xl tracking-wide">
        <p className="m-auto">Charity is an act of a soft heart ❤️</p>
      </div>
      <div className="flex flex-col p-6 md:p-10 lg:p-14 bg-[#F7D770] text-w[#2C3734] text-center text-md md:text-xl lg:text-2xl tracking-wide">
        <p className="m-auto">
          Please Enter the Amount you wish to Donate (INR)
        </p>
        <input
          className="mt-6 w-56 m-auto p-2 border-2 border-[#636363]"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="0"
        />
        <button
          className="py-3 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white"
          onClick={handleClick}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}
