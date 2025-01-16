const sport = {
	program: "4-Day Split",
	schedule: {
		Monday: "A1",
		Tuesday: "Rest",
		Wednesday: "B1",
		Thursday: "A2",
		Friday: "Rest",
		Saturday: "B2",
		Sunday: "Rest",
	},
	workouts: {
		A1: {
			focus: "Chest/Back/Biceps",
			chest: {
				main: {
					exercise: "Incline Dumbbell Press",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Flat Dumbbell Press",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Cable Fly",
					sets: 3,
					reps: "12-15",
				},
			},
			back: {
				main: {
					exercise: "Pull-ups",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Single Arm Cable Row",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Straight Arm Pulldown",
					sets: 3,
					reps: "12-15",
				},
			},
			biceps: {
				main: {
					exercise: "Standing Dumbbell Curl",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Incline Dumbbell Curl",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Cable Curl",
					sets: 3,
					reps: "12-15",
				},
			},
			cardio: {
				run: {
					exercise: "Relaxing Run",
					pace: 9,
					distance: 1.5,
				},
			},
		},
		B1: {
			focus: "Shoulders/Legs/Triceps",
			shoulders: {
				main: {
					exercise: "Standing Dumbbell Press",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Seated Dumbbell Press",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Cable Lateral Raise",
					sets: 3,
					reps: "12-15",
				},
			},
			legs: {
				main: {
					exercise: "Dumbbell Squat",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Split Squat",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Romanian Deadlift",
					sets: 3,
					reps: "12-15",
				},
			},
			triceps: {
				main: {
					exercise: "Dumbbell Close Grip Press",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Overhead Cable Extension",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Rope Pushdown",
					sets: 3,
					reps: "12-15",
				},
			},
			cardio: {
				run: {
					exercise: "Standard Run",
					pace: 9.5,
					distance: 2.5,
				},
			},
		},
		A2: {
			focus: "Chest/Back/Biceps",
			chest: {
				main: {
					exercise: "Flat Dumbbell Press",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Incline Dumbbell Press",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Low Cable Fly",
					sets: 3,
					reps: "12-15",
				},
			},
			back: {
				main: {
					exercise: "Cable Pulldown",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Standing Cable Row",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Pull-ups",
					sets: 3,
					reps: "failure",
				},
			},
			biceps: {
				main: {
					exercise: "Cable Curl",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Dumbbell Hammer Curl",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "High Cable Curl",
					sets: 3,
					reps: "12-15",
				},
			},
			cardio: {
				run: {
					exercise: "5K Run",
					pace: 10,
					distance: 3.5,
				},
			},
		},
		B2: {
			focus: "Shoulders/Legs/Triceps",
			shoulders: {
				main: {
					exercise: "Arnold Press",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Cable Front Raise",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Face Pull",
					sets: 3,
					reps: "12-15",
				},
			},
			legs: {
				main: {
					exercise: "Dumbbell Romanian Deadlift",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Walking Lunge",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Goblet Squat",
					sets: 3,
					reps: "12-15",
				},
			},
			triceps: {
				main: {
					exercise: "Cable Tricep Extension",
					sets: 4,
					reps: "8-12",
				},
				alternate: {
					exercise: "Single Arm Pushdown",
					sets: 3,
					reps: "10-12",
				},
				stretch: {
					exercise: "Rope Overhead Extension",
					sets: 3,
					reps: "12-15",
				},
			},
			cardio: {
				run: {
					exercise: "Long Distance, Slow, Run",
					pace: 11.5,
					distance: 5,
				},
			},
		},
	},
};
export default sport;
