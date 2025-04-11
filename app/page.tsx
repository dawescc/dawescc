import ProjectsList from "@/components/projects";
import { Time, TimeZone } from "@/components/time";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiClock, HiHeart } from "react-icons/hi";
import { SiDotnet, SiGithub, SiJavascript, SiReact, SiTypescript } from "react-icons/si";

export default function Home() {
	const iconClasses = "inline mb-[5px]";
	return (
		<div className='@container min-h-full max-w-2xl flex flex-col px-3 pt-10 pb-5'>
			<div className='flex-1 flex flex-col gap-12 text-title-1 md:text-title-large tracking-tight'>
				<div>
					I&apos;m Ryan, a design engineer on the East Coast{" "}
					<div className='inline group/hero isolate'>
						<HiClock className={cn(iconClasses, "z-[3]")} />
						<span className='text-title-3 inline-flex items-center w-0 overflow-clip whitespace-nowrap max-w-fit group-hover/hero:w-[1000px] -translate-y-1 transition-[width] ease-in-out delay-75 duration-300 z-[1]'>
							<span className='-translate-x-full group-hover/hero:translate-x-0 transition-[translate] ease-in-out delay-50 duration-300 bg-primary px-1.5 rounded'>
								<span className='tabular-nums'>
									<Time />
								</span>
								&nbsp;
								<TimeZone />
							</span>
						</span>
					</div>
				</div>

				<p>
					I like <SiJavascript className={cn(iconClasses, "text-[#F0DB4F]")} /> && <SiTypescript className={cn(iconClasses, "text-[#3178c6]")} />
				</p>
				<p className='text-title-2 md:text-title-1'>
					Find me on{" "}
					<Link
						href={siteConfig.links.github}
						className='rounded [--focus-color:var(--color-primary) underline hover:no-underline focus-visible:no-underline'>
						GitHub
					</Link>
				</p>
				<div className='text-title-2 md:text-title-1'>
					<ProjectsList />
				</div>
			</div>
		</div>
	);
}
