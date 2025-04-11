import Link from "next/link";
import { VscTriangleLeft } from "react-icons/vsc";

export default function NotFound() {
	return (
		<div className='@container min-h-full max-w-2xl flex flex-col px-3 pt-10 pb-5'>
			<div className='flex-1 flex flex-col gap-12 text-title-1 md:text-title-large tracking-tight'>
				<p>Error 404</p>
				<p>Not Found</p>
				<p className='text-title-2 md:text-title-1'>
					<Link href='/'>
						<VscTriangleLeft className='inline mb-0.5 mr-1' />
						Go Home
					</Link>
				</p>
			</div>
		</div>
	);
}
