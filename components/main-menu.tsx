import Link from "next/link";
import DawesDesign from "@/components/logos/dsd";
import Menu, { MenuTrigger, MenuContent } from "@/components/menu";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiLockClosed } from "react-icons/hi2";
import { HiArchive } from "react-icons/hi";
import { IoFolderOpen, IoFolder } from "react-icons/io5";

const projects = [
	{ name: "lab", url: "https://lab.dawes.cc", bg: "text-brand-dawesdesign", protected: false, archived: false },
	{ name: "design", url: "https://ds.dawes.cc", bg: "text-brand-dawesdesign", protected: false, archived: false },
	{ name: "mls-gb", url: "https://mls-gb.dawes.cc", bg: "text-brand-dawesdesign", protected: false, archived: false },
	{ name: "ncaaf", url: "https://ncaaf.dawes.cc", bg: "text-brand-dawesdesign", protected: true, archived: false },
	{ name: "porpo", url: "https://github.com/dawescc/porpo", bg: "text-brand-dawesdesign", protected: false, archived: true },
	{ name: "emems", url: "https://github.com/dawescc/emems", bg: "text-brand-dawesdesign", protected: false, archived: true },
];

export default function MainMenu() {
	const archiveClasses = "bg-red-100 text-red-500 dark:bg-red-100 dark:text-red-400 border-red-400 hover:border-red-500 active:border-red-600";
	const protectedClasses = "pointer-events-none bg-gray-100 text-gray-500 dark:bg-gray-100 dark:text-gray-400";
	return (
		<Menu>
			<MenuContent>
				<div className='border rounded bg-background-100 p-1.5 mt-2'>
					<div className='flex items-center justify-start flex-wrap gap-3'>
						{projects.map((project, index) => {
							const isDisabled = project.protected || !project.url;
							const isArchived = !isDisabled && project.archived;

							const projectItemProps = {
								className: cn("button", isDisabled ? protectedClasses : isArchived ? archiveClasses : null),
							};

							const content = (
								<div className={cn("flex items-center gap-2")}>
									<DawesDesign className={cn("size-6", !isDisabled && !isArchived ? project.bg : null)} />
									{formatTitle(project.name)}
									{isDisabled && <HiLockClosed className='inline -ml-[1px] mb-[1.5px]' />}
									{isArchived && <HiArchive className='inline -ml-[1px] mb-[0.5px]' />}
								</div>
							);

							return isDisabled ? (
								<div
									key={index}
									{...projectItemProps}>
									{content}
								</div>
							) : (
								<Link
									key={index}
									href={project.url}
									{...projectItemProps}>
									{content}
								</Link>
							);
						})}
					</div>
				</div>
			</MenuContent>
			<MenuTrigger asChild>
				<div className='pt-2 px-0 flex justify-end items-center group'>
					<button
						aria-label='Expand Menu'
						className='size-[1.8rem] relative overflow-clip'>
						<IoFolderOpen className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-95' />
						<IoFolder className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=open]:opacity-0 group-data-[state=open]:scale-95' />
					</button>
				</div>
			</MenuTrigger>
		</Menu>
	);
}
