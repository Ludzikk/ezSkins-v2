import LastDropItem from "./LastDropItem";

export default function LastDrops({ lastDropsData }) {
	const lastDropDataArray = Object.entries(lastDropsData).map(
		([id, details]) => ({
			id: parseInt(id),
			...details,
		})
	);
	const lastDropItemEl = lastDropDataArray.map((item) => {
		return <LastDropItem key={item.id} data={item} />;
	});

	return (
		<div className="relative bg-tileBg rounded-xl w-full h-[160px] px-2 flex items-center overflow-hidden">
			<div className="flex gap-2 absolute">
				{lastDropItemEl}
				{lastDropItemEl}
				{lastDropItemEl}
				{lastDropItemEl}
				{lastDropItemEl}
				{lastDropItemEl}
				{lastDropItemEl}
				{lastDropItemEl}
			</div>
		</div>
	);
}
