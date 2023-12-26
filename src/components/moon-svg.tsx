import { motion, type TargetAndTransition } from "framer-motion";

const MoonSVG = () => {
	type VariantType = { [key: string]: TargetAndTransition };
	const variant: VariantType = {
		initial: {},
		final: {},
	};
	const zs: VariantType = {
		initial: { x: 0, y: 0, opacity: [0, 1, 0] },
		final: { x: 10, y: 10 },
	};

	const delay = [1, 2, 3];

	return (
		<svg viewBox="0 0 348 301" fill="none" xmlns="http://www.w3.org/2000/svg">
			<motion.g
				animate={{ rotateZ: ["-5deg", "0deg", "-5deg"] }}
				transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
				id="body"
			>
				<circle cx={146} cy={146} r={146} fill="white" />
				<path
					d="M126.5 128.5C126.5 140.098 117 146 110 146C101.5 146 93 139.098 93 127.5"
					stroke="black"
					strokeWidth={5}
					strokeLinecap="round"
				/>
				<path
					d="M205.5 127C205.5 138.598 196 144.5 189 144.5C180.5 144.5 172 137.598 172 126"
					stroke="black"
					strokeWidth={5}
					strokeLinecap="round"
				/>
				<path
					d="M114.2 53.1531C123.861 62.6264 117.274 72.1568 107.414 82.2125C97.5541 92.2683 81.7288 92.7405 72.0674 83.2672C62.4059 73.7938 68.9931 64.2635 78.8531 54.2077C88.7131 44.1519 104.538 43.6797 114.2 53.1531Z"
					fill="#D9D9D9"
				/>
				<path
					d="M252.403 101.026C249.376 105.784 244.92 103.922 239.968 100.772C235.015 97.6209 233.454 91.2093 236.481 86.4509C239.508 81.6924 243.964 83.5541 248.916 86.7048C253.869 89.8555 255.43 96.2671 252.403 101.026Z"
					fill="#D9D9D9"
				/>
				<path
					d="M164.833 53.4268C162.075 59.3235 153.06 58.9784 146.99 56.1397C140.92 53.3011 138.236 46.2197 140.993 40.3231C143.751 34.4264 152.766 34.7715 158.836 37.6101C164.906 40.4487 167.59 47.5301 164.833 53.4268Z"
					fill="#D9D9D9"
				/>
				<path
					d="M52.9892 121.937C49.7467 119.717 50.8343 114.381 53.119 111.043C55.4037 107.706 59.8844 106.799 63.127 109.019C66.3696 111.238 65.2819 116.575 62.9972 119.912C60.7125 123.25 56.2318 124.156 52.9892 121.937Z"
					fill="#D9D9D9"
				/>
				<motion.circle
					animate={{ scale: [1.2, 0.4, 1.2] }}
					transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
					id="mouth"
					cx={172}
					cy={200}
					r={30}
					fill="black"
				/>
			</motion.g>
			<motion.g id="zs">
				{delay.map((delayValue, idx) => (
					<motion.path
						key={idx}
						animate={{
							x: [0, 50],
							y: [0, -50],
							opacity: [0, 1, 0],
							scale: [0.2, 1.5],
						}}
						transition={{
							repeat: Infinity,
							duration: 3,
							ease: "easeInOut",
							delay: delayValue,
						}}
						d="M230 63.5H255.5L230 99.5H258"
						stroke="#C1C1C1"
						strokeWidth={9}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				))}
			</motion.g>
		</svg>
	);
};
export { MoonSVG };
