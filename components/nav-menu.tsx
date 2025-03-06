import Link from "next/link";
import { RxHeartFilled } from "react-icons/rx";
import DawesDesign from "@/components/logos/dsd";
import Menu, { MenuTrigger, MenuContent } from "@/components/menu";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const pages = [
	{ name: "brands", url: "/brands", bg: "text-primary", protected: false },
	{ name: "about", url: "/design", bg: "text-primary", protected: false },
];

export default function NavMenu() {
	return (
		<Menu>
			<MenuTrigger asChild>
				<div className='pb-2 px-0 flex justify-end items-center group'>
					<button
						aria-label='Expand Menu'
						className='size-[1.25rem] relative overflow-clip'>
						<ImMenu3 className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=open]:opacity-0 group-data-[state=open]:scale-95' />
						<ImMenu4 className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-95' />
					</button>
				</div>
			</MenuTrigger>
			<MenuContent>
				<div className='flex items-center justify-start flex-wrap gap-3 px-1 pb-1'>
					<Link
						href={"https://github.com/dawescc"}
						className='button'>
						<div className='flex gap-2'>
							<RxHeartFilled className='size-6 text-primary' />
							Home
						</div>
					</Link>
					{pages.map((project, index) =>
						project.protected || !project.url ? null : (
							<Link
								key={index}
								href={project.url}
								className='button'>
								<div className={cn("flex items-center gap-2")}>
									<DawesDesign className={cn("size-6", project.bg)} />
									{formatTitle(project.name)}
								</div>
							</Link>
						)
					)}
				</div>
			</MenuContent>
		</Menu>
	);
}
