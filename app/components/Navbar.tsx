import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const links = [
		{
			href: "/",
			text: "Home",
		},
		{
			href: "/gang",
			text: "Gang Sheet Builder",
		},
		{
			href: "/custom",
			text: "Custom Print/Shipome",
		},
		{
			href: "/delivery",
			text: "Delivery Promise",
		},
		{
			href: "/free",
			text: "Free Sample",
		},
		{
			href: "/faq",
			text: "FAQ",
		},
		{
			href: "/contact",
			text: "Contact Us",
		},
	];
	return (
		<>
			<nav className="flex flex-col items-center justify-between py-6 lg:flex-row">
				<Image src="logo.svg" alt="logo" width={144} height={40} />
				<ul className="flex flex-col gap-2 md:gap-4 md:flex-row lg:gap-9">
					{links.map((link) => (
						<li key={link.text}>
							<Link
								href={link.href}
								className=" text-zinc-900 text-base font-normal font-['Inter']"
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-5">
					<Link href="/cart">
						<Image src="cart.svg" alt="cart" width={20} height={20} />
					</Link>
					<Link href="/signin">
						<Image src="user.svg" alt="user" width={20} height={20} />
					</Link>
				</div>
			</nav>
			<div className="h-px bg-gray-200" />
		</>
	);
};
export default Navbar;
