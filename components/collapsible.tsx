"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface CollapsibleProps {
	title: string;
	children: ReactNode;
}

export const Collapsible = ({ title, children }: CollapsibleProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const openSpring = {
		type: "spring",
		stiffness: 480,
		damping: 18,
		mass: 0.88,
	};

	const closeSpring = {
		type: "spring",
		stiffness: 480,
		damping: 32,
		mass: 0.88,
	};

	return (
		<motion.div className='w-full rounded-[16.87897px] bg-[var(--collapsible-bg)] shadow-sm ring-1 ring-inset ring-foreground/5'>
			<div
				className='w-full px-6 py-4 flex justify-between items-center text-left cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}>
				<span className='text-lg font-medium'>{title}</span>
				<motion.div
					animate={{
						rotate: isOpen ? 45 + 45 : 0,
						filter: "blur(1.5px)",
						scale: 1.02,
					}}
					whileInView={{
						filter: "blur(0px)",
						scale: 1,
						transition: { delay: 0.15 },
					}}
					transition={isOpen ? openSpring : closeSpring}
					className='text-primary text-2xl origin-center select-none'>
					+
				</motion.div>
			</div>

			<motion.div
				initial={false}
				animate={{ height: isOpen ? "auto" : 0 }}
				transition={isOpen ? openSpring : closeSpring}
				className='overflow-hidden'>
				<div className='px-6 pb-4'>{children}</div>
			</motion.div>
		</motion.div>
	);
};
