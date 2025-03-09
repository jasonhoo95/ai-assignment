import { ReactNode } from "react";

interface navItemsProps {
	children: ReactNode;
}
export default function NavItems({
	children,
}: navItemsProps) {
	return (
		<div className="text-lg font-semibold text-[15px] gap-[10px] py-[10px] cursor-pointer min-w-[200px] flex items-center">
			{children}
		</div>
	);
}
