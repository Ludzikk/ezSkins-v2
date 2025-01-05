import LastDrops from "./LastDrops/LastDrops";
import Chat from "./Chat/Chat";

export default function Main(props) {
	return (
		<main className="flex px-4 flex-1">
			<div className="2xl:w-[20%] hidden 2xl:block">
				<Chat monitorOnlineCount={props.monitorOnlineCount} userStatus={props.userStatus} userAmount={props.userAmount} />
			</div>
			<div className="w-[100%] 2xl:w-[60%]">
				{props.lastDropsData && (
					<LastDrops lastDropsData={props.lastDropsData} />
				)}
			</div>
			<div className="2xl:w-[20%] hidden 2xl:block"></div>
		</main>
	);
}
