import React from "react";
import Map from "../utils/Map";
import dynamic from "next/dynamic";

export const GridRight = () => {
  const MapWithNoSSR = dynamic(() => import("../utils/Map"), {
    ssr: false,
  });
  const lngLatCoords: number[][] = [];
  const lastPosition: [number, number] | never[] = [20, 50];
  const latLngMarkerPositions: [number, number][] = [];
  const latestTimestamp: string | never[] = "Jul 26, 2023 3:45 PM";
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col border rounded-md p-4">
        <h1 className="font-bold">Your estimated Home Value is</h1>
        <div className="flex justify-evenly">
          <div className="text-center">
            <span className="text-green-500 font-bold">$692k</span>
            <p className="text-violet-400 text-xs">Low</p>
          </div>
          <div className="text-center">
            <span className="text-green-500 font-bold">$834k</span>
            <p className="text-violet-400 text-xs">Likely home value</p>
          </div>
          <div className="text-center">
            <span className="text-green-500 font-bold">$976k</span>
            <p className="text-violet-400 text-xs">High</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <MapWithNoSSR
            coords={lngLatCoords}
            lastPosition={lastPosition}
            markers={latLngMarkerPositions}
            latestTimestamp={latestTimestamp}
          />
        </div>
      </div>
    </div>
  );
};
