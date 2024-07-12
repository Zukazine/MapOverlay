import Cube from "./cube";
import Layer from "./layers";
import MapboxIntegration from "./mapboxIntegration";
import { useState } from "react";


const Overlay = () => {
	const [clicked, setClicked] = useState<boolean>(false)
	console.log(clicked)

	return ( 
		<>
			<div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-violet-600/90 to-sky-400">
				<div className="flex h-full w-full items-center justify-center lg:space-x-5 md:space-x-3 space-x-2">
					<div className="relative flex flex-col items-center justify-center bg-transparent w-[15%] h-[calc(100%-25px)] max-w-[200px] rounded-xl ">
						<p className="absolute pt-4 text-2xl text-white font-mono font-semibold tracking-wide top-0 ">
							LAYER PICKER
						</p>
						<div className="flex items-center justify-center" onClick={() => setClicked(!clicked)}>
							<Layer />
						</div>
					</div> 
					<div className="bg-white w-[80%] h-[calc(100%-25px)] rounded-xl overflow-hidden">
						<MapboxIntegration clicked={clicked}/>
					</div>
				</div>
			</div>
		</>
	);
}
 
export default Overlay;