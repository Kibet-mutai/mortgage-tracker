import React from "react";
import { Toggle } from "../buttons/Toggle";
import { IoMdWarning } from "react-icons/io";
import { Graph } from "../buttons/Graph";

export const GridLeft = () => {
  return (
    <div className="border border-red-500 w-full rounded-md p-2 text-left flex flex-col space-y-3 backdrop-blur-sm divide-y divide-gray-300">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold">Your Payment of</h1>
          <span className="text-red-500 font-bold">$2,116.02</span>
          <p className="text-xs">Was due on Jul 4, 2023 (33 days past day)</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-violet-400 text-xs">Autopay</p>
          <Toggle />
        </div>
      </div>
      <div className="flex flex-col space-y-4 py-2">
        <div className="flex items-center border border-red-500 bg-red-400/40 py-1 px-3 space-x-3 rounded-md">
          <IoMdWarning className="text-red-700" />
          <p className="text-sm">
            Your next payment of $2,116.02 is scheduled for Jul 25, 2023
          </p>
        </div>
        <h1 className="font-medium">Next Scheduled Payment</h1>
        <div className="flex justify-between">
          <div className="flex-col flex">
            <h2 className="font-medium">06/25/23</h2>
            <p className="text-violet-400 text-xs">Payment Date</p>
          </div>
          <div className="flex-col flex">
            <h2 className="font-medium">$2,116.02</h2>
            <p className="text-violet-400 text-xs">Payment Date</p>
          </div>
        </div>
        <h1 className="font-medium">Last Payment</h1>
        <div className="flex justify-between">
          <div className="flex-col flex">
            <h2 className="font-medium">06/25/23</h2>
            <p className="text-violet-400 text-xs">Payment Date</p>
          </div>
          <div className="flex-col flex">
            <h2 className="font-medium">$2,116.02</h2>
            <p className="text-violet-400 text-xs">Payment Date</p>
          </div>
        </div>
      </div>
      <div className="flex- flex-col">
        <h1 className="font-bold ">Your Loan balance is</h1>
        <span className="text-green-600 font-bold">$2,116.02</span>
        <p className="text-violet-400 text-xs">Last upade: Jul 25, 2023</p>
      </div>
      <div className="flex flex-col space-y-4 py-2">
        <h1 className="font-medium">Taxes and Insurance</h1>
        <div className="flex justify-between">
          <div className="flex-col flex">
            <h2 className="font-medium">$2,342.16</h2>
            <p className="text-violet-400 text-xs">Escrow Balance</p>
          </div>
          <div className="flex-col flex">
            <h2 className="font-medium">$533.47</h2>
            <p className="text-violet-400 text-xs">Monthly Escrow payment</p>
          </div>
        </div>
        <h1 className="font-medium">Homeowner Expenses</h1>
        <div className="flex justify-between">
          <div className="flex-col flex">
            <h2 className="font-medium">$6137.50</h2>
            <p className="text-violet-400 text-xs">Property Taxes</p>
          </div>
          <div className="flex-col flex">
            <h2 className="font-medium">$1781.32</h2>
            <p className="text-violet-400 text-xs">Home Insurance</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Loan details</h1>
          <Graph />
        </div>
      </div>
    </div>
  );
};
