import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-full items-center justify-center space-y-6">
        <div className="w-1/2 h-1/2 items-center flex flex-col justify-center ">
          <div className="flex flex-col">
            {" "}
            <h1 className="font-semibold text-3xl flex justify-center">
              Welcome to Care Medics
            </h1>
            <h1 className="text-2xl items-center justify-center flex mt-3 font-semibold italic font-geist">
              Product Sections
            </h1>
            <div className="flex w-full justify-between mt-5 mb-2">
              <input
                type="text"
                placeholder="Search"
                className="border border-black px-3 rounded-lg text-sm w-2/4"
              />
              <button className="bg-black px-3 text-white py-1.5 rounded-lg">
                Add Product
              </button>
            </div>
            <table className="w-full border border-black rounded-lg">
              <thead>
                <tr>
                  <th className="border border-black p-1">First Name</th>
                  <th className="border border-black p-1">Last Name</th>
                  <th className="border border-black p-1">Email</th>
                  <th className="border border-black p-1">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-black">
                  <th className="border border-black p-1">John</th>
                  <th className="border border-black p-1">Doe</th>
                  <th className="border border-black p-1">test@example.com</th>
                  <th className="border border-black space-x-1.5 p-1 px-2 text-white font-thin">
                    <button className="px-3 py-1.5 rounded-lg bg-[#750E21]">
                      Edit
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-[#E3651D]">
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
