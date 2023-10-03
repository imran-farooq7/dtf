import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-stone-200 py-12 ">
			<div className="mx-auto max-w-7xl container flex flex-col items-center lg:flex-row lg:items-start justify-between">
				<div className="space-y-4">
					<img src="Logo.svg" alt="logo" />
					<p className=" text-zinc-900 text-sm font-normal leading-relaxed max-w-xs">
						The first print customizer that has been designed with your business
						need in mind.
					</p>
				</div>
				<div className="mt-4">
					<ul className="flex flex-col gap-2 ">
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								DTF Transfers
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								DTF Gang Sheet Builder
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Free Sample Pack
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								How They're Made
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								How to Press
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Supplies
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Custom Transfers{" "}
							</Link>
						</li>
					</ul>
				</div>
				<div className="mt-4">
					<ul className="flex flex-col gap-2 ">
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								DTF Transfers
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								DTF Gang Sheet Builder
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Free Sample Pack
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								How They're Made
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								How to Press
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Supplies
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Custom Transfers{" "}
							</Link>
						</li>
					</ul>
				</div>
				<div className="mt-4">
					<ul className="flex flex-col gap-2 ">
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								DTF Transfers
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								DTF Gang Sheet Builder
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Free Sample Pack
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								How They're Made
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								How to Press
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Supplies
							</Link>
						</li>
						<li>
							<Link href="/" className=" text-zinc-900 text-base font-normal">
								Custom Transfers{" "}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
