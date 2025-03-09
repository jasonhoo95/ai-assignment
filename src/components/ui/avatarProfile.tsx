import { ReactNode } from "react";

interface AvatarProfile {
	children: ReactNode;
	src: string;
}
export default function AvatarProfile({
	src,
	children,
}: AvatarProfile) {
	return (
		<div className="flex items-center">
			<img
				className="w-[32px] h-[32px] rounded-[50%]"
				src={src}
			/>
			<div className="ml-[10px]">
				{children}
				{/* <div>
					<label className="text-secondary">
						{title}
					</label>
				</div>
				<div>
					<label className="text-label">
						Purchased{" "}
						<span className="text-[#7F56D9]">
							{description}
						</span>
					</label>
				</div> */}
			</div>
		</div>
	);
}
