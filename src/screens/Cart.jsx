import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-start flex-col items-start space-y-2">
        <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
          <svg
            className="fill-stroke"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/1000/svg"
          >
            <path
              d="M2.91681 7H11.0835"
              stroke="currentColor"
              strokeWidth="0.666667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91681 7L5.25014 9.33333"
              stroke="currentColor"
              strokeWidth="0.666667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91681 7.00002L5.25014 4.66669"
              stroke="currentColor"
              strokeWidth="0.666667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm leading-none">Back</p>
        </button>
        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Cart
        </p>
        <Link to="/product">
        <p className="text-base leading-normal sm:leading-4 text-gray-600">
          Home {">"} Electronics {">"} Products {">"} Cart
        </p>
        </Link>
      </div>
      <div className="flex shadow-2xl my-10 border">
        <div className="w-3/4 px-10 py-10 sm:border-r">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl text-cyan-700">
              Shopping Cart
            </h1>
            <h2 className="font-semibold text-2xl text-cyan-700">3 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-cyan-700 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-cyan-700 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-cyan-700 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-cyan-700 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          <div className="flex items-center hover:bg-gray-200 -mx-8 px-6 py-5 bg-gray-100">
            <div className="flex w-2/5">
              {" "}
              {/* product */}
              <div className="w-20">
                <img
                  className="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm text-black">Iphone 6S</span>
                <span className="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-black w-3 "
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 border text-center w-8"
                type="text"
                defaultValue={1}
              />
              <svg
                className="fill-current text-black w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm text-cyan-700">
              ???400.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm text-cyan-700">
              ???400.00
            </span>
          </div>
          <div className="flex items-center hover:bg-gray-200 -mx-8 px-6 py-5 bg-gray-100">
            <div className="flex w-2/5">
              <div className="w-20">
                <img
                  className="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm text-black">Iphone 6S</span>
                <span className="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-black w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 border text-center w-8"
                type="text"
                defaultValue={1}
              />
              <svg
                className="fill-current text-black w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm text-cyan-700">
              ???400.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm text-cyan-700">
              ???400.00
            </span>
          </div>
          <div className="flex items-center hover:bg-gray-200 -mx-8 px-6 py-5 bg-gray-100">
            <div className="flex w-2/5">
              {" "}
              {/* product */}
              <div className="w-20">
                <img
                  className="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm text-black">Iphone 6S</span>
                <span className="text-red-500 text-xs">Apple</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-black w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 border text-center w-8"
                type="text"
                defaultValue={1}
              />
              <svg
                className="fill-current text-black w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm text-cyan-700">
              ???400.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm text-cyan-700">
              ???400.00
            </span>
          </div>
          <a
            href="#"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8 text-cyan-700">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase text-cyan-700">
              Items 3
            </span>
            <span className="font-semibold text-sm text-cyan-700">590???</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase text-cyan-700">
              Shipping
            </label>
            <select className="block p-2 text-black w-full text-sm">
              <option>Standard shipping - ???10.00</option>
            </select>
          </div>
          <div className="py-4">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase text-cyan-700"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full bg-gray-100 text-black"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>???600</span>
            </div>
            <Link to="/checkout">
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
