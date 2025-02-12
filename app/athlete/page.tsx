/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { athleteData } from "./data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
	const [selectedPhase, setSelectedPhase] = useState(0);
	const [selectedWorkout, setSelectedWorkout] = useState<null | {
		phaseIndex: number;
		workout: any;
	}>(null);

	return (
		<main>
			{/* Phases Tabs */}
			<div className='sticky top-0 bg-background/80 backdrop-blur-sm border-b border-block/10'>
				<div className='overflow-x-auto scrollbar-hide'>
					<div className='flex min-w-max p-4 gap-2'>
						{athleteData.phases.map((phase, index) => (
							<button
								key={index}
								onClick={() => setSelectedPhase(index)}
								className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors
                  ${selectedPhase === index ? "bg-primary text-background" : "bg-block/5 hover:bg-block/10"}`}>
								{phase.name}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Workouts Horizontal Scroll */}
			<div className='p-4'>
				<div className='overflow-x-auto scrollbar-hide'>
					<div className='flex min-w-max gap-4 p-2'>
						{athleteData.phases[selectedPhase].weeks[0].workouts.map((workout, index) => (
							<motion.div
								key={index}
								layoutId={`workout-${selectedPhase}-${index}`}
								onClick={() => setSelectedWorkout({ phaseIndex: selectedPhase, workout })}
								className='w-80 shrink-0 cursor-pointer'>
								<div className='p-6 rounded-2xl bg-surface-light hover:bg-block/5 transition-colors'>
									<div className='flex items-center justify-between mb-4'>
										<span className='font-medium'>{workout.day}</span>
										<span className='text-sm px-3 py-1 rounded-full bg-primary/10 text-primary'>{workout.type}</span>
									</div>
									<div className='space-y-3'>
										{workout.exercises.slice(0, 3).map((exercise, i) => (
											<div
												key={i}
												className='text-sm text-foreground/60'>
												{exercise.name}
											</div>
										))}
										{workout.exercises.length > 3 && <div className='text-sm text-primary'>+{workout.exercises.length - 3} more</div>}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Fullscreen Workout Modal */}
			<AnimatePresence>
				{selectedWorkout && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedWorkout(null)}
							className='fixed inset-0 bg-foreground/20 backdrop-blur-sm'
						/>
						<motion.div
							layoutId={`workout-${selectedWorkout.phaseIndex}-${selectedWorkout.workout.day}`}
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 20, opacity: 0 }}
							className='fixed inset-4 md:inset-12 bg-background rounded-2xl p-6 overflow-y-auto'>
							<div className='max-w-2xl mx-auto'>
								<div className='flex items-center justify-between mb-6'>
									<div>
										<h2 className='text-2xl font-medium mb-1'>{selectedWorkout.workout.day}</h2>
										<p className='text-primary'>{selectedWorkout.workout.type}</p>
									</div>
									<button
										onClick={() => setSelectedWorkout(null)}
										className='p-2 rounded-full hover:bg-block/10'>
										<IconClose className='w-6 h-6' />
									</button>
								</div>

								<div className='space-y-6'>
									{selectedWorkout.workout.exercises.map((exercise: any, index: number) => (
										<div
											key={index}
											className='p-4 rounded-xl bg-block/5'>
											<div className='flex justify-between items-start mb-2'>
												<h3 className='font-medium'>{exercise.name}</h3>
												<span className='text-sm font-mono bg-block/10 px-3 py-1 rounded-full'>
													{exercise.sets} × {exercise.reps}
												</span>
											</div>
											<p className='text-sm text-foreground/60'>{exercise.instructions}</p>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</main>
	);
}

const IconClose = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'>
		<path d='M6 18L18 6M6 6l12 12' />
	</svg>
);
