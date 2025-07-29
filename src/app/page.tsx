import Image from "next/image";
import Link from "next/link";

export default function Home() {
	// 🎯 CHANGE THIS LINE to jump to different lessons quickly!
	const quickLesson = "components"; // Try: "props", "state", "events", "lists"

	// 🎯 EXPERIMENT: Change this to see different tutorial modes
	const showBeginner = true; // Try: false for advanced mode

	const lessons = [
		{
			id: "components",
			title: "01. Components & JSX",
			description: "Learn how to create and use React components",
			difficulty: "Beginner",
			time: "10 min",
			concepts: ["JSX", "Components", "Props basics"],
		},
		{
			id: "props",
			title: "02. Props & TypeScript",
			description: "Pass data between components with typed props",
			difficulty: "Beginner",
			time: "15 min",
			concepts: ["Props", "TypeScript", "Data flow"],
		},
		{
			id: "state",
			title: "03. State & Interactivity",
			description: "Make your components interactive with useState",
			difficulty: "Beginner",
			time: "20 min",
			concepts: ["useState", "Event handling", "Re-rendering"],
		},
		{
			id: "lists",
			title: "04. Lists & Conditional Rendering",
			description: "Render dynamic content and handle arrays",
			difficulty: "Beginner",
			time: "25 min",
			concepts: ["map()", "Keys", "Conditional rendering"],
		},
		{
			id: "effects",
			title: "05. useEffect & Side Effects",
			description:
				"Learn lifecycle effects, timers, and data fetching",
			difficulty: "Beginner",
			time: "30 min",
			concepts: [
				"useEffect",
				"Cleanup",
				"Event listeners",
				"API calls",
			],
		},
		{
			id: "routing",
			title: "06. Next.js Routing",
			description: "Navigate between pages with Next.js routing",
			difficulty: "Intermediate",
			time: "15 min",
			concepts: ["App Router", "Link", "Dynamic routes"],
		},
	];

	const filteredLessons = showBeginner
		? lessons.filter((lesson) => lesson.difficulty === "Beginner")
		: lessons;

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-6 py-12">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="flex justify-center mb-6">
						<Image
							className="dark:invert"
							src="/next.svg"
							alt="Next.js logo"
							width={180}
							height={38}
							priority
						/>
					</div>
					<h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Interactive React Tutorial
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Learn React & Next.js by changing one line of code at a
						time! Clone this repo and start experimenting immediately.
					</p>
				</div>

				{/* Quick Start Section */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
						🚀 Quick Start
					</h2>
					<div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
						<p className="text-gray-700 dark:text-gray-300 mb-4">
							<strong>Step 1:</strong> Look for lines marked with 🎯
							in the code
						</p>
						<p className="text-gray-700 dark:text-gray-300 mb-4">
							<strong>Step 2:</strong> Change the value and save the
							file
						</p>
						<p className="text-gray-700 dark:text-gray-300">
							<strong>Step 3:</strong> Watch the magic happen
							instantly!
						</p>
					</div>

					<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
						<p className="text-blue-800 dark:text-blue-200 font-medium">
							💡 Quick Jump: Currently set to "{quickLesson}" lesson.
							Change the{" "}
							<code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
								quickLesson
							</code>{" "}
							variable above to jump to any lesson!
						</p>
						<Link
							href={`/lessons/${quickLesson}`}
							className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
							Go to {quickLesson} lesson →
						</Link>
					</div>
				</div>

				{/* Lessons Grid */}
				<div className="mb-12">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
							Choose Your Learning Path
						</h2>
						<div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md">
							<span className="text-sm text-gray-600 dark:text-gray-400">
								Mode: {showBeginner ? "Beginner" : "All Levels"}
							</span>
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredLessons.map((lesson) => (
							<Link
								key={lesson.id}
								href={`/lessons/${lesson.id}`}
								className="group">
								<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
									<div className="flex justify-between items-start mb-4">
										<h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
											{lesson.title}
										</h3>
										<span
											className={`px-3 py-1 rounded-full text-xs font-medium ${
												lesson.difficulty === "Beginner"
													? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
													: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
											}`}>
											{lesson.difficulty}
										</span>
									</div>

									<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
										{lesson.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{lesson.concepts.map((concept) => (
											<span
												key={concept}
												className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
												{concept}
											</span>
										))}
									</div>

									<div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
										<span>⏱️ {lesson.time}</span>
										<span className="group-hover:text-blue-600 transition-colors">
											Start learning →
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* Getting Started Instructions */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
						📚 How This Tutorial Works
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								🎯 Look for Target Lines
							</h3>
							<p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
								Every lesson has clearly marked lines you can modify.
								Just look for the 🎯 emoji and follow the suggestions!
							</p>

							<div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
								<span className="text-green-600 dark:text-green-400">
									// 🎯 CHANGE THIS:
								</span>
								<br />
								<span className="text-blue-600 dark:text-blue-400">
									const
								</span>{" "}
								message ={" "}
								<span className="text-red-600 dark:text-red-400">
									"Hello"
								</span>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								⚡ Instant Feedback
							</h3>
							<p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
								Every change you make shows immediate results. No
								complex setup, no waiting - just pure learning!
							</p>

							<div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
								<div className="flex items-center text-sm">
									<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
									<span className="text-gray-700 dark:text-gray-300">
										Live reload enabled
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
