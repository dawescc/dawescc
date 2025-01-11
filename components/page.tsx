import { ReactNode } from "react";

interface PageProps {
	title?: string;
	children: ReactNode;
}

const Page = ({ title, children }: PageProps) => {
	return (
		<div className='grid grid-cols-1 gap-[2.5rem]'>
			{title && <h2 className='font-serif font-bold text-4xl'>{title}</h2>}
			{children}
		</div>
	);
};

export default Page;
