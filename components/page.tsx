import { ReactNode } from "react";

interface PageProps {
	title?: string;
	children: ReactNode;
}

interface PageTitleProps {
	title: string;
}

const Page = ({ title, children }: PageProps) => {
	return (
		<div className='grid grid-cols-1 gap-[2.5rem]'>
			{title && <PageTitle title={title} />}
			{children}
		</div>
	);
};

const PageTitle = ({ title }: PageTitleProps) => {
	return <h2 className='font-serif font-bold text-4xl'>{title}</h2>;
};

export { Page, PageTitle };
