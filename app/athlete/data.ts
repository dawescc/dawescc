export interface AthletePlan {
	currentStats: {
		weight: number;
		bodyFat: number;
		pace: number;
	};
	targetStats: {
		weight: number;
		bodyFat: number;
		pace: number;
	};
	phases: Phase[];
	nutrition: Nutrition;
}

interface Phase {
	name: string;
	weeks: Week[];
}

interface Week {
	workouts: WorkoutDay[];
}

export interface Exercise {
	name: string;
	sets: number;
	reps: string;
	instructions: string;
}

interface WorkoutDay {
	day: string;
	type: string;
	exercises: Exercise[];
}

interface Nutrition {
	meals: Meal[];
}

interface Meal {
	name: string;
	items: string[];
	macros: {
		protein: number;
		carbs: number;
		fat: number;
	};
}

export const athleteData: AthletePlan = {
	currentStats: {
		weight: 175,
		bodyFat: 18,
		pace: 9.5,
	},
	targetStats: {
		weight: 185,
		bodyFat: 11,
		pace: 7.0,
	},
	phases: [
		{
			name: "Foundation Phase (Feb-Apr)",
			weeks: [
				{
					workouts: [
						{
							day: "Monday",
							type: "Strength",
							exercises: [
								{
									name: "Flat Barbell Bench",
									sets: 5,
									reps: "5 @ 75% 1RM",
									instructions: "Perform bench press with flat back position",
								},
								{
									name: "Weighted Pull-ups",
									sets: 4,
									reps: "6",
									instructions: "Perform pull-ups with added weight",
								},
								{
									name: "Low-Incline Pause Bench",
									sets: 3,
									reps: "5-7",
									instructions: "Perform with 3-sec eccentric",
								},
								{
									name: "Chest-Supported Row",
									sets: 4,
									reps: "6-8",
									instructions: "Maintain chest contact with pad throughout movement",
								},
							],
						},
						{
							day: "Tuesday",
							type: "Power",
							exercises: [
								{
									name: "Trap Bar Deadlift",
									sets: 4,
									reps: "3 @ 70%",
									instructions: "Fast concentric movement",
								},
								{
									name: "Depth Jumps",
									sets: 4,
									reps: "5",
									instructions: 'Jump from 18" box',
								},
								{
									name: "Single-Leg RDL",
									sets: 3,
									reps: "8/side",
									instructions: "Maintain balance and control",
								},
								{
									name: "Nordic Ham Curls",
									sets: 3,
									reps: "6-8",
									instructions: "Control the eccentric portion",
								},
							],
						},
						{
							day: "Thursday",
							type: "Hypertrophy",
							exercises: [
								{
									name: "Incline Dumbbell Press",
									sets: 4,
									reps: "8-12",
									instructions: "Full range of motion",
								},
								{
									name: "Neutral-Grip Pull-ups",
									sets: 4,
									reps: "AMRAP",
									instructions: "Use neutral grip, perform as many reps as possible",
								},
								{
									name: "Lateral Raises",
									sets: 3,
									reps: "15-20",
									instructions: "Control the movement",
								},
								{
									name: "Cable Flye + Tricep Superset",
									sets: 3,
									reps: "12-15",
									instructions: "Perform as superset",
								},
							],
						},
						{
							day: "Friday",
							type: "Work Capacity",
							exercises: [
								{
									name: "Front Squat",
									sets: 4,
									reps: "8",
									instructions: "2-0-1 tempo",
								},
								{
									name: "Walking Lunges",
									sets: 3,
									reps: "12/side",
									instructions: "Maintain proper form",
								},
								{
									name: "Glute-Ham Raise",
									sets: 3,
									reps: "10-12",
									instructions: "Control throughout movement",
								},
								{
									name: "Assault Bike Sprints",
									sets: 8,
									reps: "20s/40s",
									instructions: "20 seconds work, 40 seconds rest",
								},
							],
						},
					],
				},
			],
		},
		{
			name: "Muscle Prime Phase (May-Jul)",
			weeks: [
				{
					workouts: [
						{
							day: "Monday",
							type: "Strength",
							exercises: [
								{
									name: "Bench Press (comp grip)",
									sets: 5,
									reps: "3 @ 85%",
									instructions: "Competition grip width",
								},
								{
									name: "Pendlay Row",
									sets: 4,
									reps: "5",
									instructions: "2-sec pause at chest",
								},
								{
									name: "Incline Close-Grip Bench",
									sets: 3,
									reps: "6-8",
									instructions: "Explosive concentric",
								},
								{
									name: "Single-Arm Landmine Press",
									sets: 3,
									reps: "8/side",
									instructions: "Control throughout movement",
								},
							],
						},
						{
							day: "Tuesday",
							type: "Power",
							exercises: [
								{
									name: "Deadlift",
									sets: 5,
									reps: "3 @ 50%",
									instructions: "Focus on bar speed",
								},
								{
									name: "Box Jumps",
									sets: 4,
									reps: "5",
									instructions: '24" box height',
								},
								{
									name: "Sled Push",
									sets: 3,
									reps: "20m",
									instructions: "Maximum effort",
								},
								{
									name: "Single-Leg Calf Raise",
									sets: 4,
									reps: "8-10",
									instructions: "Full range of motion",
								},
							],
						},
						{
							day: "Thursday",
							type: "Hypertrophy",
							exercises: [
								{
									name: "Weighted Dips",
									sets: 4,
									reps: "8-10",
									instructions: "Control descent",
								},
								{
									name: "Pull-ups",
									sets: 4,
									reps: "AMRAP",
									instructions: "Add weight if needed",
								},
								{
									name: "Bradford Press",
									sets: 3,
									reps: "10",
									instructions: "Maintain shoulder control",
								},
								{
									name: "Face Pulls + Lateral Raise Superset",
									sets: 3,
									reps: "15",
									instructions: "Perform as superset",
								},
							],
						},
						{
							day: "Friday",
							type: "Work Capacity",
							exercises: [
								{
									name: "High-Bar Squat",
									sets: 4,
									reps: "8-10",
									instructions: "Maintain upright torso",
								},
								{
									name: "Bulgarian Split Squat",
									sets: 3,
									reps: "10-12/side",
									instructions: "Control balance",
								},
								{
									name: "RDL",
									sets: 3,
									reps: "12-15",
									instructions: "1-2 RIR",
								},
								{
									name: "Leg Press Drop Set",
									sets: 1,
									reps: "20",
									instructions: "Strip weight x3",
								},
							],
						},
					],
				},
			],
		},
		{
			name: "Shred Phase (Aug-Oct)",
			weeks: [
				{
					workouts: [
						{
							day: "Monday",
							type: "Strength",
							exercises: [
								{
									name: "Bench Press",
									sets: 3,
									reps: "3 @ 85%",
									instructions: "Competition form",
								},
								{
									name: "Weighted Chin-ups",
									sets: 4,
									reps: "4",
									instructions: "Control descent",
								},
								{
									name: "Floor Press",
									sets: 3,
									reps: "5-7",
									instructions: "Pause at floor",
								},
								{
									name: "Meadows Row",
									sets: 3,
									reps: "8-10",
									instructions: "Full range of motion",
								},
							],
						},
						{
							day: "Tuesday",
							type: "Conditioning",
							exercises: [
								{
									name: "Tempo Run",
									sets: 1,
									reps: "3 miles",
									instructions: "8:30/mile pace",
								},
								{
									name: "Battle Ropes",
									sets: 8,
									reps: "30s/30s",
									instructions: "Alternate waves",
								},
								{
									name: "Farmer's Walk",
									sets: 3,
									reps: "40m",
									instructions: "Heavy weight",
								},
							],
						},
						{
							day: "Thursday",
							type: "Hypertrophy",
							exercises: [
								{
									name: "Incline Smith Press",
									sets: 4,
									reps: "10-12",
									instructions: "Control eccentric",
								},
								{
									name: "Cable Lat Pulldown",
									sets: 4,
									reps: "12-15",
									instructions: "Full stretch at top",
								},
								{
									name: "Reverse Pec Deck",
									sets: 3,
									reps: "15",
									instructions: "Focus on rear delts",
								},
								{
									name: "Hammer Curl",
									sets: 3,
									reps: "12",
									instructions: "Control throughout",
								},
							],
						},
						{
							day: "Friday",
							type: "Work Capacity",
							exercises: [
								{
									name: "Paused Front Squat",
									sets: 3,
									reps: "6",
									instructions: "2-second pause at bottom",
								},
								{
									name: "Step-ups",
									sets: 3,
									reps: "10/side",
									instructions: "Control step down",
								},
								{
									name: "Back Extension",
									sets: 3,
									reps: "15",
									instructions: "Squeeze at top",
								},
								{
									name: "Air Bike Intervals",
									sets: 10,
									reps: "1min/1min",
									instructions: "Work/rest intervals",
								},
							],
						},
					],
				},
			],
		},
		{
			name: "Peak Phase (Nov-Dec)",
			weeks: [
				{
					workouts: [
						{
							day: "Monday",
							type: "Strength",
							exercises: [
								{
									name: "Competition Bench",
									sets: 3,
									reps: "3 @ 90%",
									instructions: "Competition form",
								},
								{
									name: "Explosive Pull-ups",
									sets: 5,
									reps: "3",
									instructions: "Explosive concentric",
								},
								{
									name: "Spoto Press",
									sets: 3,
									reps: "5",
									instructions: "Pause 1 inch above chest",
								},
								{
									name: "Kroc Row",
									sets: 3,
									reps: "20",
									instructions: "Heavy weight, high reps",
								},
							],
						},
						{
							day: "Tuesday",
							type: "Speed",
							exercises: [
								{
									name: "Race-Pace Intervals",
									sets: 6,
									reps: "800m",
									instructions: "6:45/mile pace",
								},
								{
									name: "Depth Drops",
									sets: 4,
									reps: "5",
									instructions: "Land softly",
								},
								{
									name: "Sprint Technique Drills",
									sets: 3,
									reps: "20m",
									instructions: "Focus on form",
								},
							],
						},
						{
							day: "Thursday",
							type: "Hypertrophy",
							exercises: [
								{
									name: "DB Bench",
									sets: 4,
									reps: "8",
									instructions: "Control throughout",
								},
								{
									name: "V-Grip Pulldown",
									sets: 4,
									reps: "10",
									instructions: "Full range of motion",
								},
								{
									name: "Rear Delt Flye",
									sets: 4,
									reps: "15",
									instructions: "Light weight, perfect form",
								},
								{
									name: "Preacher Curl",
									sets: 3,
									reps: "10",
									instructions: "Full extension at bottom",
								},
							],
						},
						{
							day: "Friday",
							type: "Work Capacity",
							exercises: [
								{
									name: "Pause Squat",
									sets: 3,
									reps: "5",
									instructions: "2-second pause at bottom",
								},
								{
									name: "Reverse Lunge",
									sets: 3,
									reps: "8/side",
									instructions: "Control step back",
								},
								{
									name: "Single-Leg Glute Bridge",
									sets: 3,
									reps: "12",
									instructions: "Full hip extension",
								},
								{
									name: "Rower Sprints",
									sets: 8,
									reps: "500m",
									instructions: "Maximum effort",
								},
							],
						},
					],
				},
			],
		},
	],
	nutrition: {
		meals: [], // Will implement separately
	},
};

export const workoutPlan = {
	exercises: [
		{
			name: "Push-ups",
			sets: 3,
			reps: "15-20",
			instructions: "Start in plank position. Lower body until chest nearly touches floor, then push back up.",
		},
		{
			name: "Pull-ups",
			sets: 3,
			reps: "8-12",
			instructions: "Grab bar with overhand grip. Pull yourself up until chin clears bar, then lower with control.",
		},
		{
			name: "Bodyweight Squats",
			sets: 4,
			reps: "20-25",
			instructions: "Stand with feet shoulder-width apart. Lower hips back and down like sitting in a chair.",
		},
		{
			name: "Plank",
			sets: 3,
			reps: "1min",
			instructions: "Maintain straight body line from head to heels. Engage core and hold position.",
		},
	] as Exercise[],
};
