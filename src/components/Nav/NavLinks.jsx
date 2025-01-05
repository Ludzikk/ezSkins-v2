import Logo from "/public/logo.png"

export default function NavLinks() {
	return (
		<div className="flex items-center">
			<a href="#"><img src={Logo} alt="ezSkins Logo" className="h-[50px]" /></a>
			<ul className="ml-8 text-white/80 font-bold text-lg flex gap-5">
				<li>
					<a href="#">Cases</a>
				</li>
				<li>
					<a href="#">Upgrader</a>
				</li>
			</ul>
		</div>
	);
}
