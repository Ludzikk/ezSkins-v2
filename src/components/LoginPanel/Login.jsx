export default function Login(props) {
	function getDataToLogin(event) {
		event.preventDefault();

		const formEl = event.currentTarget;
		const formData = new FormData(formEl);
		const email = formData.get("email");
		const password = formData.get("password");

		if (email && password) {
			props.loginUserToWebsite(email, password);
		}
	}

	return (
			<form
				action=""
				onSubmit={getDataToLogin}
				className="flex flex-col py-4 pt-0">
				<label htmlFor="email" className="mb-1 mt-4">Email</label>
				<input type="text" name="email" id="email" className="p-2 px-4 bg-white shadow-tileShadow rounded-xl text-black" placeholder="Enter email"/>
				<label htmlFor="password" className="mb-1 mt-4">Password</label>
				<input type="password" name="password" id="password" className="p-2 px-4 bg-white shadow-tileShadow rounded-xl text-black" placeholder="Enter password" />
				<button className="p-2 bg-btnGreen rounded-xl shadow-tileShadow text-black mt-6 font-bold">Login</button>
			</form>
	);
}
