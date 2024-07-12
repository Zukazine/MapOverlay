'use client'

import LayerIcon from "./layerIcon";

const Layer = () => {
	return ( 
		<div className="flex flex-col gap-10 max-w-[400px] items-start">
			<div className="flex hover:py-16 transition-all duration-1000">
				<div className="flex items-center justify-center z-[1000]">
					<LayerIcon />
				</div>
			</div>
			<div className="flex hover:py-16 transition-all duration-1000">
				<div className="flex items-center justify-center z-[900]">
					<LayerIcon />
				</div>
			</div>
			<div className="flex hover:py-16 transition-all duration-1000">
				<div className="flex items-center justify-center z-[800]">
					<LayerIcon />
				</div>
			</div>
			<div className="flex hover:py-16 transition-all duration-1000 ">
				<div className="flex items-center justify-center z-[700]">
					<LayerIcon />
				</div>
			</div>
			<div className="flex hover:py-16 transition-all duration-1000 ">
				<div className="flex items-center justify-center z-[600]">
					<LayerIcon />
				</div>
			</div>
		</div>
	);
}
 
export default Layer;