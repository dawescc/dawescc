"use client";

import Link from "next/link";
import { useEffect, useState, memo } from "react";
import { TbCircleArrowUpRight } from "react-icons/tb";

interface TimeState {
	value: string;
	isLoading: boolean;
}

interface Tag {
	children: React.ReactNode;
	href?: string;
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
				hour12: true,
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
		return (
			<Tag>
				<span className='rounded-sm bg-tag-active w-[10ch] animate-[pulse_1s_ease-in-out_infinite] inline-block text-transparent select-none'>:)</span>
			</Tag>
		);
	}

	return <Tag>{timeState.value}</Tag>;
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
		// Update every hour to catch DST changes
		const interval = setInterval(updateOffset, 3600000);
		return () => clearInterval(interval);
	}, [timezone]);

	if (state.isLoading) {
		return (
			<Tag>
				<span className='rounded-sm bg-tag-active w-[6ch] animate-[pulse_1s_ease-in-out_infinite] inline-block text-transparent select-none'>:)</span>
			</Tag>
		);
	}

	return <Tag>{state.value}</Tag>;
});

const Tag = ({ children, href }: Tag) => {
	const content = (
		<>
			{children}
			{href && <TbCircleArrowUpRight className='ml-1 inline' />}
		</>
	);

	const className = `inline-flex items-center px-2 py-1 mx-1 my-1 text-sm bg-tag text-foreground rounded-sm font-semibold ${
		href && "hover:bg-tag-active transition-colors cursor-pointer no-underline"
	}`;

	return href ? (
		<Link
			href={href}
			className={className}>
			{content}
		</Link>
	) : (
		<span className={className}>{content}</span>
	);
};

LiveTime.displayName = "LiveTime";
TimeZone.displayName = "TimeZone";

export { LiveTime, TimeZone, Tag };
