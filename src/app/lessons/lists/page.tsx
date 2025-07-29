import Link from "next/link";

export default function ListsLesson() {
	// 🎯 EXPERIMENT: Change these arrays and see how the lists update!
	const students = [
		{
			id: 1,
			name: "Alice",
			age: 20,
			grade: "A",
			subject: "Computer Science",
		},
		{
			id: 2,
			name: "Bob",
			age: 22,
			grade: "B",
			subject: "Mathematics",
		},
		{
			id: 3,
			name: "Charlie",
			age: 19,
			grade: "A",
			subject: "Physics",
		},
		{
			id: 4,
			name: "Diana",
			age: 21,
			grade: "C",
			subject: "Computer Science",
		},
		{ id: 5, name: "Eve", age: 23, grade: "A", subject: "Chemistry" },
	]; // Try adding/removing students or changing their info!

	// 🎯 CHANGE THIS: Try different filter criteria
	const minAge = 20; // Try: 18, 21, 25
	const targetGrade: string = "A"; // Try: "B", "C", or "" for all
	const filterSubject: string = "Computer Science"; // Try: "Mathematics", "Physics", "" for all

	// 🎯 EXPERIMENT: Modify these product arrays
	const products = [
		{
			id: 1,
			name: "Laptop",
			price: 999,
			category: "Electronics",
			inStock: true,
			rating: 4.5,
		},
		{
			id: 2,
			name: "Book",
			price: 29,
			category: "Education",
			inStock: true,
			rating: 4.8,
		},
		{
			id: 3,
			name: "Chair",
			price: 199,
			category: "Furniture",
			inStock: false,
			rating: 4.2,
		},
		{
			id: 4,
			name: "Phone",
			price: 699,
			category: "Electronics",
			inStock: true,
			rating: 4.6,
		},
		{
			id: 5,
			name: "Desk",
			price: 299,
			category: "Furniture",
			inStock: true,
			rating: 4.3,
		},
	]; // Try changing prices, stock status, or adding new products!

	// 🎯 CHANGE THIS: Try different budget and category filters
	const maxBudget = 500; // Try: 100, 1000, 50
	const selectedCategory: string = "Electronics"; // Try: "Furniture", "Education", "" for all
	const showOnlyInStock = true; // Try: false

	// 🎯 EXPERIMENT: Modify the todo data
	const todos = [
		{
			id: 1,
			text: "Learn React",
			completed: true,
			priority: "high",
			dueDate: "2024-01-15",
		},
		{
			id: 2,
			text: "Master JavaScript",
			completed: false,
			priority: "high",
			dueDate: "2024-01-20",
		},
		{
			id: 3,
			text: "Build a project",
			completed: false,
			priority: "medium",
			dueDate: "2024-02-01",
		},
		{
			id: 4,
			text: "Read documentation",
			completed: true,
			priority: "low",
			dueDate: "2024-01-10",
		},
		{
			id: 5,
			text: "Practice coding",
			completed: false,
			priority: "high",
			dueDate: "2024-01-25",
		},
	]; // Try changing completion status, priorities, or dates!

	// Filtering logic - This is where the magic happens!
	const filteredStudents = students.filter((student) => {
		const ageMatch = student.age >= minAge;
		const gradeMatch =
			targetGrade === "" || student.grade === targetGrade;
		const subjectMatch =
			filterSubject === "" || student.subject === filterSubject;
		return ageMatch && gradeMatch && subjectMatch;
	});

	const filteredProducts = products.filter((product) => {
		const budgetMatch = product.price <= maxBudget;
		const categoryMatch =
			selectedCategory === "" ||
			product.category === selectedCategory;
		const stockMatch = !showOnlyInStock || product.inStock;
		return budgetMatch && categoryMatch && stockMatch;
	});

	const highPriorityTodos = todos.filter(
		(todo) => todo.priority === "high"
	);
	const completedTodos = todos.filter((todo) => todo.completed);
	const pendingTodos = todos.filter((todo) => !todo.completed);

	// Sorting examples
	const sortedStudentsByAge = [...students].sort(
		(a, b) => b.age - a.age
	);
	const sortedProductsByPrice = [...products].sort(
		(a, b) => a.price - b.price
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-6 py-8">
				{/* Navigation */}
				<nav className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
							Lists & Arrays Tutorial
						</h1>
						<div className="flex gap-4">
							<Link
								href="/lessons/state"
								className="text-emerald-600 hover:underline">
								← Previous: State
							</Link>
							<Link
								href="/"
								className="text-emerald-600 hover:underline">
								Dashboard
							</Link>
							<Link
								href="/lessons/routing"
								className="text-emerald-600 hover:underline">
								Next: Routing →
							</Link>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							📋 Lesson 4: Lists & Dynamic Content
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Learn how to render lists, filter data, and work with
							arrays in React!
						</p>
					</div>

					{/* Current Filter Status */}
					<div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg p-6 mb-8 border border-blue-200 dark:border-blue-700">
						<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🎯 Current Filters (Change the values above to see
							different results!)
						</h2>
						<div className="grid md:grid-cols-3 gap-4 text-sm">
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-white">
									Students:
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Min Age: {minAge}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Grade: {targetGrade || "All"}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Subject: {filterSubject || "All"}
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-white">
									Products:
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Max Budget: ${maxBudget}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Category: {selectedCategory || "All"}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Stock: {showOnlyInStock ? "In Stock Only" : "All"}
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-white">
									Results:
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Students: {filteredStudents.length}/
									{students.length}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									Products: {filteredProducts.length}/
									{products.length}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									High Priority Todos: {highPriorityTodos.length}
								</p>
							</div>
						</div>
					</div>

					{/* Student List Demo */}
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							👥 Student List (.map() + .filter())
						</h2>

						<div className="grid gap-4">
							<div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
								<h3 className="font-bold text-purple-600 dark:text-purple-400 mb-3">
									Filtered Students ({filteredStudents.length}{" "}
									matches)
								</h3>
								{filteredStudents.length > 0 ? (
									<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
										{filteredStudents.map((student) => (
											<div
												key={student.id}
												className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
												<h4 className="font-bold text-gray-900 dark:text-white">
													{student.name}
												</h4>
												<p className="text-gray-600 dark:text-gray-300 text-sm">
													Age: {student.age}
												</p>
												<p className="text-gray-600 dark:text-gray-300 text-sm">
													Grade: {student.grade}
												</p>
												<p className="text-gray-600 dark:text-gray-300 text-sm">
													{student.subject}
												</p>
											</div>
										))}
									</div>
								) : (
									<p className="text-gray-500 dark:text-gray-400">
										No students match your criteria. Try changing the
										filter values above!
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Product Store Demo */}
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							🛍️ Product Store (Complex Filtering)
						</h2>

						<div className="grid gap-4">
							<div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
								<h3 className="font-bold text-green-600 dark:text-green-400 mb-3">
									Available Products ({filteredProducts.length} found)
								</h3>
								{filteredProducts.length > 0 ? (
									<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
										{filteredProducts.map((product) => (
											<div
												key={product.id}
												className={`bg-white dark:bg-gray-700 p-4 rounded-lg border-2 ${
													product.inStock
														? "border-green-200 dark:border-green-600"
														: "border-red-200 dark:border-red-600 opacity-75"
												}`}>
												<div className="flex justify-between items-start mb-2">
													<h4 className="font-bold text-gray-900 dark:text-white">
														{product.name}
													</h4>
													<span
														className={`px-2 py-1 rounded text-xs ${
															product.inStock
																? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
																: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
														}`}>
														{product.inStock
															? "In Stock"
															: "Out of Stock"}
													</span>
												</div>
												<p className="text-2xl font-bold text-gray-900 dark:text-white">
													${product.price}
												</p>
												<p className="text-gray-600 dark:text-gray-300 text-sm">
													{product.category}
												</p>
												<div className="flex items-center mt-2">
													<span className="text-yellow-500">
														{"★".repeat(Math.floor(product.rating))}
													</span>
													<span className="text-gray-300">
														{"★".repeat(
															5 - Math.floor(product.rating)
														)}
													</span>
													<span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
														({product.rating})
													</span>
												</div>
											</div>
										))}
									</div>
								) : (
									<p className="text-gray-500 dark:text-gray-400">
										No products match your criteria. Try increasing
										your budget or changing the category!
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Todo Management Demo */}
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							✅ Todo Management (Multiple Filters)
						</h2>

						<div className="grid md:grid-cols-3 gap-4">
							{/* High Priority Todos */}
							<div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-700">
								<h3 className="font-bold text-red-600 dark:text-red-400 mb-3">
									🔥 High Priority ({highPriorityTodos.length})
								</h3>
								<div className="space-y-2">
									{highPriorityTodos.map((todo) => (
										<div
											key={todo.id}
											className={`p-3 rounded-lg border ${
												todo.completed
													? "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
													: "bg-white dark:bg-gray-800 border-red-200 dark:border-red-600"
											}`}>
											<div className="flex items-center space-x-2">
												<span>{todo.completed ? "✅" : "⏳"}</span>
												<span
													className={`text-sm ${
														todo.completed
															? "line-through text-gray-500 dark:text-gray-400"
															: "text-gray-900 dark:text-white"
													}`}>
													{todo.text}
												</span>
											</div>
											<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
												Due: {todo.dueDate}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* Completed Todos */}
							<div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
								<h3 className="font-bold text-green-600 dark:text-green-400 mb-3">
									✅ Completed ({completedTodos.length})
								</h3>
								<div className="space-y-2">
									{completedTodos.map((todo) => (
										<div
											key={todo.id}
											className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-green-200 dark:border-green-600">
											<div className="flex items-center space-x-2">
												<span>✅</span>
												<span className="text-sm line-through text-gray-500 dark:text-gray-400">
													{todo.text}
												</span>
											</div>
											<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
												Priority: {todo.priority}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* Pending Todos */}
							<div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
								<h3 className="font-bold text-yellow-600 dark:text-yellow-400 mb-3">
									⏳ Pending ({pendingTodos.length})
								</h3>
								<div className="space-y-2">
									{pendingTodos.map((todo) => (
										<div
											key={todo.id}
											className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-yellow-200 dark:border-yellow-600">
											<div className="flex items-center space-x-2">
												<span>⏳</span>
												<span className="text-sm text-gray-900 dark:text-white">
													{todo.text}
												</span>
											</div>
											<div className="flex justify-between items-center mt-1">
												<span
													className={`text-xs px-2 py-1 rounded ${
														todo.priority === "high"
															? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
															: todo.priority === "medium"
															? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
															: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
													}`}>
													{todo.priority}
												</span>
												<span className="text-xs text-gray-500 dark:text-gray-400">
													{todo.dueDate}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Sorting Examples */}
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							🔄 Sorting Examples
						</h2>

						<div className="grid md:grid-cols-2 gap-6">
							{/* Sorted Students */}
							<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
								<h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3">
									Students by Age (Oldest First)
								</h3>
								<div className="space-y-2">
									{sortedStudentsByAge.map((student, index) => (
										<div
											key={student.id}
											className="flex justify-between items-center bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
											<span className="text-gray-900 dark:text-white text-sm">
												{index + 1}. {student.name}
											</span>
											<span className="text-gray-600 dark:text-gray-300 text-sm">
												{student.age} years
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Sorted Products */}
							<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
								<h3 className="font-bold text-purple-600 dark:text-purple-400 mb-3">
									Products by Price (Cheapest First)
								</h3>
								<div className="space-y-2">
									{sortedProductsByPrice.map((product, index) => (
										<div
											key={product.id}
											className="flex justify-between items-center bg-white dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600">
											<span className="text-gray-900 dark:text-white text-sm">
												{index + 1}. {product.name}
											</span>
											<span className="text-gray-600 dark:text-gray-300 text-sm">
												${product.price}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Learning Content */}
					<div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
						{/* What You're Learning */}
						<div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-700">
							<h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4">
								🎯 What You're Seeing
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>Array.map():</strong> Transform each item
									into JSX
								</li>
								<li>
									• <strong>Array.filter():</strong> Show only items
									that match criteria
								</li>
								<li>
									• <strong>Array.sort():</strong> Reorder items by
									specific properties
								</li>
								<li>
									• <strong>Keys:</strong> Each list item needs a
									unique key prop
								</li>
								<li>
									• <strong>Conditional styling:</strong> Different
									styles based on data
								</li>
							</ul>
						</div>

						{/* React Concepts */}
						<div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-700">
							<h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
								⚛️ React List Concepts
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>Dynamic rendering:</strong> Lists update
									when data changes
								</li>
								<li>
									• <strong>Key prop:</strong> Helps React track which
									items changed
								</li>
								<li>
									• <strong>No mutations:</strong> Use filter/map,
									don't modify original arrays
								</li>
								<li>
									• <strong>Performance:</strong> Virtual DOM
									efficiently updates only changed items
								</li>
								<li>
									• <strong>Accessibility:</strong> Proper semantic
									HTML for screen readers
								</li>
							</ul>
						</div>
					</div>

					{/* Code Examples */}
					<div className="mt-8">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							📝 How List Rendering Works
						</h3>

						<div className="space-y-6">
							<CodeExample
								title="1. Basic List Rendering"
								code={`{students.map((student) => (
  <div key={student.id}>
    <h3>{student.name}</h3>
    <p>Age: {student.age}</p>
  </div>
))}`}
								explanation="Use .map() to transform array items into JSX. Always provide a unique key!"
							/>

							<CodeExample
								title="2. Filtering Before Rendering"
								code={`const filteredStudents = students.filter(student => 
  student.age >= ${minAge} && 
  student.grade === "${targetGrade}"
);

{filteredStudents.map(student => ...)}`}
								explanation="Filter arrays first, then render. This creates new arrays without modifying originals."
							/>

							<CodeExample
								title="3. Conditional Styling in Lists"
								code={`<div className={\`p-4 rounded \${
  product.inStock 
    ? "border-green-200 bg-green-50" 
    : "border-red-200 bg-red-50"
}\`}>
  {product.name}
</div>`}
								explanation="Use conditional logic inside map() to style items differently based on their data."
							/>
						</div>
					</div>

					{/* Interactive Challenge */}
					<div className="mt-8 p-6 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border-2 border-dashed border-emerald-300 dark:border-emerald-600">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🚀 Lists Challenge!
						</h3>
						<ol className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
							<li>
								1. Change{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									minAge
								</code>{" "}
								to 21 and see fewer students
							</li>
							<li>
								2. Set{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									maxBudget
								</code>{" "}
								to 100 - watch products disappear!
							</li>
							<li>
								3. Try{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									targetGrade = "B"
								</code>{" "}
								to see different students
							</li>
							<li>
								4. Change{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									selectedCategory
								</code>{" "}
								to "Furniture"
							</li>
							<li>
								5. Set{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									showOnlyInStock = false
								</code>
							</li>
							<li>6. Add a new student or product to the arrays!</li>
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
