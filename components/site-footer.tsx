import Cc from "@/components/logos/cc-logo";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Sticker = ({ className = "" }: { className?: string }) => {
	return (
		<div
			className={cn(
				"px-3 py-3 pb-1 rounded-[16.87897px] bg- ring-1 ring-inset ring-foreground/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-accent font-light tracking-wider text-sm bg-[var(--footer-bg)]",
				className
			)}>
			<div className='grid grid-cols-1 aspect-square w-fit *:-my-4 translate-y-4'>
				<div className='text-[1.27em] tracking-widest font-medium'>RYAN DAWES</div>
				<div className='text-[1.55em] tracking-wider flex'>
					<span>&apos;25</span>
					<span className='ml-auto'>
						<Cc className='inline size-6 -translate-y-0.5' /> <Cc className='inline size-6 -translate-y-0.5' />{" "}
						<Cc className='inline size-6 -translate-y-0.5' />
					</span>
				</div>
				<div className='font-for text-[1.55em] tracking-wider'>著作権&#169;2025</div>
				<a
					href='mailto:hello@dawes.cc'
					className='font-bc translate-y-1.5 text-[1.167em]'>
					HELLO@DAWES.CC
				</a>
				<div className='font-mono'>DESIGN&mdash;DEVELOP</div>
			</div>
		</div>
	);
};

function GlobalFooter() {
	return (
		<footer className='grid grid-cols-1 py-20 pb-4 -mx-4 mt-10'>
			<div className='rounded-[16.87897px] bg-[var(--footer-bg)] min-h-40 py-10 px-5 relative text-accent font-light tracking-wider text-sm'>
				<div className='grid place-content-center'>
					<Sticker />
					<div className='flex flex-row justify-center flex-wrap gap-[1rem] mt-8'>
						{Object.entries(siteConfig.links)
							.filter(([key]) => key !== "website" && key !== "bsky")
							.sort(([a], [b]) => a.localeCompare(b))
							.map(([key, url]) => (
								<Link
									key={key}
									href={url}
									className='w-fit'>
									{key.charAt(0).toUpperCase() + key.slice(1)}
								</Link>
							))}
					</div>
				</div>
			</div>
		</footer>
	);
}

function GlobalFooterNew() {
	return (
		<footer className='grid grid-cols-1 py-20 pb-4 -mx-4 mt-20'>
			<div className='rounded-[16.87897px] bg-[var(--footer-bg)] min-h-40 py-10 px-5 relative text-accent font-light tracking-wider text-sm'>
				<div className='grid place-content-center'>
					<Sticker className='absolute -top-0 -translate-y-[33.333%] right-6 rotate-[4.20deg] z-10 bg-primary text-background' />
				</div>
				<div className='flex flex-col-reverse flex-wrap gap-[1rem]'>
					{Object.entries(siteConfig.links)
						.filter(([key]) => key !== "website" && key !== "bsky")
						.sort(([a], [b]) => a.localeCompare(b))
						.map(([key, url]) => (
							<Link
								key={key}
								href={url}
								className='w-fit'>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</Link>
						))}
				</div>
			</div>
		</footer>
	);
}

function SiteFooter({ version = 1 }: { version?: number }) {
	if (version === 1) {
		return <GlobalFooter />;
	} else {
		return <GlobalFooterNew />;
	}
}

export default SiteFooter;
