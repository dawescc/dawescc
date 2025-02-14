import { IoIosMailOpen } from "react-icons/io";

const CTA = () => {
	return (
		<a
			href='mailto:hello@dawes.cc?subject=Website%20Contact%20Request'
			className='h-fit w-fit'>
			<IoIosMailOpen className='inline size-[1.05rem] -translate-y-0.5 mr-[0.25em]' />
			Contact Me
		</a>
	);
};

export default CTA;
