import Link from "next/link";

const PromoNav = () => {
	return (
		<div className="h-7 bg-red-500">
			<div className="text-center">
				<span className="text-white text-sm font-medium font-['Inter']">
					Sign up and{" "}
				</span>
				<span className="text-white text-sm font-bold font-['Inter']">
					GET 20 % OFF
				</span>
				<span className="text-white text-sm font-medium font-['Inter']">
					{" "}
					for your first order.
				</span>
				<Link
					href="/signup"
					className="text-center text-white text-sm font-bold font-['Inter'] underline pl-1"
				>
					Sign up now
				</Link>
			</div>
		</div>
	);
};
export default PromoNav;
