import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import DawesDesign from "@/components/logos/dsd";
import Menu, { MenuTrigger, MenuContent } from "@/components/menu";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiEnvelope, HiLockClosed } from "react-icons/hi2";
import { HiArchive } from "react-icons/hi";
import { ImMenu3, ImMenu4 } from "react-icons/im";

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
				<div className='flex items-center justify-start flex-wrap gap-3 px-1 pt-1'>
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
					{projects.map((project, index) => {
						const isDisabled = project.protected || !project.url;
						const isArchived = !isDisabled && project.archived;

						const projectItemProps = {
							key: index,
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
							<div {...projectItemProps}>{content}</div>
						) : (
							<Link
								href={project.url}
								{...projectItemProps}>
								{content}
							</Link>
						);
					})}
				</div>
			</MenuContent>
			<MenuTrigger asChild>
				<div className='pt-2 px-0 flex justify-end items-center group'>
					<button
						aria-label='Expand Menu'
						className='size-[1.25rem] relative overflow-clip'>
						<ImMenu3 className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-95' />
						<ImMenu4 className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=open]:opacity-0 group-data-[state=open]:scale-95' />
					</button>
				</div>
			</MenuTrigger>
		</Menu>
	);
}
