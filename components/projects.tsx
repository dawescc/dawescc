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
	icon: string = "/dawescc.svg";
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

	const descriptorClasses = "text-[10px] ml-0.5 font-medium align-top";
	const descriptorIconClasses = "inline size-[0.90em]";
	const stubClasses = "w-0 max-w-fit group-hover:w-20 group-focus:w-20 transition-[width] timing-spring duration-400 overflow-hidden";
	const stubContentClasses =
		"-translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform timing-spring duration-1000 delay-200";

	const content = (
		<div className={cn("flex items-center")}>
			<div className='flex items-center'>
				{isPackage && (
					<>
						<SiNpm className={cn(descriptorIconClasses, "text-[#CC3534]")} />
					</>
				)}

				{isFork && project.getForkSource() && (
					<>
						<BiGitRepoForked className={cn(descriptorIconClasses)} />
						<div className={cn(descriptorClasses, stubClasses)}>
							<span className={cn(stubContentClasses)}>{project.getForkSource()!.repo}</span>
						</div>
					</>
				)}

				{isProtected && (
					<>
						<HiLockClosed className={cn(descriptorIconClasses, "")} />
						<span className={cn(descriptorClasses, stubClasses)}>protected</span>
					</>
				)}

				{isArchived && (
					<>
						<HiArchive className={cn(descriptorIconClasses)} />
						<span className={cn(descriptorClasses, stubClasses)}>archived</span>
					</>
				)}

				<span className='not-first:ml-1.5 inline-flex items-center'>
					<span>{project.getDisplayName()}</span>
				</span>

				{!isProtected && (
					<span className={cn(stubClasses)}>
						<span className={cn(descriptorClasses)}>&nbsp;{project.year}</span>
					</span>
				)}
			</div>

			<div className='relative size-6 ml-3'>
				{isProtected || isArchived ? (
					<div
						className={cn("absolute inset-0", isProtected ? "bg-gray-9" : "bg-red-9")}
						style={{
							WebkitMaskImage: `url(${project.getIcon()})`,
							maskImage: `url(${project.getIcon()})`,
							WebkitMaskSize: "cover",
							maskSize: "cover",
						}}
					/>
				) : (
					<Image
						src={project.getIcon()}
						height={24}
						width={24}
						alt={`${project.getOwner()} icon`}
						className={cn("size-6")}
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
