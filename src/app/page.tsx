import React from 'react';
import Navbar from '../components/navbar'; // Correct path to the component file

export default function Home() {
  return (
    // Remove "item-center" from this div
    <div className="bg-[#242424] min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p>This is the homepage. Add your content here.</p>
      </main>
    </div>
  );
}