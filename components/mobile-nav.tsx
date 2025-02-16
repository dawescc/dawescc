"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./ui/button";

export const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openSpring = {
		type: "spring",
		stiffness: 480,
		damping: 24,
		mass: 0.88,
	};

	const openWidthSpring = {
		type: "spring",
		stiffness: 480,
		damping: 33,
		mass: 0.88,
	};

	const closeSpring = {
		type: "spring",
		stiffness: 480,
		damping: 32,
		mass: 0.88,
	};

	return (
		<div className='fixed top-0 left-0 w-full z-10 p-5 sm:hidden'>
			<motion.div className='w-fit rounded-[16.87897px] bg-[var(--collapsible-bg)] shadow-md ring-1 ring-inset ring-foreground/5'>
				<div
					className='w-fit px-6 py-4 flex justify-between items-center text-left cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}>
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
					animate={{ height: isOpen ? "auto" : 0, width: isOpen ? "calc(100dvw - 2.5rem)" : 0 }}
					transition={{
						height: isOpen ? openSpring : closeSpring,
						width: isOpen ? openWidthSpring : closeSpring,
					}}
					className='overflow-hidden max-h-full'>
					<div className='px-6 pb-4'>
						<div className='flex flex-col *:py-2.5 divide-y-[1px] divide-foreground/5'>
							<Button
								link='/'
								text='Resume'
								className='w-full justify-center ring-0 hover:bg-foreground/[0.0283] py-6 shadow-none text-xl tracking-wide'
							/>
							<Button
								link='/'
								text='Highlights'
								className='w-full justify-center ring-0 hover:bg-foreground/[0.0283] py-6 shadow-none text-xl tracking-wide'
							/>
							<Button
								link='/'
								text='Projects'
								className='w-full justify-center ring-0 hover:bg-foreground/[0.0283] py-6 shadow-none text-xl tracking-wide'
							/>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};
