const LayerIcon = () => {
	return ( 
		<>
			<div style={{perspective: 600}}>
				<div className="group flex relative w-24 h-1" style={{
					transformStyle: 'preserve-3d',
					transform: 'rotateX(-30deg) rotateY(-45deg)',
				}}>
					<div className="absolute flex items-center justify-center w-full h-24 bg-white border border-gray-300" style={{
						transform: 'rotateX(90deg) translateZ(3rem)'
					}}>
						<img 
							src="open.png" 
							alt="eye icon"
							className="max-w-8 opacity-0 group-hover:opacity-100"
							style={{
								transform: 'rotateZ(135deg) rotateY(45deg)'
							}}
						/>
					</div>
					<div className="absolute w-full h-[2px] group-hover:h-[10px] bg-white border border-black transition-all duration-300" style={{
						transform: 'translateZ(3rem)'
					}}></div>
					<div className="absolute w-full h-[2px] group-hover:h-[10px] bg-white border border-black transition-all duration-300" style={{
						transform: 'rotateY(90deg) translateZ(3rem)'
					}}></div>
				</div>
			</div>
		</>
	);
}
 
export default LayerIcon;