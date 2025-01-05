import Panel from "./components/LoginPanel/Panel";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
	getDatabase,
	ref,
	set,
	get,
	onValue,
	update,
	remove,
	onDisconnect,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function App() {
	const [loginPopup, setLoginPopup] = useState(false);
	const [userStatus, setUserStatus] = useState(false);
	const [userData, setUserData] = useState(null);
	const [lastDrops, setLastDrops] = useState(null);
	const [userAmount, setUserAmount] = useState(0)

	const firebaseConfig = {
		apiKey: "AIzaSyCKqm5LwOf1_vS6TMDTUadjp36KLxcMT1s",
		authDomain: "cscscs-dae0a.firebaseapp.com",
		projectId: "cscscs-dae0a",
		storageBucket: "cscscs-dae0a.firebasestorage.app",
		messagingSenderId: "840968185641",
		appId: "1:840968185641:web:2fdee42a58c309b4e33938",
		databaseURL:
			"https://cscscs-dae0a-default-rtdb.europe-west1.firebasedatabase.app",
	};

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getDatabase(app);

	function checkIfUserIsLoggedIn() {
		onAuthStateChanged(auth, (user) => {
			setUserStatus(user.uid);
			getUserData();
		});
	}

	function signUpUserToWebsite(email, password, nickname, avatar) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUserStatus(user.uid);
				return user.uid;
			})
			.then((uid) => {
				const userRef = ref(db, `users/${uid}`);

				set(userRef, {
					email: email,
					avatar: avatar,
					nickname: nickname,
					money: 1000,
				}).catch((error) =>
					console.log("Error occurred while creating user database: ", error)
				);

				getUserData();
				toggleLoginPopup();
			})
			.catch((error) => console.log(error));
	}

	function loginUserToWebsite(email, password) {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUserStatus(user.uid);
				getUserData();
				toggleLoginPopup();
				setPresence();
			})
			.catch((error) => console.log(error));
	}

	function getUserData() {
		auth.onAuthStateChanged((user) => {
			const userRef = ref(db, `users/${user.uid}`);

			get(userRef).then((req) => {
				const data = req.val();
				setUserData(data);
			});

			setPresence();
		});
	}

	function setPresence() {
		auth.onAuthStateChanged((user) => {
			const presenceRef = ref(db, `presence/${user.uid}`);
			set(presenceRef, true);
			onDisconnect(presenceRef).remove();
		});
	}

	function getLastDrops() {
		const lastDropsRef = ref(db, "lastdrops");

		onValue(lastDropsRef, (req) => {
			const data = req.val();
			setLastDrops(data);
		});
	}

	function toggleLoginPopup() {
		setLoginPopup((prevVal) => !prevVal);
	}

	function getUserAmount() {
		const presenceListRef = ref(db, "presence");
		onValue(presenceListRef, (snapshot) => {
			const activeUsers = snapshot.size;
			setUserAmount(activeUsers)
		});
	}

	useEffect(() => {
		checkIfUserIsLoggedIn();
		getLastDrops();
		getUserAmount();
	}, []);

	return (
		<>
			{lastDrops && (
				<>
					<Nav
						userStatus={userStatus}
						userData={userData}
						toggleLoginPopup={toggleLoginPopup}
					/>
					{loginPopup && (
						<Panel
							signUpUserToWebsite={signUpUserToWebsite}
							loginUserToWebsite={loginUserToWebsite}
							toggleLoginPopup={toggleLoginPopup}
						/>
					)}
					<Main lastDropsData={lastDrops} userStatus={userStatus} userAmount={userAmount}/>
				</>
			)}
		</>
	);
}
