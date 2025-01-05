import clsx from "clsx";

export default function LastDropItem({data}) {
    const colorStyle = clsx("text-white flex flex-col items-center w-[120px] p-2 rounded-xl relative overflow-hidden", `${data.color}-last-drop`)
    const colorStyleTop = clsx("absolute top-[-5px] left-[50%] translate-x-[-50%] w-3/5 h-[10px] rounded-xl z-10", `${data.color}-last-drop-top`)

	return (
		<div className={colorStyle}>
			<div className={colorStyleTop}></div>
			<div className="absolute bottom-0 left-0 w-full h-full bg-bodyColor"></div>
			<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/30"></div>
			<div className="relative">
				{/* <i className="fa-solid fa-star absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-7xl rotate-45 text-gray-500"></i> */}
				<img
					src={data.img}
					alt={data.alt}
					className="relative z-10 drop-shadow-lg "
				/>
			</div>
			<p className="text-white/70 text-sm relative z-10 truncate text-center w-[90%]">{data.weapon}</p>
			<p className=" relative z-10 truncate text-center w-[90%]">{data.skin}</p>
		</div>
	);
}
