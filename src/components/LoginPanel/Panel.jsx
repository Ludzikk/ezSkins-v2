import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";

export default function Panel(props) {
	const [type, setType] = useState("login");

	function changeType(event) {
		setType(event.target.value);
	}

	return (
		<>
			<div className="max-w-[300px] w-full mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-tileBg text-white p-4 rounded-xl">
				<div className="flex justify-center items-center  py-4">
					<h1 className="font-bold text-2xl text-center">
						{type !== "signup" ? "Login" : "Sign up"}
					</h1>
					<button
						onClick={props.toggleLoginPopup}
						className="absolute top-0 right-0 p-2 text-xl">
						<i className="fa-solid fa-x"></i>
					</button>
				</div>
				<div className="flex justify-between">
					<button value="login" onClick={changeType}>
						Login
					</button>
					<button value="signup" onClick={changeType}>
						Sign up
					</button>
				</div>
				{type !== "signup" ? (
					<Login loginUserToWebsite={props.loginUserToWebsite} />
				) : (
					<SignUp signUpUserToWebsite={props.signUpUserToWebsite} />
				)}
			</div>
			<div className="bg-bodyColor/50 absolute w-screen h-screen top-0 left-0"></div>
		</>
	);
}
