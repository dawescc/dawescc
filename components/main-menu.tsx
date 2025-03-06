import Link from "next/link";
import { IoInformationCircle } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";
import DawesDesign from "@/components/logos/dsd";
import Menu, { MenuTrigger, MenuContent } from "@/components/menu";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiEnvelope, HiLockClosed } from "react-icons/hi2";

const projects = [
	{ name: "lab", url: "https://lab.dawes.cc", bg: "text-pink-700", protected: false },
	{ name: "design", url: "https://ds.dawes.cc", bg: "text-primary", protected: false },
	{ name: "mls-gb", url: "https://mls-gb.dawes.cc", bg: "text-red-700", protected: false },
	{ name: "ncaaf", url: "https://ncaaf.dawes.cc", bg: "text-gray-500", protected: true },
	{ name: "porpo", url: null, bg: "text-gray-500", protected: false },
	{ name: "emems", url: null, bg: "text-gray-500", protected: false },
];

export default function MainMenu() {
	return (
		<Menu>
			<MenuTrigger asChild>
				<div className='pt-2 px-0 flex justify-end items-center group'>
					<button aria-label='Expand Menu'>
						<IoInformationCircle className='cursor-pointer size-[1.25rem]' />
					</button>
				</div>
			</MenuTrigger>
			<MenuContent>
				<div className='flex items-center justify-start flex-wrap gap-3 px-1 pb-1'>
					<Link
						href={"https://github.com/dawescc"}
						className='button'>
						<div className='flex gap-2'>
							<RxGithubLogo className='size-6' />
							GitHub
						</div>
					</Link>
					<Link
						href={"mailto:hello@dawes.cc&subject=Hello%20From%Your%20Website!"}
						className='button'>
						<div className='flex gap-2'>
							<HiEnvelope className='size-6' />
							Email
						</div>
					</Link>
					{projects.map((project, index) =>
						project.protected || !project.url ? (
							<div
								key={index}
								className='button pointer-events-none bg-gray-100 text-gray-500 dark:bg-gray-100 dark:text-gray-400'>
								<div className={cn("flex items-center gap-2")}>
									<DawesDesign className={cn("size-6")} />
									{formatTitle(project.name)} <HiLockClosed className='inline -ml-[1px] mb-[1.5px]' />
								</div>
							</div>
						) : (
							<Link
								key={index}
								href={project.url}
								className='button'>
								<div className={cn("flex items-center gap-2")}>
									<DawesDesign className={cn("size-6", project.bg)} />
									{formatTitle(project.name)}
								</div>
							</Link>
						)
					)}
				</div>
			</MenuContent>
		</Menu>
	);
}
