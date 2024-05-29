const Overlay = () => {
	return ( 
		<>
			<div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-violet-600/90 to-sky-400">
				<div className="flex h-full w-full items-center justify-center lg:space-x-5 md:space-x-3 space-x-2">
					<div className="bg-white w-[15%] h-[calc(100%-25px)] max-w-[200px] rounded-xl">

					</div>
					<div className="bg-white w-[80%] h-[calc(100%-25px)] rounded-xl">

					</div>
				</div>
			</div>
		</>
	);
}
 
export default Overlay;