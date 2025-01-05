export default function Chat(props) {
	function sendMsg(e) {
		e.preventDefault();
	}

	return (
		<div className="text-white bg-tileBg mr-6 rounded-xl h-[97%] flex flex-col">
			<div className="flex justify-between items-center shadow-md shadow-black/50 p-4">
				<span className="text-lg">Chat</span>
				<span>
					<sup>
						<i className="fa-solid fa-circle text-[0.4rem] text-[#A6FF35] online-dot"></i>
					</sup>{" "}
					Online: {props.userAmount}
				</span>
			</div>
			<div className="flex-1"></div>
			<form
				action=""
				className="chat-form p-4 flex justify-center rounded overflow-hidden"
				onSubmit={sendMsg}>
				{props.userStatus ? (
					<>
						<input
							type="text"
							className="text-black p-2 flex-1 w-[50px]"
							placeholder="Send message"
						/>
						<button
							className="text-black bg-btnGreen py-2 cursor-pointer font-bold px-4"
							disabled>
							<i className="fa-solid fa-paper-plane"></i>
						</button>
					</>
				) : <p className="text-lg">Login to send message</p>}
			</form>
		</div>
	);
}
