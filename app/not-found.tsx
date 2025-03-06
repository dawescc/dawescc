import Link from "next/link";
import { VscTriangleLeft } from "react-icons/vsc";

export default function NotFound() {
	return (
		<div className='grid grid-cols-1 gap-10'>
			<div className='mt-20 max-w-lg mx-auto grid grid-cols-1 gap-8 sm:gap-10 text-pretty font-mono uppercase'>
				<p className='text-9xl font-display font-medium'>404</p>
				<p className='text-2xl '>page not found</p>
				<Link href='/'>
					<VscTriangleLeft className='inline mb-0.5 mr-1' />
					home
				</Link>
			</div>
		</div>
	);
}
