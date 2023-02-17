import React from "react";
import EmiCard from "./short/EmiCard";
import AddCart from "./short/AddCart";
import SellRow from "./SellRow";
import { IoMdExit, IoIosArrowDown } from "react-icons/io";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillExclamationCircle,
} from "react-icons/ai";
import { MdLocalOffer, MdOutlineDeliveryDining } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { FaMoneyBillAlt, FaAmazonPay } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div className="single pb-8">
      <div className="flex gap-2 lg:container md:mx-4 lg:mx-auto md:justify-between max-md:mx-auto max-md:container max-md:flex-col px-4">
        <div className="text-black md:grid md:grid-cols-1 gap-2 md:mx-4 my-4 w-16 h-10 flex max-md:hidden md:sticky top-[100px] -z-10">
          <img src="/headphone.webp" alt="" className="object-cover" />
          <img src="/headphone2.webp" alt="" className="object-cover" />
          <img src="/headphone3.webp" alt="" className="object-cover" />
          <img src="/headphone.webp" alt="" className="object-cover" />
        </div>
        <div className="md:pt-6 w-full xl:w-[32rem] md:w-[26rem] md:h-[25rem] md:sticky top-10 -z-10">
          <IoMdExit
            size={30}
            className="bg-black rotate-90 float-right mb-2 rounded-full p-1 max-md:hidden"
          />
          <img
            src="/headphone3.webp"
            alt=""
            className=" md:w-[32rem] md:h-[26rem] w-full max-md:mt-6 object-cover"
          />
          <div className="text-black md:text-2xl text-lg font-semibold text-center my-4 hidden">
            Short Description Short Description Short Description Short
            Description Short Description Short Description
          </div>
        </div>

        <div className="text-black gap-2 md:mx-4 mt-2 max-[460px]:w-14 w-20 h-10 flex md:hidden">
          <img src="/headphone.webp" alt="" className="object-cover" />
          <img src="/headphone2.webp" alt="" className="object-cover" />
          <img src="/headphone3.webp" alt="" className="object-cover" />
          <img src="/headphone.webp" alt="" className="object-cover" />
        </div>
        <div className="flex flex-col my-2 gap-4 md:hidden  sm:mx-auto sm:w-full">
          <Link to="/cart">
          <button className="bg-yellow-400 rounded-full w-full py-2 text-black text-sm shadow hover:shadow-2xl hover:bg-green-400 transition-all ease-in-out">
            Add To Cart
          </button>
          </Link>
          <Link to="/checkout">
          <button className="bg-amber-500 rounded-full w-full py-2 text-black text-sm shadow hover:shadow-2xl hover:bg-green-400 transition-all ease-in-out">
            Buy Now
          </button>
          </Link>
        </div>
        <div className="md:pt-6 pt-4 flex flex-col pl-2">
          <h2 className="text-black md:text-3xl text-2xl font-semibold">
            Vega Atom Helmet
          </h2>
          <h3 className="text-cyan-700 font-semibold">Visit The VEGA Store</h3>
          <div className="flex border-b gap-2 pb-2">
            <div className="flex">
              <AiFillStar style={{ background: "#F7DC6F " }} />
              <AiFillStar style={{ background: "#F7DC6F " }} />
              <AiFillStar style={{ background: "#F7DC6F " }} />
              <AiFillStar style={{ background: "#F7DC6F " }} />
              <AiOutlineStar style={{ background: "#F7DC6F " }} />
            </div>
            <IoIosArrowDown className="bg-black" />
            <p className="text-cyan-700 font-semibold">10,987 Ratings</p>
          </div>
          <div className="flex flex-col gap-1 border-b pb-2">
            <div className="flex gap-2 pt-2">
              <h5 className="text-red-800 text-3xl">-5%</h5>
              <h4 className="text-3xl text-black">৳848</h4>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-600">M.R.P :</p>
              <p className="text-gray-600">৳890</p>
            </div>
            <p className="text-black">Inclusive of all taxes</p>
          </div>
          <div className="border-b pb-4">
            <div className="flex gap-6">
              <MdLocalOffer className="bg-black mt-1" />
              <h6 className="text-black font-bold">Offers</h6>
            </div>
            <div className="flex gap-2">
              <EmiCard
                title="No Cost EMI"
                subTitle="Avail No Cost EMI on select cards for orders above ₹3000"
                qty="1 offer"
              />
              <EmiCard
                title="No Cost EMI"
                subTitle="Avail No Cost EMI on select cards for orders above ₹3000"
                qty="1 offer"
              />
            </div>
          </div>
          <div className="flex mt-4 mx-1 gap-8 border-b pb-2">
            <div className="">
              <BsTruck
                size={40}
                className="ml-2 mb-1 px-2 bg-gray-400 rounded-full"
              />
              <p className=" text-center w-14 text-cyan-700 font-semibold">
                Free Delivery
              </p>
            </div>
            <div>
              <FaMoneyBillAlt
                size={40}
                className="ml-2 mb-1 px-2 bg-gray-400 rounded-full"
              />
              <p className=" text-center w-14 text-cyan-700 font-semibold">
                Free Delivery
              </p>
            </div>
            <div>
              <MdOutlineDeliveryDining
                size={40}
                className="ml-2 mb-1 px-2 bg-gray-400 rounded-full"
              />
              <p className=" text-center w-14 text-cyan-700 font-semibold">
                Free Delivery
              </p>
            </div>
            <div>
              <FaAmazonPay
                size={40}
                className="ml-2 mb-1 px-2 bg-gray-400 rounded-full"
              />
              <p className=" text-center w-14 text-cyan-700 font-semibold">
                Free Delivery
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 border-b pb-4">
            <div className="flex gap-1">
              <h5 className="text-black">Colour:</h5>
              <h6 className="text-black font-bold">Dull Black</h6>
            </div>
            <div className="flex w-10 h-10 border gap-2 my-1">
              <img src="/headphone.webp" className="object-cover" alt="" />
              <img src="/headphone.webp" className="object-cover" alt="" />
              <img src="/headphone.webp" className="object-cover" alt="" />
              <img src="/headphone.webp" className="object-cover" alt="" />
            </div>
            <div className="flex gap-1">
              <h5 className="text-black">Size:</h5>
              <h6 className="text-black font-bold">(M)58CM</h6>
            </div>
            <div className="flex gap-1">
              <h5 className="text-black">Style</h5>
              <h6 className="text-black font-bold">(M)57-58CM</h6>
            </div>
            <div className="flex gap-1">
              <h5 className="text-black">Design</h5>
              <h6 className="text-black font-bold">Dull Black Helmet-M</h6>
            </div>
            <div className="flex flex-col gap-2 max-w-sm">
              <button className="text-black text-lg  border-gray-200 border py-1 hover:bg-gray-100 focus:ring-1 focus:shadow-2xl focus:font-bold ring-orange-400">
                Dull Black Helmet-M
              </button>
              <button className="text-black text-lg  border-gray-200 border py-1 hover:bg-gray-100 focus:ring-1 focus:shadow-2xl focus:font-bold ring-orange-400">
                Dull Black Helmet-M
              </button>
              <button className="text-black text-lg  border-gray-200 border py-1 hover:bg-gray-100 focus:ring-1 focus:shadow-2xl focus:font-bold ring-orange-400">
                Dull Black Helmet-M dasskasodsoidqdiolp;lpjjtj
              </button>
              <button className="text-black text-lg  border-gray-200 border py-1 hover:bg-gray-100 focus:ring-1 focus:shadow-2xl focus:font-bold ring-orange-400">
                Dull Black Helmet-M
              </button>
            </div>
            <div className="flex">
              <h5 className="text-black font-bold w-24">Colour</h5>
              <h6 className="text-black">Dull Black</h6>
            </div>
            <div className="flex">
              <h5 className="text-black font-bold w-24">Brand</h5>
              <h6 className="text-black">Dull Black</h6>
            </div>
            <div className="flex">
              <h5 className="text-black font-bold w-24">Colour</h5>
              <h6 className="text-black">Dull Black</h6>
            </div>
            <div className="flex">
              <h5 className="text-black font-bold w-24">Colour</h5>
              <h6 className="text-black">Dull Black</h6>
            </div>
          </div>

          <div className="my-2 pb-2">
            <h5 className="text-black font-bold text-xl pb-1">
              About this item
            </h5>
            <ul className="w-96 pl-6">
              <li className="text-black list-disc">
                Product 1: High Impact ABS Material Shell
              </li>
              <li className="text-black list-disc">
                Product 1: High Impact ABS Material Shell
              </li>
              <li className="text-black list-disc">
                Product 2: ISI Certified with IS no.: IS 4151:2015 and CM/L no.:
                8300128208
              </li>
              <li className="text-black list-disc">
                Product 1: High Impact ABS Material Shell
              </li>
            </ul>
          </div>

          <div className="border flex max-w-sm">
            <div>
              <img src="/mouse2.webp" alt="" className="w-44 h-[6.3rem] object-cover pr-4" />
            </div>
            <div className=" py-2">
              <h6 className="text-black text-sm">
                Vega Off Road D/V Secret Dull Anthracite Black Helmet-L
              </h6>
              <div className="flex gap-2">
                <span className="flex">
                  <AiFillStar style={{ background: "#F7DC6F " }} />
                  <AiFillStar style={{ background: "#F7DC6F " }} />
                  <AiFillStar style={{ background: "#F7DC6F " }} />
                  <AiFillStar style={{ background: "#F7DC6F " }} />
                  <AiOutlineStar style={{ background: "#F7DC6F " }} />
                </span>
                <span>
                  <p className="text-gray-500 text-sm">4,817</p>
                </span>
              </div>
              <div>
                <h6 className="text-red-700 text-xl font-semibold -mt-1">
                  ৳1,871.00
                </h6>
              </div>
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <p className="text-gray-500 text-sm font-semibold">Sponsered</p>
            <AiFillExclamationCircle className="bg-black" />
          </div>
        </div>
        <div className="h-full">
          <AddCart />
        </div>
      </div>
      <div className="bg-gray-200 py-6 z-50">
        <SellRow />
      </div>
    </div>
  );
};

export default SingleProduct;
