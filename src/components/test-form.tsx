import { useState } from "react";

const fetchFunc = async (delay: string) => {
	try {
		// specify how long you want to sleep(milliseconds) in the query param
		const result = await fetch(
			"https://sleepapi-production.up.railway.app?sleep=" + delay
			// "http://localhost:3000?sleep=" + delay
		);
		if (result.status === 200) return;
	} catch (err) {
		console.log(err);
	}
};

const TestForm = () => {
	const [isPending, setIsPending] = useState(false);
	const [delay, setDelay] = useState("2000");

	const handleSubmit = async () => {
		if (!delay) return;
		setIsPending(true);
		await fetchFunc(delay);
		setIsPending(false);
	};

	return (
		<div className="flex flex-col w-full items-center">
			<div className="flex justify-center mx-auto gap-2 mb-2">
				<input
					type="number"
					value={delay}
					onChange={(e) => setDelay(e.currentTarget.value)}
					max={25}
					className="rounded-md px-3 bg-[#F9F7F5] text-black"
					placeholder="Delay(ms)"
				/>
				<button
					className="flex gap-1.5 items-center disabled:cursor-not-allowed justify-center rounded-md bg-[#F9F7F5] text-black px-3 py-2 font-medium"
					disabled={isPending}
					onClick={handleSubmit}
				>
					{isPending && (
						<span className="animate-spin">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="16"
								width="16"
								viewBox="0 0 512 512"
							>
								<path
									fill="#ffffff"
									d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
								/>
							</svg>
						</span>
					)}
					<span>Sleep</span>
				</button>
			</div>
			<p className="text-red-700">
				sleep limit is 25s. Anything more will default to 25s
			</p>
		</div>
	);
};

export default TestForm;
