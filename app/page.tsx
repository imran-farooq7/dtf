import Product from "./components/Product";
import Review from "./components/Review";
import ReviewsSummary from "./components/ReviewsSummary";

export default function Home() {
	return (
		<>
			<Product />
			<ReviewsSummary />
			<Review />
			<Review />
			<Review />
			<Review />
		</>
	);
}
