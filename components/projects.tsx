import Link from "next/link";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiArchive, HiLockClosed } from "react-icons/hi";
import Image from "next/image";
import projectList from "@/lib/projects.json";
import { SiNpm } from "react-icons/si";
import { BiGitRepoForked } from "react-icons/bi";
import { IoHeartCircle } from "react-icons/io5";

const VALID_OWNERS = ["eleanes", "dawescc"] as const;
type ValidOwner = (typeof VALID_OWNERS)[number];

class Project {
	name: string = "Project";
	url: string = "/";
	protected: boolean = false;
	archived: boolean = false;
	year: number = 2025;

	favorite: boolean = false;

	fork: boolean = false;
	forkSource?: string;

	package: boolean = false;

	icon?: string;

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

	isFavorite(): boolean {
		return this.favorite;
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
		const projectOwner = this.owner;

		const isValidOwner = (owner: string): owner is ValidOwner => VALID_OWNERS.some((validOwner) => validOwner === owner);

		return this.icon ? this.icon : isValidOwner(projectOwner) ? `/${projectOwner}.svg` : "/dawescc.svg";
	}

	getBrandColor(): { text: string; bg: string; var: string } {
		const projectOwner = this.owner;

		const isValidOwner = (owner: string): owner is ValidOwner => VALID_OWNERS.some((validOwner) => validOwner === owner);

		return isValidOwner(projectOwner)
			? { text: `text-brand-${projectOwner}`, bg: `bg-brand-${projectOwner}`, var: `--color-brand-${projectOwner}` }
			: { text: `text-brand-dawescc`, bg: `bg-brand-dawescc`, var: `--color-brand-dawescc` };
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
	const isFavorite = project.isFavorite();

	const defaultClasses = "w-fit rounded hover:rounded py-0.5 px-1 group/project [--focus-color:var(--color-brand-dawescc)] custom-focus-hover";
	const archiveClasses = "text-red-9 [--focus-color:var(--color-red-9)]";
	const protectedClasses = "text-gray-9 [--focus-color:var(--color-gray-9)] select-none";

	const projectItemProps = {
		className: cn(defaultClasses, isProtected ? protectedClasses : isArchived ? archiveClasses : null),
	};

	const descriptorIconClasses = "inline size-[0.90em] not-first:ml-1.5";

	const content = (
		<div className={cn("flex items-center gap-[0.2em] border-2 border-current group-focus/project:border-0 px-2 py-1 rounded")}>
			<div className='relative size-(--text-title-1)'>
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
						className={cn("size-full")}
					/>
				)}
			</div>

			<div className='inline-flex items-center font-medium'>{project.getDisplayName()}</div>

			{!isProtected && (
				<>
					<div className={cn(!isArchived && project.getBrandColor().text)}>{project.year}</div>
				</>
			)}

			{isFavorite && (
				<>
					<IoHeartCircle className={cn(descriptorIconClasses, "text-[#CC3534]")} />
				</>
			)}

			{isProtected && (
				<>
					<HiLockClosed className={cn(descriptorIconClasses)} />
				</>
			)}

			{isArchived && (
				<>
					<HiArchive className={cn(descriptorIconClasses)} />
				</>
			)}
		</div>
	);

	return isProtected ? (
		<div
			title={project.name}
			key={index}
			{...projectItemProps}>
			{content}
		</div>
	) : (
		<Link
			key={index}
			title={project.name}
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
		<>
			{years.flatMap((year) =>
				projectsByYear[year].map((project, index) => (
					<div
						key={`${year}-${index}`}
						className='inline-flex items-center'>
						<ProjectItem
							project={project}
							index={index}
						/>
					</div>
				))
			)}
		</>
	);
}
