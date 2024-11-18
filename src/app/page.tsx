import Navbar from "@/components/Navbar";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <Navbar />
        {/* Main Content */}
        <div className="flex flex-col h-full items-center justify-center space-y-6">
          <h1 className="font-semibold text-3xl text-center">
            Welcome to Care Medics
          </h1>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Users Box */}
            <div className="w-40 h-40 bg-blue-200 rounded-lg flex flex-col items-center justify-center shadow-lg">
              <p className="text-2xl font-bold">120</p>
              <p className="text-lg font-semibold">Users</p>
            </div>

            {/* Products Box */}
            <div className="w-40 h-40 bg-blue-200 rounded-lg flex flex-col items-center justify-center shadow-lg">
              <p className="text-2xl font-bold">80</p>
              <p className="text-lg font-semibold">Products</p>
            </div>

            {/* Categories Box */}
            <div className="w-40 h-40 bg-blue-200 rounded-lg flex flex-col items-center justify-center shadow-lg">
              <p className="text-2xl font-bold">15</p>
              <p className="text-lg font-semibold">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
