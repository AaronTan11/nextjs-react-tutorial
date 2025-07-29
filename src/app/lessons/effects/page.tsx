"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function EffectsLesson() {
	// 🎯 EXPERIMENT: Change these initial values and see how effects behave!
	const initialCounter = 0; // Try: 5, 10, 100
	const autoIncrementSpeed = 1000; // Try: 500, 2000, 5000 (milliseconds)
	const enableAutoIncrement = true; // Try: false

	// 🎯 CHANGE THIS: Try different API simulation settings
	const apiDelay = 2000; // Try: 1000, 3000, 5000 (milliseconds)
	const shouldFetchOnLoad = true; // Try: false
	const maxFetchAttempts = 3; // Try: 1, 5, 10

	// 🎯 EXPERIMENT: Modify window tracking settings
	const trackWindowSize = true; // Try: false
	const trackMousePosition = true; // Try: false
	const enableKeyboardTracking = true; // Try: false

	// 🎯 CHANGE THIS: Document title settings
	const updateDocumentTitle = true; // Try: false
	const titlePrefix = "React Tutorial"; // Try: "Learning", "My App"

	// State for various demos
	const [counter, setCounter] = useState(initialCounter);
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [keyPressed, setKeyPressed] = useState("");
	const [fetchStatus, setFetchStatus] = useState("idle"); // idle, loading, success, error
	const [userData, setUserData] = useState<any>(null);
	const [fetchAttempts, setFetchAttempts] = useState(0);
	const [effectLogs, setEffectLogs] = useState<string[]>([]);

	// Helper function to add logs
	const addLog = (message: string) => {
		const timestamp = new Date().toLocaleTimeString();
		setEffectLogs((prev) =>
			[...prev, `${timestamp}: ${message}`].slice(-10)
		); // Keep last 10 logs
	};

	// 🧩 EFFECT 1: Component Mount/Unmount (runs once)
	useEffect(() => {
		addLog(
			"🚀 Component mounted - useEffect with no dependencies ran!"
		);

		return () => {
			addLog("💥 Component unmounting - cleanup function ran!");
		};
	}, []); // Empty dependency array = runs once on mount

	// 🧩 EFFECT 2: Auto-increment counter (with cleanup)
	useEffect(() => {
		if (!enableAutoIncrement) {
			addLog("⏸️ Auto-increment disabled");
			return;
		}

		addLog(
			`⏰ Setting up auto-increment timer (${autoIncrementSpeed}ms)`
		);

		const timer = setInterval(() => {
			setCounter((prev) => {
				const newValue = prev + 1;
				addLog(`🔢 Counter auto-incremented to ${newValue}`);
				return newValue;
			});
		}, autoIncrementSpeed);

		// Cleanup function - VERY IMPORTANT!
		return () => {
			addLog("🧹 Cleaning up auto-increment timer");
			clearInterval(timer);
		};
	}, [enableAutoIncrement, autoIncrementSpeed]); // Runs when these dependencies change

	// 🧩 EFFECT 3: Update document title based on counter
	useEffect(() => {
		if (!updateDocumentTitle) return;

		const newTitle = `${titlePrefix} - Counter: ${counter}`;
		document.title = newTitle;
		addLog(`📄 Document title updated: "${newTitle}"`);

		// Cleanup: reset title when component unmounts
		return () => {
			document.title = "React Tutorial";
		};
	}, [counter, updateDocumentTitle, titlePrefix]); // Runs when counter, updateDocumentTitle, or titlePrefix changes

	// 🧩 EFFECT 4: Window resize tracking
	useEffect(() => {
		if (!trackWindowSize) {
			addLog("📐 Window size tracking disabled");
			return;
		}

		const handleResize = () => {
			const newSize = {
				width: window.innerWidth,
				height: window.innerHeight,
			};
			setWindowSize(newSize);
			addLog(`📐 Window resized: ${newSize.width}x${newSize.height}`);
		};

		// Set initial size
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);
		addLog("📐 Window resize listener added");

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
			addLog("📐 Window resize listener removed");
		};
	}, [trackWindowSize]);

	// 🧩 EFFECT 5: Mouse position tracking
	useEffect(() => {
		if (!trackMousePosition) {
			addLog("🖱️ Mouse tracking disabled");
			return;
		}

		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		addLog("🖱️ Mouse movement listener added");

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			addLog("🖱️ Mouse movement listener removed");
		};
	}, [trackMousePosition]);

	// 🧩 EFFECT 6: Keyboard tracking
	useEffect(() => {
		if (!enableKeyboardTracking) {
			addLog("⌨️ Keyboard tracking disabled");
			return;
		}

		const handleKeyPress = (e: KeyboardEvent) => {
			setKeyPressed(e.key);
			addLog(`⌨️ Key pressed: "${e.key}"`);
		};

		window.addEventListener("keydown", handleKeyPress);
		addLog("⌨️ Keyboard listener added");

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			addLog("⌨️ Keyboard listener removed");
		};
	}, [enableKeyboardTracking]);

	// 🧩 EFFECT 7: Simulated API call with retry logic
	useEffect(() => {
		if (!shouldFetchOnLoad) {
			addLog("📡 Auto-fetch disabled");
			return;
		}

		if (fetchAttempts >= maxFetchAttempts) {
			addLog(`❌ Max fetch attempts (${maxFetchAttempts}) reached`);
			return;
		}

		const fetchData = async () => {
			const attemptNumber = fetchAttempts + 1;
			setFetchStatus("loading");
			addLog(
				`📡 Starting fetch attempt ${attemptNumber}/${maxFetchAttempts}`
			);

			try {
				// Simulate API call
				await new Promise((resolve) => setTimeout(resolve, apiDelay));

				// Simulate random success/failure (70% success rate)
				if (Math.random() > 0.3) {
					const fakeUser = {
						id: attemptNumber,
						name: `User ${attemptNumber}`,
						email: `user${attemptNumber}@example.com`,
						timestamp: new Date().toISOString(),
					};

					setUserData(fakeUser);
					setFetchStatus("success");
					addLog(`✅ Fetch successful! Got user: ${fakeUser.name}`);
				} else {
					throw new Error("Random API failure simulation");
				}
			} catch (error) {
				setFetchStatus("error");
				setFetchAttempts((prev) => prev + 1);
				addLog(
					`❌ Fetch failed (attempt ${attemptNumber}): ${
						(error as Error).message
					}`
				);
			}
		};

		fetchData();
	}, [shouldFetchOnLoad, fetchAttempts, maxFetchAttempts, apiDelay]);

	// Manual retry function
	const retryFetch = () => {
		setFetchAttempts(0);
		setFetchStatus("idle");
		setUserData(null);
		addLog("🔄 Manual retry initiated");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-6 py-8">
				{/* Navigation */}
				<nav className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
							useEffect Tutorial
						</h1>
						<div className="flex gap-4">
							<Link
								href="/lessons/lists"
								className="text-violet-600 hover:underline">
								← Previous: Lists
							</Link>
							<Link
								href="/"
								className="text-violet-600 hover:underline">
								Dashboard
							</Link>
							<Link
								href="/lessons/routing"
								className="text-violet-600 hover:underline">
								Next: Routing →
							</Link>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							⚡ Lesson 5: useEffect & Side Effects
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Learn how useEffect manages side effects, event
							listeners, timers, and API calls!
						</p>
					</div>

					{/* Current Settings Display */}
					<div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-6 mb-8 border border-blue-200 dark:border-blue-700">
						<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🎯 Current Effect Settings (Change these above!)
						</h2>
						<div className="grid md:grid-cols-3 gap-4 text-sm">
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-white">
									Timer Effects:
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Auto-increment: {enableAutoIncrement ? "ON" : "OFF"}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Speed: {autoIncrementSpeed}ms
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Initial Counter: {initialCounter}
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-white">
									Event Tracking:
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Window Size: {trackWindowSize ? "ON" : "OFF"}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Mouse Position: {trackMousePosition ? "ON" : "OFF"}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Keyboard: {enableKeyboardTracking ? "ON" : "OFF"}
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-white">
									API Effects:
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Auto-fetch: {shouldFetchOnLoad ? "ON" : "OFF"}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									API Delay: {apiDelay}ms
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Max Attempts: {maxFetchAttempts}
								</p>
							</div>
						</div>
					</div>

					{/* Live Effects Dashboard */}
					<div className="grid lg:grid-cols-2 gap-8 mb-8">
						{/* Counter & Timer Demo */}
						<div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
							<h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
								⏱️ Timer Effects
							</h3>

							<div className="text-center mb-4">
								<div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
									{counter}
								</div>
								<p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
									Started at: {initialCounter} | Auto-increment:{" "}
									{enableAutoIncrement
										? `${autoIncrementSpeed}ms`
										: "OFF"}
								</p>

								<div className="flex justify-center gap-3">
									<button
										onClick={() => setCounter(counter + 1)}
										className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
										+1 Manual
									</button>
									<button
										onClick={() => setCounter(initialCounter)}
										className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
										Reset
									</button>
								</div>
							</div>
						</div>

						{/* Event Tracking Demo */}
						<div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
							<h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
								🖱️ Event Tracking
							</h3>

							<div className="space-y-3 text-sm">
								{trackWindowSize && (
									<div className="bg-white dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
										<span className="font-medium text-gray-900 dark:text-white">
											Window Size:
										</span>
										<span className="ml-2 text-gray-600 dark:text-gray-300">
											{windowSize.width} × {windowSize.height}
										</span>
									</div>
								)}

								{trackMousePosition && (
									<div className="bg-white dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
										<span className="font-medium text-gray-900 dark:text-white">
											Mouse Position:
										</span>
										<span className="ml-2 text-gray-600 dark:text-gray-300">
											X: {mousePosition.x}, Y: {mousePosition.y}
										</span>
									</div>
								)}

								{enableKeyboardTracking && (
									<div className="bg-white dark:bg-gray-700 p-3 rounded border border-gray-200 dark:border-gray-600">
										<span className="font-medium text-gray-900 dark:text-white">
											Last Key:
										</span>
										<span className="ml-2 text-gray-600 dark:text-gray-300 font-mono">
											{keyPressed || "None"}
										</span>
									</div>
								)}

								{!trackWindowSize &&
									!trackMousePosition &&
									!enableKeyboardTracking && (
										<p className="text-gray-500 dark:text-gray-400 text-center py-4">
											All event tracking is disabled. Try enabling
											them above!
										</p>
									)}
							</div>
						</div>
					</div>

					{/* API Demo */}
					<div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 mb-8 border border-orange-200 dark:border-orange-700">
						<h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
							📡 API Effects & Data Fetching
						</h3>

						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<div
									className={`p-4 rounded-lg border-2 ${
										fetchStatus === "loading"
											? "border-blue-300 bg-blue-50 dark:bg-blue-900/20"
											: fetchStatus === "success"
											? "border-green-300 bg-green-50 dark:bg-green-900/20"
											: fetchStatus === "error"
											? "border-red-300 bg-red-50 dark:bg-red-900/20"
											: "border-gray-300 bg-gray-50 dark:bg-gray-900/20"
									}`}>
									<h4 className="font-bold text-gray-900 dark:text-white mb-2">
										API Status:{" "}
										<span className="capitalize">{fetchStatus}</span>
									</h4>

									{fetchStatus === "loading" && (
										<div className="flex items-center space-x-2">
											<div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
											<span className="text-blue-600 dark:text-blue-400">
												Loading data...
											</span>
										</div>
									)}

									{fetchStatus === "success" && userData && (
										<div className="text-green-600 dark:text-green-400">
											<p>
												✅ Success! User: {(userData as any).name}
											</p>
											<p className="text-sm">
												Email: {(userData as any).email}
											</p>
										</div>
									)}

									{fetchStatus === "error" && (
										<div className="text-red-600 dark:text-red-400">
											<p>❌ Failed after {fetchAttempts} attempts</p>
											{fetchAttempts >= maxFetchAttempts && (
												<button
													onClick={retryFetch}
													className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
													Retry from Start
												</button>
											)}
										</div>
									)}

									{fetchStatus === "idle" && (
										<p className="text-gray-600 dark:text-gray-300">
											No fetch initiated
										</p>
									)}
								</div>
							</div>

							<div>
								<h4 className="font-bold text-gray-900 dark:text-white mb-2">
									Fetch Settings:
								</h4>
								<div className="space-y-2 text-sm">
									<p className="text-gray-600 dark:text-gray-300">
										Auto-fetch: {shouldFetchOnLoad ? "ON" : "OFF"}
									</p>
									<p className="text-gray-600 dark:text-gray-300">
										Delay: {apiDelay}ms
									</p>
									<p className="text-gray-600 dark:text-gray-300">
										Attempts: {fetchAttempts}/{maxFetchAttempts}
									</p>
									<p className="text-gray-600 dark:text-gray-300">
										Success Rate: ~70%
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Effect Logs */}
					<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-600">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							📋 Effect Logs (Last 10 activities)
						</h3>

						<div className="bg-black rounded-lg p-4 font-mono text-sm max-h-64 overflow-y-auto">
							{effectLogs.length > 0 ? (
								effectLogs.map((log, index) => (
									<div
										key={index}
										className="text-green-400 mb-1">
										{log}
									</div>
								))
							) : (
								<div className="text-gray-500">
									No effect logs yet...
								</div>
							)}
						</div>

						<button
							onClick={() => setEffectLogs([])}
							className="mt-3 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm">
							Clear Logs
						</button>
					</div>

					{/* Learning Content */}
					<div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
						{/* Effect Concepts */}
						<div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-700">
							<h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
								🎯 What You're Experiencing
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>Mount effects:</strong> Run once when
									component loads
								</li>
								<li>
									• <strong>Dependency effects:</strong> Re-run when
									values change
								</li>
								<li>
									• <strong>Cleanup:</strong> Remove timers and event
									listeners
								</li>
								<li>
									• <strong>Event listeners:</strong> React to user
									interactions
								</li>
								<li>
									• <strong>API calls:</strong> Fetch data with
									loading states
								</li>
							</ul>
						</div>

						{/* useEffect Patterns */}
						<div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6 border border-violet-200 dark:border-violet-700">
							<h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 mb-4">
								⚛️ useEffect Patterns
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>No deps []:</strong> Runs once on mount
								</li>
								<li>
									• <strong>With deps [value]:</strong> Runs when
									value changes
								</li>
								<li>
									• <strong>No deps array:</strong> Runs on every
									render
								</li>
								<li>
									• <strong>Cleanup function:</strong> Prevents memory
									leaks
								</li>
								<li>
									• <strong>Conditional effects:</strong> Early
									returns to skip effects
								</li>
							</ul>
						</div>
					</div>

					{/* Code Examples */}
					<div className="mt-8">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							📝 useEffect Code Patterns
						</h3>

						<div className="space-y-6">
							<CodeExample
								title="1. Effect with Cleanup (Timer)"
								code={`useEffect(() => {
  const timer = setInterval(() => {
    setCounter(prev => prev + 1);
  }, ${autoIncrementSpeed});

  // Cleanup function - VERY IMPORTANT!
  return () => {
    clearInterval(timer);
  };
}, [${autoIncrementSpeed}]); // Re-run when speed changes`}
								explanation="Always clean up timers, intervals, and subscriptions to prevent memory leaks."
							/>

							<CodeExample
								title="2. Event Listener Pattern"
								code={`useEffect(() => {
  if (!${trackMousePosition}) return; // Early return
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, [${trackMousePosition}]);`}
								explanation="Add event listeners in useEffect and remove them in cleanup function."
							/>

							<CodeExample
								title="3. API Call with Dependencies"
								code={`useEffect(() => {
  if (!shouldFetchData) return;
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, [shouldFetchData, apiUrl]); // Re-fetch when these change`}
								explanation="Use async functions inside useEffect for API calls. Handle loading and error states."
							/>
						</div>
					</div>

					{/* Interactive Challenge */}
					<div className="mt-8 p-6 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg border-2 border-dashed border-violet-300 dark:border-violet-600">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🚀 useEffect Challenge!
						</h3>
						<ol className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
							<li>
								1. Set{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									enableAutoIncrement = false
								</code>{" "}
								- watch timer stop!
							</li>
							<li>
								2. Change{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									autoIncrementSpeed
								</code>{" "}
								to 500ms - see faster counting
							</li>
							<li>
								3. Disable{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									trackMousePosition
								</code>{" "}
								and move your mouse
							</li>
							<li>
								4. Set{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									apiDelay
								</code>{" "}
								to 5000ms - watch the loading take longer
							</li>
							<li>
								5. Try{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									maxFetchAttempts = 1
								</code>{" "}
								to see fewer retries
							</li>
							<li>
								6. Watch the effect logs to see when cleanup functions
								run!
							</li>
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
