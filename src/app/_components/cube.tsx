const Cube = () => {
	return ( 
		<div className="grid h-screen w-full place-items-center bg-gradient-to-br from-violet-600/90 to-sky-400">
				<div style={{perspective: 600}}>
					<div className="relative w-24 h-24" style={{
						transformStyle: 'preserve-3d',
						transform: 'rotateX(-30deg) rotateY(-45deg)',
					}}>
						<div className="absolute w-full h-full bg-white/90 border border-gray-300" style={{
							transform: 'translateZ(3rem)'
						}}></div>
						<div className="absolute w-full h-full bg-white/90 border border-gray-300" style={{
							transform: ' rotateY(180deg) translateZ(3rem)'
						}}></div>
						<div className="absolute w-full h-full bg-white/90 border border-gray-300" style={{
							transform: 'rotateY(-90deg) translateZ(3rem)'
						}}></div>
						<div className="absolute w-full h-full bg-white/90 border border-gray-300" style={{
							transform: 'rotateY(90deg) translateZ(3rem)'
						}}></div>
						<div className="absolute w-full h-full bg-white/90 border border-gray-300" style={{
							transform: 'rotateX(90deg) translateZ(3rem)'
						}}></div>
						<div className="absolute w-full h-full bg-white/90 border border-gray-300" style={{
							transform: 'rotateX(-90deg) translateZ(3rem)'
						}}></div>
					</div>
				</div>
		</div>
	);
}
 
export default Cube;