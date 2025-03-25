import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import Menu, { MenuTrigger, MenuContent } from "@/components/menu";
import { cn } from "@/lib/utils";
import formatTitle from "title";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { HiEnvelope } from "react-icons/hi2";

const pages = [{ name: null, url: null, bg: "bg-brand-eleanes", protected: true }];

interface NavMenuProps {
	mini?: boolean;
}

const MenuContents = ({ mini = false, className }: { mini?: boolean; className?: string }) => {
	const variantClasses = (): { button: string; icon: string } => {
		switch (mini) {
			case true:
				return { button: "rounded px-1 py-0.5 inline-flex items-center gap-2", icon: "size-[1em]" };
			default:
				return { button: "button inline-flex items-center gap-2", icon: "size-6" };
		}
	};

	const defaults = "custom-focus-hover [--focus-color:var(--color-primary)] text-body";

	return (
		<div className={cn("flex items-center justify-start flex-wrap gap-3", className)}>
			<Link
				title='Github | dawescc'
				href={"https://github.com/dawescc"}
				className={cn(defaults, variantClasses().button, null)}>
				<RxGithubLogo className={cn(variantClasses().icon, null)} />
				GitHub
			</Link>
			<Link
				title='Email'
				href={"mailto:hello@dawes.cc&subject=Hello%20From%Your%20Website!"}
				className={cn(defaults, variantClasses().button, null)}>
				<HiEnvelope className={cn(variantClasses().icon, null)} />
				Email
			</Link>
			{pages.map((page, index) =>
				page.protected || !page.url || !page.name ? null : (
					<Link
						key={index}
						title={page.name}
						href={page.url}
						className={cn(defaults, variantClasses().button, null)}>
						<div className={cn("relative", variantClasses().icon)}>
							<div
								className={cn("absolute inset-0 size-full", page.bg)}
								style={{
									WebkitMaskImage: `url('/dawescc.svg')`,
									maskImage: `url('/dawescc.svg')`,
									WebkitMaskSize: "cover",
									maskSize: "cover",
								}}
							/>
						</div>
						{formatTitle(page.name)}
					</Link>
				)
			)}
		</div>
	);
};

export default function NavMenu({ mini = false }: NavMenuProps) {
	if (mini) {
		return (
			<div className='mb-20'>
				<MenuContents mini />
			</div>
		);
	}

	return (
		<Menu>
			<MenuTrigger
				asChild
				className='w-fit ml-auto'>
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
					<MenuContents />
				</div>
			</MenuContent>
		</Menu>
	);
}
