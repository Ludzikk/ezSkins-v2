import NavLinks from "./NavLinks";
import NavProfile from "./NavProfile";

export default function Nav(props) {
	return (
		<nav className="text-white py-4 px-4">
			<div className="flex justify-between items-center">
				<NavLinks />
				<NavProfile
					userStatus={props.userStatus}
					userData={props.userData}
					toggleLoginPopup={props.toggleLoginPopup}
				/>
			</div>
		</nav>
	);
}
