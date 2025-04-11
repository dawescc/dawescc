"use client";

import { useState, useEffect } from "react";
// Adjust the import path based on your file structure
import { TimeDisplay } from "./time";

// Define the default timezone
const defaultZone = "America/New_York";

export function DualClockDisplay() {
	// State to hold the user's detected time zone
	const [userTimeZone, setUserTimeZone] = useState<string | null>(null); // Label for the user clock

	useEffect(() => {
		// This effect runs only once on the client after mount
		const detectedZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

		if (detectedZone) {
			setUserTimeZone(detectedZone);
		} else {
			setUserTimeZone(defaultZone);
		}
	}, []); // Empty dependency array ensures it runs only once on mount

	return (
		<div className='flex flex-wrap gap-6'>
			<div className='flex flex-col items-center'>
				<div className='size-32 md:size-36'>
					<TimeDisplay zone={defaultZone} />
				</div>
			</div>
			{userTimeZone ? (
				<div className='flex flex-col items-center'>
					<div className='size-32 md:size-36'>
						<TimeDisplay zone={userTimeZone} />
					</div>
				</div>
			) : (
				<div className='flex flex-col items-center'>
					<div className='flex h-36 w-36 items-center justify-center rounded-full border border-dashed border-gray-400 bg-gray-100 md:h-48 md:w-48'>
						<span className='text-xs text-gray-500'>Loading...</span>
					</div>
					<span className='mt-2 text-sm font-semibold text-gray-400'>Local Time</span>
				</div>
			)}
		</div>
	);
}
