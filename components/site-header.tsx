import { sitePages } from "@/config/sitePages";
import { ReactNode } from "react";
import Cc from "./cc-logo";

export default function GlobalHeader() {
	return (
		<header className='text-sm grid grid-cols-1 pt-20 pb-40 mt-10'>
			<div className='font-serif grid grid-cols-[.1fr_1fr]'>
				<Cc className='inline size-5 -translate-x-0.5' />
				<a
					href='/'
					className='w-fit text-base'>
					Ryan Dawes
				</a>
			</div>
			{sitePages && (
				<div>
					<div className='text-sm flex flex-wrap gap-[1rem]'>
						{Object.values(sitePages).map((page: any) => (
							<LinkItem
								key={page.name}
								href={page.link}>
								{page.name}
							</LinkItem>
						))}
					</div>
				</div>
			)}
		</header>
	);
}

interface LinkItemProps {
	children: ReactNode;
	href: string;
}

const LinkItem = ({ children, href }: LinkItemProps) => {
	return (
		<a
			className='px-2 py-1 button rounded-md'
			href={href}>
			{children}
		</a>
	);
};
