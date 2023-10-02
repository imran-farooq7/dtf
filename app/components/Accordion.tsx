const Accordion = ({ content }: { content: string }) => {
	return (
		<>
			<div className="flex justify-between items-end py-2">
				<p className="text-zinc-900 text-base font-semibold ">{content}</p>
				<img src="/plus.svg" alt="plus" />
			</div>
			<div className=" h-px border border-gray-200"></div>
		</>
	);
};
export default Accordion;
