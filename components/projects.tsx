import Link from "next/link";
import DawesDesign from "@/components/logos/dsd";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiLockClosed } from "react-icons/hi2";
import { HiArchive } from "react-icons/hi";
import { CgGitFork } from "react-icons/cg";
import Image from "next/image";
import projectList from "@/lib/projects.json";

class Project {
	name: string = "Unnamed";
	url: string = "/";
	bg: string = "/favicon.ico";
	protected: boolean = false;
	archived: boolean = false;
	year: number = 2025;
	fork: boolean = false;

	constructor(init?: Partial<Project>) {
		Object.assign(this, init);
	}

	isDisabled(): boolean {
		return this.protected || !this.url;
	}

	isArchived(): boolean {
		return !this.isDisabled() && this.archived;
	}

	isForked(): boolean {
		return this.fork;
	}

	hasUrlBackground(): boolean {
		return this.bg.startsWith("http") || this.bg.startsWith("/");
	}

	getDisplayName(): string {
		return formatTitle(this.name);
	}
}

const projects = projectList.map((p) => new Project(p));

function ProjectItem({ project, index }: { project: Project; index: number }) {
	const isDisabled = project.isDisabled();
	const isArchived = project.isArchived();
	const isFork = project.isForked();
	const isUrlBg = project.hasUrlBackground();

	const defaultClasses = "w-fit rounded group [--focus-color:var(--color-brand-dawescc)]";
	const archiveClasses = "text-red-9 [--focus-color:var(--color-red-9)]";
	const protectedClasses = "pointer-events-none text-gray-9";

	const projectItemProps = {
		className: cn(defaultClasses, isDisabled ? protectedClasses : isArchived ? archiveClasses : null),
	};

	const content = (
		<div className={cn("flex items-center gap-3")}>
			<span>
				{isFork && <CgGitFork className='inline mb-[4.5px]' />}
				{isDisabled && <HiLockClosed className='inline mb-[4.5px]' />}
				{isArchived && <HiArchive className='inline mb-[2.5px]' />}
				<span className='not-first:ml-1.5'>
					{project.getDisplayName()}
					<span className='inline-flex w-0 group-hover:w-[7ch] group-focus:w-[7ch] transition-[width] timing-spring duration-200 overflow-hidden'>
						&nbsp;/&nbsp;{project.year}
					</span>
				</span>
			</span>

			{isUrlBg ? (
				<Image
					src={project.bg}
					height={250}
					width={250}
					alt='Project thumbnail'
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
}

export default function ProjectsList() {
	const projectsByYear = projects.reduce<Record<number, Project[]>>((groups, project) => {
		const year = project.year;
		groups[year] = groups[year] || [];
		groups[year].push(project);
		return groups;
	}, {});

	const years = Object.keys(projectsByYear)
		.map((year) => parseInt(year))
		.sort((a, b) => b - a);

	return (
		<div className='grid grid-cols-1 gap-3 justify-items-end'>
			{years.flatMap((year) =>
				projectsByYear[year].map((project, index) => (
					<ProjectItem
						key={`${year}-${index}`}
						project={project}
						index={index}
					/>
				))
			)}
		</div>
	);
}
