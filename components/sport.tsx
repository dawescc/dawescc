"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import sport from "@/lib/sport";

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
		return <div>Rest Day</div>;
	}

	const workout = sport.workouts[selectedWorkout as keyof typeof sport.workouts];

	return (
		<div className='space-y-6'>
			<h2 className='text-xl font-serif font-bold'>{workout.focus}</h2>
			{Object.entries(workout).map(([group, exercises]) => {
				if (group === "focus") return null;
				return (
					<div
						key={group}
						className='space-y-4'>
						<h3 className=' font-serif text-lg font-semibold capitalize'>{group}</h3>
						{Object.entries(exercises).map(([type, details]) => (
							<div
								key={type}
								className='ml-4'>
								<div className='border px-2 pt-3 pb-2 rounded-md grid grid-cols-1 space-y-2'>
									<div className='text-xs font-mono capitalize flex justify-between'>
										<span className='rounded-sm border px-1'>{type}</span>
										<span>
											{details.sets} × {details.reps}
										</span>
									</div>
									<div className='capitalize text-xl'>
										<span>{details.exercise}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
}
