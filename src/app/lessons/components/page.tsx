import Link from "next/link";
import Test from "./test";
export default function ComponentsLesson() {
	// 🎯 EXPERIMENT: Change these values and watch the page update!
	const showWelcome = true; // Try: false
	const appName = "My Awesome App"; // Try: "React Learning Hub", "Code Academy"
	const theme = "modern"; // Try: "retro", "minimal", "colorful"

	// 🎯 CHANGE THIS: Try different user information
	const userName = "wei hup"; // Try your own name!
	const userRole = "Student"; // Try: "Developer", "Designer", "Teacher"
	const isLoggedIn = true; // Try: false

	// 🎯 EXPERIMENT: Modify these component settings
	const showNavigation = true; // Try: false
	const enableAnimations = true; // Try: false
	const showFooter = true; // Try: false

	// Different theme styles
	const themes = {
		modern: {
			container:
				"bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
			card: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
			text: "text-gray-900 dark:text-white",
			accent: "text-blue-600 dark:text-blue-400",
		},
		retro: {
			container: "bg-gradient-to-br from-orange-100 to-pink-100",
			card: "bg-yellow-50 border-4 border-black",
			text: "text-black",
			accent: "text-purple-600",
		},
		minimal: {
			container: "bg-gray-50",
			card: "bg-white border border-gray-300",
			text: "text-gray-800",
			accent: "text-gray-600",
		},
		colorful: {
			container:
				"bg-gradient-to-br from-purple-200 via-pink-200 to-red-200",
			card: "bg-white border-2 border-rainbow shadow-xl",
			text: "text-gray-900",
			accent: "text-pink-600",
		},
	};

	const currentTheme =
		themes[theme as keyof typeof themes] || themes.modern;

	return (
		<div
			className={`min-h-screen ${currentTheme.container} ${
				enableAnimations ? "transition-all duration-500" : ""
			}`}>
			<div className="container mx-auto px-6 py-8">
				{/* Navigation Component - Shows how components can be conditional */}
				{showNavigation && (
					<nav
						className={`${
							currentTheme.card
						} rounded-lg p-4 mb-8 shadow-lg ${
							enableAnimations ? "animate-fade-in" : ""
						}`}>
						<div className="flex justify-between items-center">
							<h1
								className={`text-2xl font-bold ${currentTheme.text}`}>
								{appName}
							</h1>
							<div className="flex gap-4">
								<Link
									href="/"
									className={`${currentTheme.accent} hover:underline`}>
									← Back to Dashboard
								</Link>
								<Link
									href="/lessons/props"
									className={`${currentTheme.accent} hover:underline`}>
									Next: Props →
								</Link>
							</div>
						</div>
					</nav>
				)}

				{/* Main Content */}
				<div
					className={`${currentTheme.card} rounded-2xl shadow-xl p-8 mb-8`}>
					<div className="text-center mb-8">
						<h1
							className={`text-4xl font-bold ${currentTheme.text} mb-4`}>
							🧩 Lesson 1: Components & JSX
						</h1>
						<p className={`text-xl ${currentTheme.text} opacity-75`}>
							Learn how React components work by changing the code
							above!
						</p>
					</div>

					{/* Welcome Section - Demonstrates conditional rendering */}
					{showWelcome && (
						<WelcomeCard
							userName={userName}
							userRole={userRole}
							isLoggedIn={isLoggedIn}
							theme={currentTheme}
							enableAnimations={enableAnimations}
						/>
					)}

					{/* Learning Content */}
					<div className="grid md:grid-cols-2 gap-8 mt-8">
						{/* What You're Learning */}
						<ConceptCard
							title="🎯 What You're Changing"
							theme={currentTheme}
							enableAnimations={enableAnimations}>
							<ul
								className={`${currentTheme.text} space-y-2 text-sm`}>
								<li>
									• <strong>showWelcome:</strong> Controls if
									components appear
								</li>
								<li>
									• <strong>appName:</strong> Changes text content
								</li>
								<li>
									• <strong>theme:</strong> Switches entire visual
									style
								</li>
								<li>
									• <strong>userName/userRole:</strong> Personalizes
									content
								</li>
								<li>
									• <strong>enableAnimations:</strong> Toggles CSS
									effects
								</li>
							</ul>
						</ConceptCard>

						{/* React Concepts */}
						<ConceptCard
							title="⚛️ React Concepts Here"
							theme={currentTheme}
							enableAnimations={enableAnimations}>
							<ul
								className={`${currentTheme.text} space-y-2 text-sm`}>
								<li>
									• <strong>Components:</strong> Reusable UI pieces
								</li>
								<li>
									• <strong>Props:</strong> Data passed to components
								</li>
								<li>
									• <strong>JSX:</strong> HTML-like syntax in
									JavaScript
								</li>
								<li>
									• <strong>Conditional Rendering:</strong> Show/hide
									based on conditions
								</li>
								<li>
									• <strong>CSS Classes:</strong> Dynamic styling
								</li>
							</ul>
						</ConceptCard>
					</div>

					{/* Code Examples */}
					<div className="mt-8">
						<h3
							className={`text-2xl font-bold ${currentTheme.text} mb-4`}>
							📝 What's Happening in the Code
						</h3>

						<div className="grid gap-6">
							<CodeExample
								title="1. Variables Control Everything"
								code={`// 🎯 These variables control the entire page:
const showWelcome = ${showWelcome}
const appName = "${appName}"
const theme = "${theme}"`}
								explanation="Variables at the top control how components render"
								theme={currentTheme}
							/>

							<CodeExample
								title="2. Conditional Rendering"
								code={`{showWelcome && (
  <WelcomeCard userName={userName} />
)}`}
								explanation="Components only show when conditions are true"
								theme={currentTheme}
							/>

							<CodeExample
								title="3. Props (Data Flow)"
								code={`<WelcomeCard 
  userName={userName}
  userRole={userRole}
  theme={currentTheme}
/>`}
								explanation="Props pass data from parent to child components"
								theme={currentTheme}
							/>
						</div>
					</div>

					{/* Interactive Challenge */}
					<div
						className={`mt-8 p-6 ${currentTheme.container} rounded-lg border-2 border-dashed ${currentTheme.accent}`}>
						<h3
							className={`text-xl font-bold ${currentTheme.text} mb-4`}>
							🚀 Try This Challenge!
						</h3>
						<ol className={`${currentTheme.text} space-y-2 text-sm`}>
							<li>
								1. Change{" "}
								<code className="bg-gray-200 px-2 py-1 rounded">
									showWelcome
								</code>{" "}
								to{" "}
								<code className="bg-gray-200 px-2 py-1 rounded">
									false
								</code>
							</li>
							<li>
								2. Try different themes: "retro", "minimal",
								"colorful"
							</li>
							<li>3. Change your name and role</li>
							<li>
								4. Toggle{" "}
								<code className="bg-gray-200 px-2 py-1 rounded">
									isLoggedIn
								</code>{" "}
								between true/false
							</li>
							<li>
								5. Turn off animations with{" "}
								<code className="bg-gray-200 px-2 py-1 rounded">
									enableAnimations = false
								</code>
							</li>
						</ol>
					</div>
				</div>

				{/* Footer Component */}
				{showFooter && (
					<FooterComponent
						theme={currentTheme}
						enableAnimations={enableAnimations}
					/>
				)}
			</div>
		</div>
	);
}

