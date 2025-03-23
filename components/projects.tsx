import Link from "next/link";
import DawesDesign from "@/components/logos/dsd";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiLockClosed } from "react-icons/hi2";
import { HiArchive } from "react-icons/hi";
import Image from "next/image";
import projectList from "@/lib/projects.json";

class Project {
	name: string = "Unnamed";
	url: string = "/";
	bg: string = "/favicon.ico";
	protected: boolean = false;
	archived: boolean = false;
	year: number = 2025;

	constructor(init?: Partial<Project>) {
		Object.assign(this, init);
	}
}

const projects = projectList.map((p) => new Project(p));

// Sample push to projects
projects.push(
	new Project({
		url: "/not-found",
		year: 2025,
	})
);

export default function ProjectsList() {
	const defaultClasses = "[--focus-color:var(--color-brand-dawescc)]";
	const archiveClasses = "text-red-9 [--focus-color:var(--color-red-9)]";
	const protectedClasses = "pointer-events-none text-gray-9";
	return (
		<div className='grid grid-cols-1 gap-3 justify-items-end'>
			{projects.map((project, index) => {
				const isUrlBg = project.bg.startsWith("http") || project.bg.startsWith("/");
				const isDisabled = project.protected || !project.url;
				const isArchived = !isDisabled && project.archived;

				const projectItemProps = {
					className: cn("w-fit rounded group", defaultClasses, isDisabled ? protectedClasses : isArchived ? archiveClasses : null),
				};

				const content = (
					<div className={cn("flex items-center gap-3")}>
						<span>
							{isDisabled && <HiLockClosed className='inline mb-[4.5px]' />}
							{isArchived && <HiArchive className='inline mb-[2.5px]' />}
							<span className='not-first:ml-1.5'>
								{formatTitle(project.name)}
								<span className='inline-flex w-0 group-hover:w-[7ch] group-focus:w-[7ch] transition-all timing-spring duration-300 overflow-hidden'>
									&nbsp;/&nbsp;{project.year}
								</span>
							</span>
						</span>

						{isUrlBg ? (
							<Image
								src={project.bg}
								height={250}
								width={250}
								alt='Eleanes'
								className='size-6 rounded'
							/>
						) : (
							<DawesDesign className={cn("size-6", !isDisabled && !isArchived ? project.bg : null)} />
						)}
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
	);
}
