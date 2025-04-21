"use client";

import { useState, useEffect, CSSProperties } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat"; // Add this import

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

interface TimeProps {
	zone?: string;
}

export function Time({ zone = "America/New_York" }: TimeProps) {
	const [time, setTime] = useState(dayjs().tz(zone).format("HH:mm:ss"));

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(dayjs().tz(zone).format("HH:mm:ss"));
		}, 1000);

		return () => clearInterval(timer);
	}, [zone]);

	return <>{time}</>;
}

export function TimeZone({ zone = "America/New_York" }: TimeProps) {
	const timeZoneName = dayjs().tz(zone).format("z");
	return <>{timeZoneName}</>;
}

export function TimeDisplay({ zone = "America/New_York" }: TimeProps) {
	const [currentTime, setCurrentTime] = useState(dayjs().tz(zone));

	useEffect(() => {
		const timer = setInterval(() => setCurrentTime(dayjs().tz(zone)), 1000);
		return () => clearInterval(timer);
	}, [zone]);

	const seconds = currentTime.second();
	const minutes = currentTime.minute();
	const hours = currentTime.hour();

	const secondsDeg = seconds * 6;
	const minutesDeg = minutes * 6 + seconds * 0.1;
	const hoursDeg = (hours % 12) * 30 + minutes * 0.5;

	const getHandStyle = (rotate: number): CSSProperties => ({
		transform: `translateX(-50%) rotate(${rotate}deg)`,
	});

	return (
		<div
			suppressHydrationWarning
			className='relative w-full aspect-square border border-current bg-gray-2 text-gray-12 rounded-full overflow-hidden'>
			{/* Markers */}
			{Array.from({ length: 60 }).map((_, i) => (
				<div
					key={i}
					className='absolute left-1/2 top-0 w-[1.5px] h-1/2 origin-bottom'
					style={{ transform: `translateX(-50%) rotate(${i * 6}deg)` }}>
					<div
						className={`absolute top-0 left-1/2 -translate-x-1/2 bg-gray-12 ${
							i % 5 === 0
								? "w-[1.5px] h-[12%]" // Major markers
								: "w-[1px] h-[6%]" // Minor markers
						}`}
					/>
				</div>
			))}

			{/* Hour Hand */}
			<div
				className='absolute bottom-1/2 left-1/2 origin-bottom bg-gray-11 z-10 rounded-full'
				style={{
					...getHandStyle(hoursDeg),
					width: "1.5%",
					height: "28%",
				}}
			/>

			{/* Minute Hand */}
			<div
				className='absolute bottom-1/2 left-1/2 origin-bottom bg-gray-12 z-[11] rounded-full'
				style={{
					...getHandStyle(minutesDeg),
					width: "1%",
					height: "40%",
				}}
			/>

			{/* Second Hand */}
			<div
				className='absolute bottom-1/2 left-1/2 origin-bottom bg-primary z-[12] rounded-full'
				style={{
					...getHandStyle(secondsDeg),
					width: "0.75%",
					height: "45%",
				}}
			/>

			{/* Center Point */}
			<div
				className='absolute top-1/2 left-1/2 z-[13] w-[3%] h-[3%] bg-gray-12 rounded-full '
				style={{ transform: "translate(-50%, -50%)" }}
			/>

			{/* Digital display */}
			<div
				className='z-[9] absolute top-[65%] left-1/2 flex flex-col items-center rounded-md px-1.5 py-1 text-[1.5cqw]/[1] text-gray-12 whitespace-nowrap' // Added whitespace-nowrap
				style={{ transform: "translate(-50%, -30%)" }}>
				<span className='tabular-nums'>
					<Time zone={zone} />
				</span>
				<span className=''>
					<TimeZone zone={zone} />
				</span>
			</div>
		</div>
	);
}
