import { CopyIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const SampleCode = () => {
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		if (!isCopied) return;
		const timeout = setTimeout(() => {
			setIsCopied(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, [isCopied]);

	const handleCopy = () => {
		// copy code
		setIsCopied(true);
	};

	return (
		<div className="mx-auto relative w-full p-8 max-w-[600px] rounded-md bg-black border border-white h-[200px]">
			<div className="absolute top-4 right-4">
				<button
					onClick={handleCopy}
					className="border-white rounded-md p-2 border relative"
				>
					{isCopied && (
						<div className="absolute -top-10 -left-5 rounded-md bg-slate-400 py-1 px-2">
							copied
						</div>
					)}
					<CopyIcon />
				</button>
			</div>
			<div>sample code</div>
		</div>
	);
};

export default SampleCode;
