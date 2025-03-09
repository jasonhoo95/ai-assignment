import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import "./nav.scss";
interface SideNavProps {
	children: ReactNode;
	menuChildren: ReactNode;
}

export default function SideNav({
	children,
	menuChildren,
}: SideNavProps) {
	return (
		<div className="flex">
			<div className="flex flex-col h-full border-r-1 border-gray-200 p-[10px]">
				{menuChildren}
			</div>

			<div className="side-nav-content">
				{children}
			</div>
		</div>
	);
}
