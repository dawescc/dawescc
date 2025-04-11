"use client";

import { useState, useEffect } from "react";
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
	const timeZoneName = dayjs().tz(zone).format("zzz");
	return <>{timeZoneName}</>;
}
