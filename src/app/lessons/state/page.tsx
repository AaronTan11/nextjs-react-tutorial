"use client";

import Link from "next/link";
import { useState } from "react";

export default function StateLesson() {
	// 🎯 EXPERIMENT: Change these initial values and reload the page!
	const initialCount = 0; // Try: 5, 10, 100
	const initialName = "Alex"; // Try your name!
	const initialTheme = "blue"; // Try: "purple", "green", "red"
	const initialShowWelcome = true; // Try: false

	// 🎯 CHANGE THIS: Try different starting settings
	const startingLikes = 42; // Try: 0, 100, 1000
	const startingFollowers = 128; // Try: 0, 500, 10000
	const initialTodoText = "Learn React"; // Try: "Build amazing apps"

	// State hooks - These create reactive variables!
	const [count, setCount] = useState(initialCount);
	const [name, setName] = useState(initialName);
	const [theme, setTheme] = useState(initialTheme);
	const [showWelcome, setShowWelcome] = useState(initialShowWelcome);
	const [likes, setLikes] = useState(startingLikes);
	const [followers, setFollowers] = useState(startingFollowers);
	const [todos, setTodos] = useState([
		{ id: 1, text: initialTodoText, completed: false },
		{ id: 2, text: "Master useState", completed: false },
	]);
	const [newTodo, setNewTodo] = useState("");

	// Theme styles
	const themes = {
		blue: "from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900",
		purple:
			"from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-900",
		green:
			"from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900",
		red: "from-red-50 to-orange-100 dark:from-red-900 dark:to-orange-900",
	};

	// Event handlers - Functions that update state
	const handleIncrement = () => setCount(count + 1);
	const handleDecrement = () => setCount(count - 1);
	const handleReset = () => setCount(initialCount);
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const handleThemeChange = (newTheme: string) => setTheme(newTheme);
	const handleLike = () => setLikes(likes + 1);
	const handleFollow = () => setFollowers(followers + 1);

	const addTodo = () => {
		if (newTodo.trim()) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					text: newTodo,
					completed: false,
				},
			]);
			setNewTodo("");
		}
	};

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, completed: !todo.completed }
					: todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div
			className={`min-h-screen bg-gradient-to-br ${
				themes[theme as keyof typeof themes]
			}`}>
			<div className="container mx-auto px-6 py-8">
				{/* Navigation */}
				<nav className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
							State Tutorial
						</h1>
						<div className="flex gap-4">
							<Link
								href="/lessons/props"
								className="text-blue-600 hover:underline">
								← Previous: Props
							</Link>
							<Link
								href="/"
								className="text-blue-600 hover:underline">
								Dashboard
							</Link>
							<Link
								href="/lessons/lists"
								className="text-blue-600 hover:underline">
								Next: Lists →
							</Link>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							⚡ Lesson 3: State & Interactivity
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Learn how useState makes your components interactive and
							reactive!
						</p>
					</div>

					{/* Welcome Message - Controlled by state */}
					{showWelcome && (
						<div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-6 mb-8 border border-blue-200 dark:border-blue-700">
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
								Welcome, {name}! 👋
							</h2>
							<p className="text-gray-600 dark:text-gray-300">
								This message is controlled by state. Try changing your
								name below!
							</p>
							<button
								onClick={() => setShowWelcome(false)}
								className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
								Hide Welcome (useState in action!)
							</button>
						</div>
					)}

					{/* Interactive Demos Grid */}
					<div className="grid lg:grid-cols-2 gap-8 mb-8">
						{/* Counter Demo */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
							<h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
								🔢 Counter Demo
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
								This counter started at: {initialCount}
							</p>

							<div className="text-center">
								<div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
									{count}
								</div>

								<div className="flex justify-center gap-3">
									<button
										onClick={handleDecrement}
										className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
										-1
									</button>
									<button
										onClick={handleReset}
										className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
										Reset
									</button>
									<button
										onClick={handleIncrement}
										className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
										+1
									</button>
								</div>
							</div>
						</div>

						{/* Name Input Demo */}
						<div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
							<h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
								✏️ Name Input Demo
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
								Started with: "{initialName}"
							</p>

							<div className="space-y-4">
								<input
									type="text"
									value={name}
									onChange={handleNameChange}
									placeholder="Type your name..."
									className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>

								<div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
									<p className="text-gray-900 dark:text-white">
										Hello, <strong>{name}</strong>!
										{name.length > 0 && (
											<span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
												({name.length} characters)
											</span>
										)}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Social Media Demo */}
					<div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 mb-8 border border-orange-200 dark:border-orange-700">
						<h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
							📱 Social Media Demo
						</h3>

						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
								<div className="flex items-center justify-between mb-3">
									<span className="text-gray-900 dark:text-white font-medium">
										@{name.toLowerCase()}
									</span>
									<span className="text-gray-500 dark:text-gray-400 text-sm">
										{followers} followers
									</span>
								</div>
								<p className="text-gray-700 dark:text-gray-300 mb-3">
									Learning React state management! Started with{" "}
									{startingLikes} likes and {startingFollowers}{" "}
									followers.
								</p>
								<div className="flex justify-between items-center">
									<button
										onClick={handleLike}
										className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors">
										<span>❤️</span>
										<span>{likes}</span>
									</button>
									<button
										onClick={handleFollow}
										className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition-colors text-sm">
										Follow
									</button>
								</div>
							</div>

							<div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
								<h4 className="font-bold text-gray-900 dark:text-white mb-3">
									Stats
								</h4>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-gray-600 dark:text-gray-400">
											Likes gained:
										</span>
										<span className="font-medium text-gray-900 dark:text-white">
											+{likes - startingLikes}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600 dark:text-gray-400">
											Followers gained:
										</span>
										<span className="font-medium text-gray-900 dark:text-white">
											+{followers - startingFollowers}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600 dark:text-gray-400">
											Engagement:
										</span>
										<span className="font-medium text-gray-900 dark:text-white">
											{followers > 0
												? Math.round((likes / followers) * 100)
												: 0}
											%
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Todo List Demo */}
					<div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8 border border-indigo-200 dark:border-indigo-700">
						<h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
							✅ Todo List Demo (Array State)
						</h3>

						<div className="mb-4">
							<div className="flex gap-2">
								<input
									type="text"
									value={newTodo}
									onChange={(e) => setNewTodo(e.target.value)}
									placeholder="Add a new todo..."
									className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
									onKeyPress={(e) => e.key === "Enter" && addTodo()}
								/>
								<button
									onClick={addTodo}
									className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors">
									Add
								</button>
							</div>
						</div>

						<div className="space-y-2">
							{todos.map((todo) => (
								<div
									key={todo.id}
									className="flex items-center justify-between bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
									<div className="flex items-center space-x-3">
										<input
											type="checkbox"
											checked={todo.completed}
											onChange={() => toggleTodo(todo.id)}
											className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
										/>
										<span
											className={`${
												todo.completed
													? "line-through text-gray-500 dark:text-gray-400"
													: "text-gray-900 dark:text-white"
											}`}>
											{todo.text}
										</span>
									</div>
									<button
										onClick={() => deleteTodo(todo.id)}
										className="text-red-500 hover:text-red-600 transition-colors">
										🗑️
									</button>
								</div>
							))}

							{todos.length === 0 && (
								<p className="text-gray-500 dark:text-gray-400 text-center py-4">
									No todos yet. Add one above!
								</p>
							)}
						</div>
					</div>

					{/* Theme Switcher */}
					<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-600">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🎨 Theme Switcher (State Controls UI)
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
							Current theme: {theme} (started with: {initialTheme})
						</p>

						<div className="flex gap-2">
							{Object.keys(themes).map((themeName) => (
								<button
									key={themeName}
									onClick={() => handleThemeChange(themeName)}
									className={`px-4 py-2 rounded-lg transition-colors capitalize ${
										theme === themeName
											? "bg-blue-500 text-white"
											: "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
									}`}>
									{themeName}
								</button>
							))}
						</div>
					</div>

					{/* Learning Content */}
					<div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
						{/* State Explanation */}
						<div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-700">
							<h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
								🎯 What You're Experiencing
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>Reactive updates:</strong> UI changes when
									state changes
								</li>
								<li>
									• <strong>Initial values:</strong> Set starting
									state (try changing them!)
								</li>
								<li>
									• <strong>Event handlers:</strong> Functions that
									update state
								</li>
								<li>
									• <strong>Array state:</strong> Managing lists of
									items
								</li>
								<li>
									• <strong>Conditional rendering:</strong> Show/hide
									based on state
								</li>
							</ul>
						</div>

						{/* React Concepts */}
						<div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
							<h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">
								⚛️ useState Concepts
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>useState hook:</strong> Creates reactive
									state variables
								</li>
								<li>
									• <strong>State updates:</strong> Re-render
									component when state changes
								</li>
								<li>
									• <strong>Immutability:</strong> Always create new
									state, don't mutate
								</li>
								<li>
									• <strong>Event handlers:</strong> Functions that
									respond to user actions
								</li>
								<li>
									• <strong>Controlled components:</strong> Form
									inputs controlled by state
								</li>
							</ul>
						</div>
					</div>

					{/* Code Examples */}
					<div className="mt-8">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							📝 How useState Works
						</h3>

						<div className="space-y-6">
							<CodeExample
								title="1. Creating State"
								code={`const [count, setCount] = useState(${initialCount});
const [name, setName] = useState("${initialName}");
const [todos, setTodos] = useState([...]);`}
								explanation="useState returns [currentValue, setterFunction]. Initial value can be any type."
							/>

							<CodeExample
								title="2. Updating State"
								code={`// Simple update
setCount(count + 1);

// Update from input
setName(e.target.value);

// Update array (create new array)
setTodos([...todos, newTodo]);`}
								explanation="Always use the setter function. For arrays/objects, create new ones instead of mutating."
							/>

							<CodeExample
								title="3. State in JSX"
								code={`{showWelcome && <div>Welcome, {name}!</div>}

<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`}
								explanation="State variables can be used directly in JSX. Changes trigger re-renders."
							/>
						</div>
					</div>

					{/* Interactive Challenge */}
					<div className="mt-8 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border-2 border-dashed border-cyan-300 dark:border-cyan-600">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🚀 State Challenge!
						</h3>
						<ol className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
							<li>
								1. Change{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									initialCount
								</code>{" "}
								to 100 and reload
							</li>
							<li>
								2. Try different{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									startingLikes
								</code>{" "}
								and{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									startingFollowers
								</code>
							</li>
							<li>
								3. Change{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									initialTheme
								</code>{" "}
								to "purple"
							</li>
							<li>
								4. Set{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									initialShowWelcome
								</code>{" "}
								to false
							</li>
							<li>
								5. Modify{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									initialTodoText
								</code>{" "}
								to something else
							</li>
							<li>6. Play with all the interactive elements!</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

// 🧩 Component: Code Example
function CodeExample({
	title,
	code,
	explanation,
}: {
	title: string;
	code: string;
	explanation: string;
}) {
	return (
		<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
			<h4 className="font-bold text-gray-900 dark:text-white mb-2">
				{title}
			</h4>
			<pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto mb-2">
				<code>{code}</code>
			</pre>
			<p className="text-sm text-gray-600 dark:text-gray-400">
				{explanation}
			</p>
		</div>
	);
}
