import Image from "next/image";
import SizeBox from "./SizeBox";
import Button from "./Button";
import Link from "next/link";
import Accordion from "./Accordion";

const Product = () => {
	return (
		<div className="flex flex-col md:flex-row py-14 gap-8">
			<div>
				<Image
					src="/product.png"
					alt="product"
					width={691}
					height={900}
					className="pb-4 w-full"
				/>
				<div className="flex gap-4 overflow-x-auto">
					<Image src="/glass.png" alt="glass" width={125} height={127} />
					<Image
						src="/glass.png"
						alt="glass"
						width={125}
						className="opacity-20"
						height={127}
					/>
					<Image
						src="/glass.png"
						alt="glass"
						width={125}
						className="opacity-20"
						height={127}
					/>
					<Image
						src="/glass.png"
						alt="glass"
						width={125}
						className="opacity-20"
						height={127}
					/>
					<Image
						src="/glass.png"
						alt="glass"
						width={125}
						className="opacity-20"
						height={127}
					/>
				</div>
			</div>
			<div>
				<p className="text-neutral-400 font-medium">
					Home / Collections / Ninja Gang Sheet Builder
				</p>
				<h2 className="text-zinc-900 text-4xl font-bold pt-5">
					Product Name 1
				</h2>
				<div className="flex gap-3 items-center pt-4">
					<Image src="/stars.png" alt="stars" width={96} height={16} />
					<p className="text-center text-zinc-900 text-base font-normal leading-relaxed">
						(174)
					</p>
				</div>
				<div>
					<p className="text-zinc-900 text-xl font-semibold pt-4">
						From $37.99
					</p>
					<p className="text-neutral-400 text-base font-medium pt-3.5">
						Free U.S. Shipping on Orders Over $99
					</p>
				</div>
				<div className="mb-11">
					<p className="text-zinc-900 text-base font-medium pt-5">
						Select a gang sheet size:
					</p>
					<div className="flex flex-wrap gap-2.5 pt-3.5">
						<SizeBox text="22” x 24” (2 Feet)" />
						<SizeBox text="22” x 24” (2 Feet)" />
						<SizeBox text="22” x 24” (2 Feet)" />
						<SizeBox text="22” x 24” (2 Feet)" />
						<SizeBox text="22” x 24” (2 Feet)" />
					</div>
				</div>
				<div>
					<Button />
					<div className="pt-4">
						<span className="text-neutral-400 text-base font-medium">
							4 interest-free installments, or from
						</span>
						<span className="text-zinc-900 text-base font-medium px-1">
							$15.34/mo
						</span>
						<span className="text-neutral-400 text-base font-medium">with</span>
						<img
							src="/shop pay.png"
							alt="shop pay"
							className="inline-block px-2"
						/>
						<Link
							href="/plans"
							className="text-neutral-400 text-base font-medium underline"
						>
							View sample plans
						</Link>
					</div>
				</div>
				<div className="pt-5">
					<Accordion content="Product Details" />
					<Accordion content="Product Details" />
					<Accordion content="Product Details" />
					<Accordion content="Product Details" />
					<Accordion content="Product Details" />
				</div>
			</div>
		</div>
	);
};
export default Product;
