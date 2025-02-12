"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuX } from "react-icons/lu";

export default function Sheet({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
		requestAnimationFrame(() => {
			document.startViewTransition(() => {
				router.push("/");
			});
		});
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ y: "25%" }}
				animate={{ y: isOpen ? 0 : "100%" }}
				exit={{ y: "100%" }}
				transition={{
					type: "spring",
					damping: 30,
					stiffness: 200,
					mass: 0.8,
					exit: {
						// Specific transition for exit animation
						type: "spring",
						damping: 25,
						stiffness: 180,
						mass: 1.1,
					},
				}}
				onAnimationComplete={() => {
					if (!isOpen) {
						router.push("/");
					}
				}}
				className='fixed inset-0 w-full h-dvh bg-background flex flex-col'>
				<div className='w-full max-w-4xl mx-auto flex items-center justify-end p-4'>
					<button
						onClick={handleClose}
						aria-label='Close'>
						<LuX className='size-8' />
					</button>
				</div>

				<div className='h-full overflow-y-auto'>{children}</div>
			</motion.div>
		</AnimatePresence>
	);
}
