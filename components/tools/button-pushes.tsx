"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiLoaderAlt } from "react-icons/bi";
import { BsCheckLg, BsXLg } from "react-icons/bs";

// Unified spring config for more cohesive motion
const springTransition = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	mass: 0.8,
} as const;

type ButtonState = "idle" | "loading" | "success" | "error";

interface ButtonPushComponentProps {
	error?: boolean;
}

export default function ButtonPushComponent({ error = false }: ButtonPushComponentProps) {
	const [buttonState, setButtonState] = useState<ButtonState>("idle");

	const handleButtonPush = async () => {
		setButtonState("loading");

		try {
			// Mock operation that takes 1.25s
			await new Promise((resolve) => setTimeout(resolve, 1250));

			if (error) {
				setButtonState("error");
			} else {
				setButtonState("success");
			}
		} catch (error) {
			console.error("Unexpected error:", error);
			setButtonState("error");
		}

		setTimeout(() => setButtonState("idle"), 1800);
	};

	return (
		<div className='relative flex justify-center'>
			<motion.button
				onClick={handleButtonPush}
				disabled={buttonState !== "idle"}
				className='relative bg-gradient-to-r from-vols-400 to-vols-500 rounded-full ring-2 ring-inset ring-vols-500/70 font-black text-sm text-white overflow-hidden'
				initial={false}>
				<motion.div
					className='h-11 flex items-center justify-center'
					animate={{
						width: "auto",
						minWidth: buttonState === "idle" ? "160px" : buttonState === "loading" ? "120px" : buttonState === "success" ? "100px" : "100px",
						x: "-50%",
					}}
					style={{
						position: "relative",
						left: "50%",
						padding: "0 24px",
					}}
					transition={springTransition}>
					<AnimatePresence mode='wait'>
						{buttonState === "idle" && (
							<motion.span
								key='idle'
								initial={{ scale: 0.7, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.7, opacity: 0 }}
								transition={springTransition}
								className='whitespace-nowrap absolute'>
								Button
							</motion.span>
						)}

						{buttonState === "loading" && (
							<motion.div
								key='loading'
								initial={{ scale: 0.7, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.7, opacity: 0 }}
								transition={springTransition}
								className='flex items-center gap-2 absolute'>
								<BiLoaderAlt
									className='w-6 h-6'
									style={{
										animation: "spin 0.5s linear infinite",
										transformOrigin: "center center",
									}}
								/>
								<motion.span
									initial={{ x: -5, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.1, ...springTransition }}>
									Loading
								</motion.span>
							</motion.div>
						)}

						{buttonState === "success" && (
							<motion.div
								key='success'
								initial={{ scale: 0.7, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.7, opacity: 0 }}
								transition={springTransition}
								className='flex items-center gap-2 absolute'>
								<BsCheckLg className='w-4 h-4' />
								<motion.span
									initial={{ x: -5, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.1, ...springTransition }}>
									Success
								</motion.span>
							</motion.div>
						)}

						{buttonState === "error" && (
							<motion.div
								key='error'
								initial={{ scale: 0.7, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.7, opacity: 0 }}
								transition={springTransition}
								className='flex items-center gap-2 absolute'>
								<BsXLg className='w-4 h-4' />
								<motion.span
									initial={{ x: -5, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.1, ...springTransition }}>
									Error
								</motion.span>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</motion.button>
		</div>
	);
}
