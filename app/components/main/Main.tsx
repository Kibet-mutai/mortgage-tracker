import React from "react";
import { GridLeft } from "./GridLeft";
import { GridRight } from "./GridRight";

export const Main = () => {
  return (
    <div className="grid grid-cols-10 items-center px-20 py-6 space-x-4">
      <div className="col-span-4">
        <GridLeft />
      </div>
      <div className="col-span-6">
        <GridRight />
      </div>
    </div>
  );
};