// 🧩 Component: Welcome Card
// This shows how components are reusable pieces of UI
function WelcomeCard({
	userName,
	userRole,
	isLoggedIn,
	theme,
	enableAnimations,
}: {
	userName: string;
	userRole: string;
	isLoggedIn: boolean;
	theme: any;
	enableAnimations: boolean;
}) {
	return (
		<div
			className={`${theme.card} rounded-xl p-6 shadow-lg ${
				enableAnimations
					? "transform hover:scale-105 transition-all duration-300"
					: ""
			}`}>
			<div className="flex items-center space-x-4">
				<div
					className={`w-16 h-16 ${theme.accent} rounded-full flex items-center justify-center text-2xl font-bold text-white`}>
					{userName.charAt(0).toUpperCase()}
				</div>
				<div>
					<h2 className={`text-2xl font-bold ${theme.text}`}>
						Welcome, {userName}! 👋
					</h2>
					<p className={`${theme.text} opacity-75`}>
						Role: {userRole}
					</p>
					<div className="flex items-center mt-2">
						<div
							className={`w-3 h-3 rounded-full mr-2 ${
								isLoggedIn ? "bg-green-500" : "bg-red-500"
							}`}></div>
						<span className={`text-sm ${theme.text}`}>
							{isLoggedIn ? "Logged In" : "Not Logged In"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

// 🧩 Component: Concept Card
// Reusable card for displaying learning concepts
function ConceptCard({
	title,
	children,
	theme,
	enableAnimations,
}: {
	title: string;
	children: React.ReactNode;
	theme: any;
	enableAnimations: boolean;
}) {
	return (
		<div
			className={`${theme.card} rounded-lg p-6 shadow-lg ${
				enableAnimations
					? "hover:shadow-xl transition-all duration-300"
					: ""
			}`}>
			<h3 className={`text-lg font-bold ${theme.accent} mb-4`}>
				{title}
			</h3>
			{children}
		</div>
	);
}

// 🧩 Component: Code Example
// Shows code with explanations
function CodeExample({
	title,
	code,
	explanation,
	theme,
}: {
	title: string;
	code: string;
	explanation: string;
	theme: any;
}) {
	return (
		<div className={`${theme.card} rounded-lg p-4 shadow-md`}>
			<h4 className={`font-bold ${theme.text} mb-2`}>{title}</h4>
			<pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto mb-2">
				<code>{code}</code>
			</pre>
			<p className={`text-sm ${theme.text} opacity-75`}>
				{explanation}
			</p>
		</div>
	);
}

// 🧩 Component: Footer
// Simple footer component
function FooterComponent({
	theme,
	enableAnimations,
}: {
	theme: any;
	enableAnimations: boolean;
}) {
	return (
		<footer
			className={`${
				theme.card
			} rounded-lg p-4 text-center shadow-lg ${
				enableAnimations ? "animate-fade-in" : ""
			}`}>
			<p className={`${theme.text} text-sm`}>
				🎉 Great job exploring React components! Ready for the next
				lesson?
			</p>
			<Link
				href="/lessons/props"
				className={`inline-block mt-2 ${theme.accent} hover:underline font-medium`}>
				Continue to Props Lesson →
			</Link>
		</footer>
	);
}
