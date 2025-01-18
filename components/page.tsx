import { ReactNode } from "react";
import Navbar from "./navbar";

interface PageProps {
	title?: string;
	children: ReactNode;
}

interface PageSubChildProps {
	children: ReactNode;
	className?: string;
}

interface PageBlockProps {
	children: ReactNode;
	className?: string;
}

interface PageTitleProps {
	text: string;
	className?: string;
}

const Page = ({ title, children }: PageProps) => {
	let subText,
		subTitle,
		pageTitle = null;
	const otherContent: ReactNode[] = [];

	if (Array.isArray(children)) {
		children.forEach((child) => {
			if (child?.type === PageTitle) {
				pageTitle = child;
			} else if (child?.type === PageDesc) {
				subText = child;
			} else if (child?.type === PageSubTitle) {
				subTitle = child;
			} else {
				otherContent.push(child);
			}
		});
	} else {
		otherContent.push(children);
	}

	return (
		<div className='grid grid-cols-1 gap-[2.5em]'>
			{title ? <PageTitle>{title}</PageTitle> : pageTitle}
			<div className='grid grid-cols-1 gap-[1em] -mt-[1.5em]'>
				{subTitle}
				{subText}
			</div>
			<div className='grid grid-cols-1 gap-[2.5em]'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-[2em]'>{otherContent}</div>
			</div>
			<Navbar />
		</div>
	);
};

const PageBlock = ({ children, className }: PageBlockProps) => {
	return <div className={`space-y-[1em] [&_a:not(.clean)]:italic  ${className ? " " + className : ""}`}>{children}</div>;
};

const PageTitle = ({ children, className }: PageSubChildProps) => {
	return <h1 className={`font-serif font-black text-5xl ${className ? " " + className : ""}`}>{children}</h1>;
};

const PageSubTitle = ({ children, className }: PageSubChildProps) => {
	return <h2 className={`font-serif font-bold text-3xl ${className ? " " + className : ""}`}>{children}</h2>;
};

const PageSectionTitle = ({ text, className }: PageTitleProps) => {
	return <h3 className={`font-serif font-bold text-xl ${className ? " " + className : ""}`}>{text}</h3>;
};

const PageSubSectionTitle = ({ text, className }: PageTitleProps) => {
	return <h4 className={`font-serif font-bold text-lg ${className ? " " + className : ""}`}>{text}</h4>;
};

const PageDesc = ({ children, className }: PageSubChildProps) => {
	return <p className={`font-serif font-bold text-lg ${className ? " " + className : ""}`}>{children}</p>;
};

export { Page, PageTitle, PageSubTitle, PageSectionTitle, PageSubSectionTitle, PageBlock, PageDesc };
