import { PiHandWavingThin } from "react-icons/pi";

const CTA = () => {
	return (
		<a
			href='mailto:hello@dawes.cc?subject=Hello!'
			className='h-fit w-fit'>
			<PiHandWavingThin className='inline size-[1.05em] -translate-y-[0.1em] mr-[0.325em] stroke-[2]' />
			Say Hello!
		</a>
	);
};

export default CTA;
