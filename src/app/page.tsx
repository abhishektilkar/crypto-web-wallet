"use client";

import { Toggle } from "@/components/ui/toggle";
import { generateMnemonic } from "bip39";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [mnemonicString, setMnemonicString] = useState<String>("Click below button to generate mnemonic string");
  const [bits, setBits] = useState<Boolean>(false);
  
  const mnemonicGenerate = () => {
    const mnemonic = bits ? generateMnemonic(256) : generateMnemonic(128);
    setMnemonicString(mnemonic);
  }
  const setMnemonicLength = () =>{
    setBits(!bits);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-100 mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Generate Random Mnemonic</h2>
        <p className="p-4 border border-gray-300 rounded-md bg-gray-50 text-center mb-4">{!bits ? 128 : 256 }</p>
        <button 
          onClick={setMnemonicLength}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded mb-4 hover:bg-gray-300 transition duration-200">
          Switch
        </button>
        <p className="p-4 border border-gray-300 rounded-md bg-gray-50 text-center mb-4">
          {mnemonicString}
        </p>
        <button 
          onClick={mnemonicGenerate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Generate Mnemonic
        </button>
      </div>
    </div>
  );
}
