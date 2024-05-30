import Image from "next/image";
import MapboxIntegration from "./_components/mapboxIntegration";
import Overlay from "./_components/overlay";
import Cube from "./_components/cube";
import LayerIcon from "./_components/layerIcon";

export default function Home() {
  return (
    <>
      {/* <MapboxIntegration /> */}
      <Overlay /> 
      <Cube />
      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-violet-600/90 to-sky-400">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center z-50 hover:m-20 transition-all duration-1000">
            <LayerIcon />
            {/* <div>
              Dayumn 
            </div> */}
          </div>
          <div className="flex items-center justify-center z-40 hover:m-20 transition-all duration-1000">
            <LayerIcon />
          </div>
          <div className="flex items-center justify-center z-30 hover:m-20 transition-all duration-1000">
            <LayerIcon />
          </div>
          <div className="flex items-center justify-center z-20 hover:m-20 transition-all duration-1000">
            <LayerIcon />
          </div>
          <div className="flex items-center justify-center z-10 hover:m-20 transition-all duration-1000">
            <LayerIcon />
          </div>
        </div>
      </div>
      
    </>
  );
}
