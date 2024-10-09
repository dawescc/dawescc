"use client";

import { Drawer } from "vaul";
import { RxHamburgerMenu } from "react-icons/rx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ScrollArea } from "./ui/scroll-area";

export default function NavigationMenu() {
	return (
		<Drawer.Root direction='right'>
			<Drawer.Trigger asChild>
				<div
					className={cn(
						buttonVariants({
							variant: "ghost",
						}),
						"h-8 w-8 px-0"
					)}>
					<RxHamburgerMenu className='h-4 w-4' />
					<span className='sr-only'>Teams</span>
				</div>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className='fixed inset-0 bg-black/40 z-[99]' />
				<Drawer.Content className='right-0 top-0 bottom-0 fixed z-[100] flex outline-none w-5/6 md:w-1/4'>
					<div className='rounded-lg border grow bg-card text-card-foreground shadow-sm mt-2 mr-2 mb-2 p-5 flex flex-col overflow-y-auto'>
						<ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
							<div className='flex flex-col gap-2 mb-8'>
								<span className='font-bold font-serif text-lg'>Links</span>
								<div className='flex flex-col space-y-3'>
									{siteConfig.links?.map((link) => {
										const Icon = link.icon;
										return (
											link.href && (
												<MobileLink
													className='hover:underline capitalize flex items-center gap-2'
													key={link.href}
													href={link.href}>
													<Icon /> {link.name}
												</MobileLink>
											)
										);
									})}
								</div>
							</div>
							<div className='flex flex-col gap-2 mb-8'>
								<span className='font-bold font-serif text-lg'>Projects</span>
								<div className='flex flex-col space-y-3'>
									{siteConfig.projects?.map((project) => {
										const Icon = project.icon;
										return (
											project.href && (
												<MobileLink
													className='hover:underline flex items-center gap-2'
													key={project.href}
													href={project.href}>
													<Icon /> {project.name}
												</MobileLink>
											)
										);
									})}
								</div>
							</div>
						</ScrollArea>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}>
			{children}
		</Link>
	);
}
