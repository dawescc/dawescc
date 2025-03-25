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

export function ProjectListKey() {
	return (
		<div className='grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-y-5 text-callout *:inline-flex *:items-center *:gap-1.5'>
			<span className='text-amber-9'>
				<IoHeartCircle className={cn("size-[1.1em] inline")} />
				favorite
			</span>

			<span className=''>
				<SiNpm className={cn("size-[1.1em] inline", "text-[#CC3534]")} />
				npm package
			</span>

			<span className=''>
				<BiGitRepoForked className={cn("size-[1.1em] inline")} />
				fork
			</span>

			<span className='text-red-9'>
				<HiArchive className={cn("size-[1.1em] inline")} />
				archived
			</span>

			<span className='text-gray-9'>
				<HiLockClosed className={cn("size-[1.1em] inline")} />
				protected
			</span>
		</div>
	);
}

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

	const descriptorClasses = "font-light align-top not-first:ml-0.5";
	const descriptorIconClasses = "inline size-[0.90em] not-first:ml-1.5";

	const stubClasses =
		"w-fit sm:w-0 sm:max-w-fit sm:group-hover/project:w-40 sm:group-focus/project:w-40 sm:group-[&.focused]/project:w-20 transition-[width] timing-spring duration-300 overflow-hidden";
	const stubContentClasses =
		"sm:translate-x-1/2 sm:group-hover/project:translate-x-0 sm:group-focus/project:translate-x-0 sm:group-[&.focused]/project:translate-x-0 transition-transform ease-in-out duration-250 delay-[50ms]";

	const content = (
		<div className={cn("flex items-center")}>
			<div className='flex items-center'>
				{isFavorite && (
					<>
						<IoHeartCircle className={cn(descriptorIconClasses, "text-amber-9")} />
					</>
				)}

				{isPackage && (
					<>
						<SiNpm className={cn(descriptorIconClasses, "text-[#CC3534] ")} />
					</>
				)}

				{isFork && project.getForkSource() && (
					<>
						<BiGitRepoForked className={cn(descriptorIconClasses)} />
						<div className={cn(descriptorClasses, stubClasses)}>
							<div className={cn(stubContentClasses)}>{project.getForkSource()!.repo}</div>
						</div>
					</>
				)}

				{isProtected && (
					<>
						<HiLockClosed className={cn(descriptorIconClasses, "")} />
					</>
				)}

				{isArchived && (
					<>
						<HiArchive className={cn(descriptorIconClasses)} />
					</>
				)}

				<div className='not-first:ml-1.5 inline-flex items-center font-medium'>{project.getDisplayName()}</div>

				{!isProtected && (
					<div className={cn(descriptorClasses, stubClasses)}>
						<div className={cn(!isArchived && project.getBrandColor().text, stubContentClasses, "ml-1")}>{project.year}</div>
					</div>
				)}
			</div>

			<div className='relative size-(--text-title-1) ml-3 group-hover/project:scale-110 group-focus/project:scale-110 transition-[scale] ease-in-out duration-250 delay-[50ms]'>
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
		<div className='grid grid-cols-1 justify-items-end *:border-b *:pb-5 *:pt-0.5'>
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
		</div>
	);
}
