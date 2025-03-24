import Link from "next/link";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { HiArchive, HiLockClosed } from "react-icons/hi";
import Image from "next/image";
import projectList from "@/lib/projects.json";
import { SiNpm } from "react-icons/si";
import { BiGitRepoForked } from "react-icons/bi";

const VALID_OWNERS = ["eleanes", "dawescc"] as const;
type ValidOwner = (typeof VALID_OWNERS)[number];

class Project {
	name: string = "Project";
	url: string = "/";
	protected: boolean = false;
	archived: boolean = false;
	year: number = 2025;

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

	const stubClasses =
		"w-fit sm:w-0 sm:max-w-fit sm:group-hover:w-20 sm:group-focus:w-20 sm:group-[&.focused]:w-20 transition-[width] timing-spring duration-300 overflow-hidden";
	const stubContentClasses =
		"sm:translate-x-1/2 sm:group-hover:translate-x-0 sm:group-[&.focused]:translate-x-0 sm:group-focus:translate-x-0 transition-transform ease-in-out duration-250 delay-[50ms]";

	const content = (
		<div className={cn("flex items-center")}>
			<div className='flex items-center'>
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
						<div className={cn(descriptorClasses, stubClasses)}>
							<div className={cn(stubContentClasses)}>archived</div>
						</div>
					</>
				)}

				<div className='not-first:ml-1.5 inline-flex items-center'>
					<div>{project.getDisplayName()}</div>
				</div>

				{!isProtected && (
					<div className={cn(descriptorClasses, stubClasses)}>
						<div className={cn(stubContentClasses, "ml-1")}>{project.year}</div>
					</div>
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
