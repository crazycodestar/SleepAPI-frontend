import {
	SunIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { motion, type TargetAndTransition } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {
	const [isDanger, setIsDanger] = useState(false);
	type VariantType = { [key: string]: TargetAndTransition };
	const sliderHead: VariantType = {};

	const sliderSwitch: VariantType = {
		default: { x: 0 },
		danger: { x: [-1, 1, -1, 1, -1, 1] },
	};

	const handleAnimateToSun = () => {
		setIsDanger(true);
		setTimeout(() => {
			setIsDanger(false);
		}, 200);
	};
	return (
		<nav className="h-16 px-8 flex items-center">
			<ul className="ml-auto flex gap-2 items-center">
				<li>
					<motion.div
						animate={isDanger ? "danger" : "default"}
						variants={sliderHead}
						onClick={handleAnimateToSun}
						className="flex gap-4 border-2 border-white cursor-pointer rounded-full px-2 py-1.5 relative"
					>
						<motion.div
							variants={sliderSwitch}
							transition={{
								// type: "spring",
								// stiffness: 100,
								duration: 0.2,
							}}
							className="absolute right-0.5 top-0.5 w-7 h-7 rounded-full -z-10 bg-white"
						/>
						<SunIcon className="w-5 h-5" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="12"
							viewBox="0 0 384 512"
							className="scale-125 relative top-0.5"
						>
							<path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />
						</svg>
					</motion.div>
				</li>
				<li>
					<a
						href="https://github.com/crazycodestar/sleepAPI"
						target="_blank"
						className="bg-gray-100 rounded-full px-2 py-1.5 flex items-center gap-2 text-black"
					>
						<GitHubLogoIcon className="w-5 h-5" />
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/_itslekan"
						target="_blank"
						className="bg-gray-100 rounded-full px-2 py-1.5 flex items-center gap-2 text-black"
					>
						<TwitterLogoIcon className="w-5 h-5" />
					</a>
				</li>
				{/* <li>
					<a
						href="https://github.com/crazycodestar/sleepAPI"
						className="bg-gray-100 rounded-full px-2 py-1.5 flex items-center gap-2 text-black"
					>
						<GitHubLogoIcon className="w-5 h-5" />
						<p>
							<span>0</span> Stars
						</p>
					</a>
				</li> */}
			</ul>
		</nav>
	);
};

export default NavBar;
