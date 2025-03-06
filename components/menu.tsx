"use client";

import React, { createContext, useContext, useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils"; // Make sure you have this utility

type MenuContextType = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

type MenuProps = {
	children: React.ReactNode;
	className?: string;
};

export function Menu({ children, className }: MenuProps) {
	const [open, setOpen] = useState(false);

	return (
		<MenuContext.Provider value={{ open, setOpen }}>
			<div className={cn("inline-block", className)}>{children}</div>
		</MenuContext.Provider>
	);
}

type MenuTriggerProps = {
	children: React.ReactNode;
	asChild?: boolean;
	className?: string;
};

export const MenuTrigger = forwardRef<HTMLDivElement, MenuTriggerProps>(({ children, asChild = false, className, ...props }, ref) => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("MenuTrigger must be used within a Menu");
	}

	const { open, setOpen } = context;
	const handleClick = () => setOpen(!open);

	// Use Slot component for asChild pattern
	if (asChild && React.isValidElement(children)) {
		return (
			<Slot
				{...props}
				ref={ref}
				onClick={handleClick}
				className={className}
				// Data attributes are applied via Slot automatically
				data-state={open ? "open" : "closed"}>
				{children}
			</Slot>
		);
	}

	return (
		<div
			{...props}
			ref={ref}
			onClick={handleClick}
			data-state={open ? "open" : "closed"}
			className={cn("inline-block cursor-pointer", className)}>
			{children}
		</div>
	);
});

MenuTrigger.displayName = "MenuTrigger";

type MenuContentProps = {
	children: React.ReactNode;
	className?: string;
};

export function MenuContent({ children, className }: MenuContentProps) {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("MenuContent must be used within a Menu");
	}

	const { open } = context;

	const openSpring = {
		type: "spring",
		stiffness: 327,
		damping: 32,
		mass: 2,
	};

	const closeSpring = {
		type: "spring",
		duration: 0.422,
		bounce: 0,
	};

	const variants = {
		closed: {
			height: 0,
			scale: 0.95,
			opacity: 0.5,
			transition: closeSpring,
		},
		open: {
			height: "auto",
			scale: 1,
			opacity: 1,
			transition: openSpring,
		},
	};

	return (
		<div className='flex flex-col'>
			<AnimatePresence>
				{open && (
					<motion.div
						initial='closed'
						animate='open'
						exit='closed'
						variants={variants}
						transition={open ? openSpring : closeSpring}
						className={cn("overflow-hidden origin-top", className)}
						data-state={open ? "open" : "closed"}>
						<div className='py-1'>{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export { Menu as default };
