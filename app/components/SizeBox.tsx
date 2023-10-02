const SizeBox = ({ text }: { text: string }) => {
	return (
		<div className="w-40 rounded-lg border border-gray-200 text-center py-2 px-3">
			<p className="text-neutral-400 text-sm font-normal ">{text}</p>
		</div>
	);
};
export default SizeBox;
