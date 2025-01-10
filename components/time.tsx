"use client";

import { useEffect, useState, memo } from "react";

interface TimeState {
	value: string;
	isLoading: boolean;
}

const LiveTime = memo(({ timezone }: { timezone: string }) => {
	const [timeState, setTimeState] = useState<TimeState>({
		value: "",
		isLoading: true,
	});

	useEffect(() => {
		const formatTime = () => {
			const options: Intl.DateTimeFormatOptions = {
				second: "2-digit",
				hour: "numeric",
				minute: "numeric",
				hour12: false,
				timeZone: timezone,
			};

			return new Intl.DateTimeFormat("en-US", options).format(new Date());
		};

		const updateTime = () => {
			setTimeState({
				value: formatTime(),
				isLoading: false,
			});
		};

		updateTime();

		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, [timezone]);

	if (timeState.isLoading) {
		return <div className='rounded-lg bg-button-active animate-pulse h-[1em] w-[5ch] px-2'></div>;
	}

	return timeState.value;
});

const TimeZone = memo(({ timezone }: { timezone: string }) => {
	const [state, setState] = useState<{ value: string; isLoading: boolean }>({
		value: "",
		isLoading: true,
	});

	useEffect(() => {
		const updateOffset = () => {
			const formatter = new Intl.DateTimeFormat("en-US", {
				timeZone: timezone,
				timeZoneName: "longOffset",
			});
			const parts = formatter.formatToParts(new Date());
			const utcPart = parts.find((p) => p.type === "timeZoneName")?.value || "";
			const cleanOffset = utcPart.replace("GMT", "UTC").replace(":00", "");
			setState({
				value: cleanOffset,
				isLoading: false,
			});
		};

		updateOffset();
		const interval = setInterval(updateOffset, 3600000);
		return () => clearInterval(interval);
	}, [timezone]);

	if (state.isLoading) {
		return <div className='rounded-lg bg-button-active animate-pulse h-[1em] w-[6ch] px-2'></div>;
	}

	return state.value;
});

LiveTime.displayName = "LiveTime";
TimeZone.displayName = "TimeZone";

export { LiveTime, TimeZone };
