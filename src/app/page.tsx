'use client'

import Image from "next/image";
import MapboxIntegration from "./_components/mapboxIntegration";
import Overlay from "./_components/overlay";
import Cube from "./_components/cube";
import LayerIcon from "./_components/layerIcon";
import { useState } from "react";
import Layer from "./_components/layers";
import NameTag from "./_components/nametag";

export default function Home() {
  const [click, setClick] = useState(true)
  console.log(click)

  return (
    <>
      <Overlay /> 
      {/* <NameTag /> */}
      {/* <Cube /> */}
      {/* <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-violet-600/90 to-sky-400">
        <Layer />
      </div>       */}
    </>
  );
}
