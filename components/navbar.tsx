"use client"; // Mark as client component

import { sitePages, type Page } from "@/config/sitePages";
import Link from "next/link";
import { HiFolder } from "react-icons/hi";
import { usePathname } from "next/navigation";

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	const pathname = usePathname();

	return (
		<div className={`grid grid-cols-4 md:grid-cols-6 gap-[1.5em] ${className ? " " + className : ""}`}>
			{sitePages &&
				Object.values(sitePages)
					.filter((page: Page) => page.link !== pathname)
					.map((page: Page) => (
						<Link
							key={page.name}
							href={page.link}
							className='w-fit clean font-mono'>
							<span className='text-nowrap flex gap-[0.25em] items-center'>
								<HiFolder className='inline' /> {page.name}/
							</span>
						</Link>
					))}
		</div>
	);
};

export default Navbar;
