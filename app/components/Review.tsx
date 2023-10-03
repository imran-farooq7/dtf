const Review = () => {
	return (
		<>
			<div className="pt-6 flex flex-col items-start gap-2">
				<div className="flex gap-10">
					<p className="text-zinc-900 text-base font-semibold">Jonathan Doe</p>
					<div className="flex gap-2">
						<img src="/verified.svg" alt="verifies" />
						<p className="text-zinc-900 text-sm font-medium">Verified</p>
					</div>
				</div>
				<p className="text-neutral-400 text-xs font-normal">8/9/2023</p>
				<img src="/stars.svg" alt="stars" />
				<p className=" text-neutral-400 text-base font-normal pt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante
					dui, porttitor non laoreet id, varius sed tortor. Vestibulum
					malesuada, tellus eget porttitor ultricies, massa tellus pretium quam,
					nec iaculis felis enim eu dui. Sed lacinia purus non diam porttitor
					consequat. Aliquam eu elementum ex.
				</p>
			</div>
			<div className=" h-px border border-gray-200 mt-5" />
		</>
	);
};
export default Review;
