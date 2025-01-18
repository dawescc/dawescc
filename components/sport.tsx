"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import sport from "@/lib/sport";
import { PageBlock, PageSectionTitle, PageSubSectionTitle } from "./page";

type SportContextType = {
	selectedDay: string;
	selectedWorkout: string;
	setSelectedDay: (day: string) => void;
	setSelectedWorkout: (workout: string) => void;
};

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportProvider({ children }: { children: ReactNode }) {
	const [selectedDay, setSelectedDay] = useState("");
	const [selectedWorkout, setSelectedWorkout] = useState("");

	useEffect(() => {
		// Set initial day on mount
		const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
		setSelectedDay(currentDay);
	}, []);

	useEffect(() => {
		// Update workout when day changes
		const workout = sport.schedule[selectedDay as keyof typeof sport.schedule] || "Rest";
		setSelectedWorkout(workout);
	}, [selectedDay]);

	return (
		<SportContext.Provider
			value={{
				selectedDay,
				selectedWorkout,
				setSelectedDay,
				setSelectedWorkout,
			}}>
			{children}
		</SportContext.Provider>
	);
}

const useSport = () => {
	const context = useContext(SportContext);
	if (!context) throw new Error("useSport must be used within SportProvider");
	return context;
};

export function SportSelector() {
	const { selectedDay, selectedWorkout, setSelectedDay, setSelectedWorkout } = useSport();
	const workoutOptions = Object.values(sport.schedule).filter((workout) => workout !== "Rest");

	return (
		<div className='space-y-4'>
			<div>
				<label className='block mb-2'>Day of Week:</label>
				<select
					value={selectedDay}
					onChange={(e) => setSelectedDay(e.target.value)}
					className='w-full p-2 border rounded'>
					{Object.keys(sport.schedule).map((day) => (
						<option
							key={day}
							value={day}>
							{day}
						</option>
					))}
				</select>
			</div>
			<div>
				<label className='block mb-2'>Workout:</label>
				<select
					value={selectedWorkout}
					onChange={(e) => setSelectedWorkout(e.target.value)}
					className='w-full p-2 border rounded'>
					<option value='Rest'>Rest</option>
					{workoutOptions.map((workout) => (
						<option
							key={workout}
							value={workout}>
							{workout}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export function SportDisplay() {
	const { selectedWorkout } = useSport();

	if (!selectedWorkout || selectedWorkout === "Rest") {
		return (
			<PageBlock>
				<PageSubSectionTitle
					className='capitalize'
					text='Rest Day'
				/>
				<p>Enjoy the day!</p>
			</PageBlock>
		);
	}

	const workout = sport.workouts[selectedWorkout as keyof typeof sport.workouts];

	return (
		<PageBlock>
			<PageSectionTitle text={workout.focus} />
			{Object.entries(workout).map(([group, exercises]) => {
				if (group === "focus") return null;
				return (
					<div
						className='grid grid-cols-1 gap-[0.5em]'
						key={group}>
						<PageSubSectionTitle
							className='capitalize mt-[0.5em]'
							text={group}
						/>
						<PageBlock>
							{Object.entries(exercises).map(([type, details]) => (
								<div
									key={type}
									className='grid grid-cols-1 gap-[0.5em]'>
									<span className='text-xs font-mono capitalize'>{type}</span>
									<div className='capitalize flex justify-between items-baseline'>
										<span className='font-semibold'>{details.exercise}</span>
										{group !== "cardio" ? (
											<span>
												{details.sets} × {details.reps}
											</span>
										) : (
											<span>
												{details.distance}mi @ {details.pace}min
											</span>
										)}
									</div>
								</div>
							))}
						</PageBlock>
					</div>
				);
			})}
		</PageBlock>
	);
}
