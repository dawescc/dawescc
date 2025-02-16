import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { ReactElement } from "react";
import Link from "next/link";

interface ButtonProps {
	className?: string;
	children?: ReactElement<IconType>;
	text?: string;
	link?: string;
	variant?: "default";
}

const Button = ({ className = "", children, text = "", variant = "default", link = "" }: ButtonProps) => {
	const variantClasses = {
		default: "bg-[--button-bg] text-foreground ring-foreground/5",
	};

	const buildButtonClasses =
		"inline-flex items-center gap-[0.3667em] px-4 py-2.5 rounded-[09.6667px] antialiased font-medium text-sm shadow-sm ring-1 ring-inset";

	return (
		<>
			{!link ? (
				<button className={cn(buildButtonClasses, variantClasses[variant], className, "overflow-clip relative")}>
					{children && <span className='font-light'>{children}</span>}
					{text}
				</button>
			) : (
				<Link href={link}>
					<button className={cn(buildButtonClasses, variantClasses[variant], className, "overflow-clip relative")}>
						{children && <span className='font-light text-[1.03667em]'>{children}</span>}
						{text}
					</button>
				</Link>
			)}
		</>
	);
};

export default Button;
