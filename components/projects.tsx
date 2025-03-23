import Link from "next/link";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiArchive, HiLockClosed } from "react-icons/hi";
import Image from "next/image";
import projectList from "@/lib/projects.json";
import { SiNpm } from "react-icons/si";
import { BiGitRepoForked } from "react-icons/bi";

class Project {
	name: string = "Project";
	url: string = "/";
	bg: string = "/favicon.ico";
	protected: boolean = false;
	archived: boolean = false;
	year: number = 2025;
	fork: boolean = false;
	forkSource?: string;
	package: boolean = false;
	icon: string = "/dawes.svg";
	owner: string = "dawescc";
	technology?: string[] = ["nextjs", "tailwindcss"];

	constructor(init?: Partial<Project>) {
		Object.assign(this, init);

		if (this.fork && !this.forkSource) {
			console.warn(`Project "${this.name}" is marked as a fork but has no forkSource specified.`);
		}
	}

	isProtected(): boolean {
		return this.protected;
	}

	isArchived(): boolean {
		return !this.isProtected() && this.archived;
	}

	isForked(): boolean {
		return this.fork;
	}

	getForkSource(): { repo: string; url: string } | null {
		if (!this.isForked() || !this.forkSource) {
			return null;
		}

		return {
			repo: this.forkSource,
			url: `https://github.com/${this.forkSource}`,
		};
	}

	isPackage(): boolean {
		return this.package;
	}

	getOwner(): string {
		return this.owner;
	}

	getIcon(): string {
		return this.icon;
	}

	getDisplayName(): string {
		return formatTitle(this.name);
	}
}

const projects = projectList.map((p) => new Project(p));

function ProjectItem({ project, index }: { project: Project; index: number }) {
	const isProtected = project.isProtected();
	const isArchived = project.isArchived();
	const isFork = project.isForked();
	const isPackage = project.isPackage();

	const defaultClasses = "w-fit rounded group [--focus-color:var(--color-brand-dawescc)] custom-focus-hover";
	const archiveClasses = "text-red-9 [--focus-color:var(--color-red-9)]";
	const protectedClasses = "pointer-events-none text-gray-9";

	const projectItemProps = {
		className: cn(defaultClasses, isProtected ? protectedClasses : isArchived ? archiveClasses : null),
	};

	const descriptorClasses = "inline-flex items-center gap-1 text-subhead";
	const descriptorIconClasses = "inline size-[1.1em]";

	const content = (
		<div className={cn("flex items-center")}>
			{isPackage && (
				<span className={cn(descriptorClasses, "")}>
					<SiNpm className={cn(descriptorIconClasses, "text-[#CC3534]")} />
				</span>
			)}

			{isFork && project.getForkSource() && (
				<span className={cn(descriptorClasses, "")}>
					<BiGitRepoForked className={cn(descriptorIconClasses)} />
					{project.getForkSource()!.repo}
				</span>
			)}

			{isProtected && (
				<span className={cn(descriptorClasses, "")}>
					<HiLockClosed className={cn(descriptorIconClasses, "")} />
					protected
				</span>
			)}

			{isArchived && (
				<span className={cn(descriptorClasses, "")}>
					<HiArchive className={cn(descriptorIconClasses)} />
					archived
				</span>
			)}

			<span className='not-first:ml-1.5 inline-flex items-center'>
				<span>{project.getDisplayName()}</span>
				{!isProtected && (
					<span className='text-subhead inline-flex items-center w-0 group-hover:w-[5ch] group-focus:w-[5ch] transition-[width] timing-spring duration-200 overflow-hidden'>
						&nbsp;{project.year}
					</span>
				)}
			</span>

			<div className='relative size-6 ml-3'>
				<Image
					src={project.getIcon()}
					height={24}
					width={24}
					alt={`${project.getOwner()} icon`}
					className={cn("size-6")}
				/>
				{(isProtected || isArchived) && (
					<div
						className={cn("absolute inset-0", isProtected ? "bg-gray-9" : "bg-red-9")}
						style={{
							WebkitMaskImage: `url(${project.getIcon()})`,
							maskImage: `url(${project.getIcon()})`,
							WebkitMaskSize: "cover",
							maskSize: "cover",
						}}
					/>
				)}
			</div>
		</div>
	);

	return isProtected ? (
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
