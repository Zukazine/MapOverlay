'use client'

import { useAnimate, motion } from "framer-motion";

const NameTag = () => {
	

	return ( 
		<div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-violet-600/90 to-sky-400">
			<motion.div 
				initial={{
					scale: 1
				}}
				whileInView={{
					width: 0,
				}}
				className="flex items-center justify-start overflow-hidden border border-black"
				transition={{
					type: 'tween',
					duration: 2,
				}}
			>
				<div className="text-2xl text-white font-mono font-semibold tracking-wide">
					LAYERS PANEL
				</div>
			</motion.div>
		</div>
	);
}
 
export default NameTag;
