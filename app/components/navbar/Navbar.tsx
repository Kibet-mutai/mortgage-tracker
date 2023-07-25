"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFillHouseFill, BsFillBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useRouter, usePathname } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-around items-center border-b bg-white/30 border-gray-400/50 backdrop-blur-sm">
      <Link href={"#"} className="flex space-x-4 items-center">
        <BsFillHouseFill className="text-green-500 w-10 h-10" />
        <h1 className="font-bold text-xl">Mortgage Tracker</h1>
      </Link>
      <div className="flex space-x-8 items-center text-gray-400">
        <Link
          href={""}
          className={`${
            pathname === "/"
              ? "text-green-500 font-bold border-b-green-500 border-b-2 py-4"
              : "text-lg border-transparent"
          }`}
        >
          DASHBOARD
        </Link>
        <Link
          href={"offers"}
          className={`${
            pathname === "/offers"
              ? "text-green-500 font-bold border-b-green-500 border-b-2 py-4"
              : "text-lg border-transparent"
          }`}
        >
          OFFERS
        </Link>
        <Link
          href={""}
          className={`${
            pathname === "/offers"
              ? "text-green-700 font-bold border-b-green-500 border-b-2 py-4"
              : "text-lg border-transparent"
          }`}
        >
          LOANS
        </Link>
        <Link
          href={""}
          className={`${
            pathname === "/transaction"
              ? "text-green-500 font-bold border-b-green-500 border-b-2 py-4"
              : "text-lg border-transparent"
          }`}
        >
          TRANSACTIONS
        </Link>
      </div>
      <div className="flex items-center text-gray-400 space-x-6">
        <button className="notification w-9 h-9 relative rounded-full border px-2 border-gray-400/50">
          <BsFillBellFill className="h-full w-full"></BsFillBellFill>
          <div className="absolute top-0 right-0 bg-red-600/100 rounded-full items-center px-1">
            <h3 className="text-white text-xs">2</h3>
          </div>
        </button>
        <button className="users-p w-9 h-9 rounded-full border px-2 border-gray-400/50">
          <FaUser className="h-full w-full"></FaUser>
        </button>
        <button className="search w-9 h-9 border rounded-full px-2 border-gray-400/50">
          <BiMenu className="h-full w-full"></BiMenu>
        </button>
      </div>
    </div>
  );
};
