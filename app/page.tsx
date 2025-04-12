import ProjectsList from "@/components/projects";
import { TimeDisplay } from "@/components/time";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiJavascript, SiTypescript } from "react-icons/si";

export default function Home() {
	const iconClasses = "inline mb-[5px]";
	return (
		<div className='@container min-h-full max-w-2xl flex flex-col px-3 pt-10 pb-5'>
			<span className='text-brand-eleanes'></span>
			<span className='text-brand-dawescc'></span>
			<div className='flex-1 flex flex-col gap-12 text-title-2 md:text-title-1  tracking-tight'>
				<div>
					<span className='text-title-1 md:text-title-large'>I&apos;m Ryan</span>, a design engineer on the east coast
				</div>

				<div className='size-32 md:size-36 overflow-clip'>
					<TimeDisplay />
				</div>

				<p>
					I like <SiJavascript className={cn(iconClasses, "text-[#F0DB4F]")} /> && <SiTypescript className={cn(iconClasses, "text-[#3178c6]")} />
				</p>

				<p>
					Find me on{" "}
					<Link
						href={siteConfig.links.github}
						className='rounded [--focus-color:var(--color-primary) underline hover:no-underline focus-visible:no-underline'>
						GitHub
					</Link>
				</p>

				<p>
					While I do have{" "}
					<Link
						href={siteConfig.links.twitter}
						className='rounded [--focus-color:var(--color-primary) underline hover:no-underline focus-visible:no-underline'>
						Twitter
					</Link>
					, I am no longer active on the platform
				</p>

				<div className='flex gap-x-2 gap-y-1.5 flex-wrap group/projects *:transition-[opacity_500ms_cubic-bezier(0.19,_1,_0.22,_1)] *:group-hover/projects:not-hover:opacity-20 *:group-focus-within/projects:not-focus-within:opacity-20'>
					<ProjectsList />
				</div>
			</div>
		</div>
	);
}
