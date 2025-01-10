import { sitePages } from "@/config/sitePages";
import { ReactNode } from "react";
import Cc from "./cc-logo";

export default function GlobalHeader() {
	return (
		<header className='pt-20 pb-20 flex flex-col gap-[2rem]'>
			<Cc className='size-10 mb-20' />
			<div>
				<a
					href='/'
					className='font-serif text-6xl font-bold max-w-fit'>
					Ryan Dawes
				</a>
			</div>
			<div>
				<div className='text-sm flex flex-wrap gap-[1rem]'>
					{Object.values(sitePages).map((page) => (
						<LinkItem
							key={page.name}
							href={page.link}>
							{page.name}
						</LinkItem>
					))}
				</div>
			</div>
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
