import React from "react";
import Navbar from "../components/navbar"; // Correct path to the component file

export default function Home() {
  return (
    // Remove "item-center" from this div
    <div className="bg-[#242424] min-h-screen w-full flex flex-col">
      <div className="flex items-center justify-center w-full p-4">
        <Navbar />
      </div>
    </div>
  );
}
