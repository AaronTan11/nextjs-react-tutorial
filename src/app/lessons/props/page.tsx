import Link from "next/link";

export default function PropsLesson() {
	// 🎯 EXPERIMENT: Change these props and see how they flow to child components!
	const productName = "iPhone 15 Pro"; // Try: "MacBook Air", "AirPods Pro", "Apple Watch"
	const productPrice = 999; // Try: 1299, 199, 399
	const productRating = 4.8; // Try: 3.5, 5.0, 4.2
	const productInStock = true; // Try: false
	const productImage = "📱"; // Try: "💻", "🎧", "⌚"

	// 🎯 CHANGE THIS: Try different user preferences
	const userAge = 25; // Try: 16, 35, 65
	const userBudget = 1500; // Try: 500, 2000, 300
	const userName = "Sarah"; // Try your name!
	const userLocation = "New York"; // Try: "Tokyo", "London", "Paris"

	// 🎯 EXPERIMENT: Modify display settings
	const showDiscount = true; // Try: false
	const discountPercent = 15; // Try: 10, 25, 50
	const showReviews = true; // Try: false
	const showRecommendations = true; // Try: false

	// Calculate values based on props
	const discountedPrice = showDiscount
		? productPrice * (1 - discountPercent / 100)
		: productPrice;
	const canAfford = userBudget >= productPrice;
	const ageGroup =
		userAge < 18
			? "Teen"
			: userAge < 35
			? "Young Adult"
			: userAge < 55
			? "Adult"
			: "Senior";

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-6 py-8">
				{/* Navigation */}
				<nav className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
							Props Tutorial
						</h1>
						<div className="flex gap-4">
							<Link
								href="/lessons/components"
								className="text-purple-600 hover:underline">
								← Previous: Components
							</Link>
							<Link
								href="/"
								className="text-purple-600 hover:underline">
								Dashboard
							</Link>
							<Link
								href="/lessons/state"
								className="text-purple-600 hover:underline">
								Next: State →
							</Link>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							🔄 Lesson 2: Props & Data Flow
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Learn how data flows from parent to child components
							through props!
						</p>
					</div>

					{/* Props Demo: Product Store */}
					<div className="grid lg:grid-cols-2 gap-8 mb-8">
						{/* Product Card - Receives many props */}
						<ProductCard
							name={productName}
							price={productPrice}
							discountedPrice={discountedPrice}
							rating={productRating}
							inStock={productInStock}
							image={productImage}
							showDiscount={showDiscount}
							discountPercent={discountPercent}
						/>

						{/* User Profile - Shows different prop types */}
						<UserProfile
							name={userName}
							age={userAge}
							budget={userBudget}
							location={userLocation}
							canAfford={canAfford}
							ageGroup={ageGroup}
						/>
					</div>

					{/* Reviews Section - Conditional props */}
					{showReviews && (
						<ReviewsSection
							productName={productName}
							rating={productRating}
							userName={userName}
							userAge={userAge}
						/>
					)}

					{/* Recommendations - Props with calculations */}
					{showRecommendations && (
						<RecommendationsSection
							userBudget={userBudget}
							userAge={userAge}
							currentPrice={discountedPrice}
							ageGroup={ageGroup}
						/>
					)}

					{/* Learning Content */}
					<div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
						{/* Props Explanation */}
						<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
							<h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
								🎯 What You're Changing
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>Product props:</strong> name, price,
									rating, stock status
								</li>
								<li>
									• <strong>User props:</strong> name, age, budget,
									location
								</li>
								<li>
									• <strong>Display props:</strong> showDiscount,
									showReviews
								</li>
								<li>
									• <strong>Calculated props:</strong>{" "}
									discountedPrice, canAfford
								</li>
								<li>
									• <strong>Conditional rendering:</strong> Components
									appear based on props
								</li>
							</ul>
						</div>

						{/* React Concepts */}
						<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
							<h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
								⚛️ Props Concepts
							</h3>
							<ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
								<li>
									• <strong>Props:</strong> Data passed from parent to
									child
								</li>
								<li>
									• <strong>One-way flow:</strong> Data flows down the
									component tree
								</li>
								<li>
									• <strong>Immutable:</strong> Child components can't
									change props
								</li>
								<li>
									• <strong>TypeScript:</strong> Props have defined
									types
								</li>
								<li>
									• <strong>Destructuring:</strong> Extract props in
									function parameters
								</li>
							</ul>
						</div>
					</div>

					{/* Code Examples */}
					<div className="mt-8">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							📝 How Props Work in Code
						</h3>

						<div className="space-y-6">
							<CodeBlock
								title="1. Passing Props to Components"
								code={`<ProductCard 
  name="${productName}"
  price={${productPrice}}
  rating={${productRating}}
  inStock={${productInStock}}
/>`}
								explanation="Parent component passes data as props to child components"
							/>

							<CodeBlock
								title="2. Receiving Props in Component"
								code={`function ProductCard({ name, price, rating, inStock }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>$\{price}</p>
      <p>Rating: {rating}/5</p>
      {inStock ? "In Stock" : "Out of Stock"}
    </div>
  );
}`}
								explanation="Child component receives props and uses them in JSX"
							/>

							<CodeBlock
								title="3. TypeScript Props Interface"
								code={`interface ProductProps {
  name: string;
  price: number;
  rating: number;
  inStock: boolean;
}`}
								explanation="TypeScript defines the shape and types of props"
							/>
						</div>
					</div>

					{/* Interactive Challenge */}
					<div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-600">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
							🚀 Props Challenge!
						</h3>
						<ol className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
							<li>
								1. Change the{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									productPrice
								</code>{" "}
								and watch the affordability change
							</li>
							<li>
								2. Toggle{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									productInStock
								</code>{" "}
								to false
							</li>
							<li>
								3. Modify{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									userBudget
								</code>{" "}
								to see different recommendations
							</li>
							<li>
								4. Change{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									userAge
								</code>{" "}
								and see how age group affects content
							</li>
							<li>5. Try different discount percentages</li>
							<li>
								6. Turn off{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									showReviews
								</code>{" "}
								or{" "}
								<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
									showRecommendations
								</code>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

// 🧩 Component: Product Card
// Shows how multiple props work together
function ProductCard({
	name,
	price,
	discountedPrice,
	rating,
	inStock,
	image,
	showDiscount,
	discountPercent,
}: {
	name: string;
	price: number;
	discountedPrice: number;
	rating: number;
	inStock: boolean;
	image: string;
	showDiscount: boolean;
	discountPercent: number;
}) {
	return (
		<div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
			<div className="text-center mb-4">
				<div className="text-6xl mb-2">{image}</div>
				<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
					{name}
				</h3>
			</div>

			<div className="space-y-3">
				{/* Price Display */}
				<div className="text-center">
					{showDiscount ? (
						<div>
							<span className="text-2xl font-bold text-green-600">
								${discountedPrice.toFixed(2)}
							</span>
							<span className="text-lg text-gray-500 line-through ml-2">
								${price}
							</span>
							<div className="text-sm text-green-600 font-medium">
								Save {discountPercent}%!
							</div>
						</div>
					) : (
						<span className="text-2xl font-bold text-gray-900 dark:text-white">
							${price}
						</span>
					)}
				</div>

				{/* Rating */}
				<div className="flex justify-center items-center">
					<span className="text-yellow-500">
						{"★".repeat(Math.floor(rating))}
					</span>
					<span className="text-gray-300">
						{"★".repeat(5 - Math.floor(rating))}
					</span>
					<span className="ml-2 text-gray-600 dark:text-gray-400">
						({rating})
					</span>
				</div>

				{/* Stock Status */}
				<div
					className={`text-center py-2 px-4 rounded-lg ${
						inStock
							? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
							: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
					}`}>
					{inStock ? "✅ In Stock" : "❌ Out of Stock"}
				</div>
			</div>
		</div>
	);
}

// 🧩 Component: User Profile
// Demonstrates different prop types and calculations
function UserProfile({
	name,
	age,
	budget,
	location,
	canAfford,
	ageGroup,
}: {
	name: string;
	age: number;
	budget: number;
	location: string;
	canAfford: boolean;
	ageGroup: string;
}) {
	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 shadow-lg border border-blue-200 dark:border-blue-700">
			<h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
				👤 User Profile
			</h3>

			<div className="space-y-3">
				<div className="flex justify-between">
					<span className="text-gray-600 dark:text-gray-400">
						Name:
					</span>
					<span className="font-medium text-gray-900 dark:text-white">
						{name}
					</span>
				</div>

				<div className="flex justify-between">
					<span className="text-gray-600 dark:text-gray-400">
						Age:
					</span>
					<span className="font-medium text-gray-900 dark:text-white">
						{age} ({ageGroup})
					</span>
				</div>

				<div className="flex justify-between">
					<span className="text-gray-600 dark:text-gray-400">
						Budget:
					</span>
					<span className="font-medium text-gray-900 dark:text-white">
						${budget}
					</span>
				</div>

				<div className="flex justify-between">
					<span className="text-gray-600 dark:text-gray-400">
						Location:
					</span>
					<span className="font-medium text-gray-900 dark:text-white">
						{location}
					</span>
				</div>

				<div
					className={`mt-4 p-3 rounded-lg text-center ${
						canAfford
							? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
							: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
					}`}>
					{canAfford
						? "💰 Can afford this product!"
						: "💸 Outside budget range"}
				</div>
			</div>
		</div>
	);
}

// 🧩 Component: Reviews Section
// Shows conditional rendering with props
function ReviewsSection({
	productName,
	rating,
	userName,
	userAge,
}: {
	productName: string;
	rating: number;
	userName: string;
	userAge: number;
}) {
	return (
		<div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
			<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
				⭐ Reviews for {productName}
			</h3>

			<div className="space-y-4">
				<div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
					<div className="flex justify-between items-center mb-2">
						<span className="font-medium text-gray-900 dark:text-white">
							TechReviewer99
						</span>
						<span className="text-yellow-500">{"★".repeat(5)}</span>
					</div>
					<p className="text-gray-600 dark:text-gray-300 text-sm">
						Amazing product! Perfect for{" "}
						{userAge < 25
							? "students"
							: userAge < 40
							? "professionals"
							: "experienced users"}
						.
					</p>
				</div>

				<div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
					<div className="flex justify-between items-center mb-2">
						<span className="font-medium text-gray-900 dark:text-white">
							{userName}_Review
						</span>
						<span className="text-yellow-500">
							{"★".repeat(Math.floor(rating))}
						</span>
					</div>
					<p className="text-gray-600 dark:text-gray-300 text-sm">
						Great value for money. Rating: {rating}/5. Highly
						recommend!
					</p>
				</div>
			</div>
		</div>
	);
}

// 🧩 Component: Recommendations
// Uses props for dynamic recommendations
function RecommendationsSection({
	userBudget,
	userAge,
	currentPrice,
	ageGroup,
}: {
	userBudget: number;
	userAge: number;
	currentPrice: number;
	ageGroup: string;
}) {
	const recommendations = [
		{
			name: "Budget Option",
			price: Math.round(currentPrice * 0.7),
			suitable: true,
		},
		{
			name: "Premium Choice",
			price: Math.round(currentPrice * 1.3),
			suitable: userBudget > currentPrice * 1.2,
		},
		{
			name: `${ageGroup} Special`,
			price: Math.round(currentPrice * 0.9),
			suitable: true,
		},
	];

	return (
		<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
			<h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
				🎯 Recommendations for {ageGroup}s (Budget: ${userBudget})
			</h3>

			<div className="grid md:grid-cols-3 gap-4">
				{recommendations.map((item, index) => (
					<div
						key={index}
						className={`p-4 rounded-lg border-2 ${
							item.suitable
								? "bg-white border-green-200 dark:bg-gray-800 dark:border-green-600"
								: "bg-gray-100 border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-50"
						}`}>
						<h4 className="font-bold text-gray-900 dark:text-white">
							{item.name}
						</h4>
						<p className="text-lg font-medium text-gray-700 dark:text-gray-300">
							${item.price}
						</p>
						<p
							className={`text-sm ${
								item.suitable
									? "text-green-600 dark:text-green-400"
									: "text-red-600 dark:text-red-400"
							}`}>
							{item.suitable ? "✅ Within budget" : "❌ Over budget"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

// 🧩 Component: Code Block
// Reusable component for showing code examples
function CodeBlock({
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
