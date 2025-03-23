import Link from "next/link";
import { RxGithubLogo, RxHeartFilled } from "react-icons/rx";
import DawesDesign from "@/components/logos/dsd";
import Menu, { MenuTrigger, MenuContent } from "@/components/menu";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { HiEnvelope } from "react-icons/hi2";

const pages = [{ name: null, url: null, bg: "text-primary", protected: true }];

export default function NavMenu() {
	return (
		<Menu>
			<MenuTrigger asChild>
				<div className='pb-3 flex justify-end items-center group'>
					<button
						aria-label='Expand Menu'
						className='size-[1.5rem] relative overflow-clip rounded'>
						<ImMenu3 className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=open]:opacity-0 group-data-[state=open]:scale-95' />
						<ImMenu4 className='cursor-pointer size-full absolute inset-0 transition-[scale] timing-spring group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-95' />
					</button>
				</div>
			</MenuTrigger>
			<MenuContent>
				<div className='rounded py-3'>
					<div className='flex items-center justify-start flex-wrap gap-3'>
						<Link
							href={"/"}
							className='button cf-hover'>
							<div className='flex gap-2'>
								<RxHeartFilled className='size-6 text-primary' />
								Home
							</div>
						</Link>
						<Link
							href={"https://github.com/dawescc"}
							className='button cf-hover'>
							<div className='flex gap-2'>
								<RxGithubLogo className='size-6' />
								GitHub
							</div>
						</Link>
						<Link
							href={"mailto:hello@dawes.cc&subject=Hello%20From%Your%20Website!"}
							className='button cf-hover'>
							<div className='flex gap-2'>
								<HiEnvelope className='size-6' />
								Email
							</div>
						</Link>
						{pages.map((project, index) =>
							project.protected || !project.url || !project.name ? null : (
								<Link
									key={index}
									href={project.url}
									className='button cf-hover'>
									<div className={cn("flex items-center gap-2")}>
										<DawesDesign className={cn("size-6", project.bg)} />
										{formatTitle(project.name)}
									</div>
								</Link>
							)
						)}
					</div>
				</div>
			</MenuContent>
		</Menu>
	);
}
