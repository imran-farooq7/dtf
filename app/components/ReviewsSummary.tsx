const ReviewsSummary = () => {
	return (
		<div className="flex justify-between pt-20 mb-20">
			<div className="flex flex-col sm:flex-row gap-10">
				<div className="space-y-2">
					<div className="flex items-center gap-4">
						<img src="/star.svg" alt="star" width="20px" />
						<p className="text-zinc-900 text-3xl font-normal ">4.8</p>
					</div>
					<p className="text-zinc-900 text-base font-normal">174 Reviews</p>
				</div>
				<div>
					<div className="flex items-center gap-4">
						<img src="/stars.svg" alt="star" />
						<img src="/progress 1.svg" alt="progress" />
						<div className="text-zinc-900 text-base font-normal leading-relaxed">
							(156)
						</div>
					</div>
					<div className="flex items-center gap-4">
						<img src="/stars.svg" alt="star" />
						<img src="/progress 1.svg" alt="progress" />
						<div className="text-zinc-900 text-base font-normal leading-relaxed">
							(156)
						</div>
					</div>
					<div className="flex items-center gap-4">
						<img src="/stars.svg" alt="star" />
						<img src="/progress 1.svg" alt="progress" />
						<div className="text-zinc-900 text-base font-normal leading-relaxed">
							(156)
						</div>
					</div>
					<div className="flex items-center gap-4">
						<img src="/stars.svg" alt="star" />
						<img src="/progress 1.svg" alt="progress" />
						<div className="text-zinc-900 text-base font-normal leading-relaxed">
							(156)
						</div>
					</div>
					<div className="flex items-center gap-4">
						<img src="/stars.svg" alt="star" />
						<img src="/progress 1.svg" alt="progress" />
						<div className="text-zinc-900 text-base font-normal leading-relaxed">
							(156)
						</div>
					</div>
				</div>
			</div>
			<img
				src="/filter.svg"
				alt="filter"
				className="hidden sm:block self-start"
			/>
		</div>
	);
};
export default ReviewsSummary;
