export default function SignUp(props) {
	function getDataToSignUp(event) {
		event.preventDefault();

		const formEl = event.currentTarget;
		const formData = new FormData(formEl);
		const email = formData.get("email");
		const password = formData.get("password");
		const nickname = formData.get("nickname");
		const avatar = formData.get("avatar");

		if (email && password) {
			props.signUpUserToWebsite(email, password, nickname, avatar);
		}
	}

	return (
			<form
				action=""
				onSubmit={getDataToSignUp}
				className="flex flex-col">
				<label htmlFor="email" className="mb-1 mt-4">Email</label>
				<input type="text" name="email" id="email" className="p-2 px-4 bg-white shadow-tileShadow rounded-xl text-black" placeholder="Enter email" />
				<label htmlFor="password" className="mb-1 mt-4">Password</label>
				<input type="password" name="password" id="password" className="p-2 px-4 bg-white shadow-tileShadow rounded-xl text-black" placeholder="Enter password"/>
				<label htmlFor="nickname" className="mb-1 mt-4">Nickname</label>
				<input type="text" name="nickname" id="nickname" className="p-2 px-4 bg-white shadow-tileShadow rounded-xl text-black" placeholder="Enter nickname"/>
				<label htmlFor="avatar" className="mb-1 mt-4">Avatar URL:</label>
				<input type="text" name="avatar" id="avatar" className="p-2 px-4 bg-white shadow-tileShadow rounded-xl text-black" placeholder="Enter avatar URL"/>
				<button className="p-2 bg-btnGreen rounded-xl shadow-tileShadow text-black mt-6 font-bold">Sign up</button>
			</form>
	);
}
