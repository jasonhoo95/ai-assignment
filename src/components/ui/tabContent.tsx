interface TabContentsProp {
	items: string[];
}
import { Icon } from "@iconify/react/dist/iconify.js";
export default function TabContent({
	items,
}: TabContentsProp) {
	return (
		<div className="border border-gray-300 flex my-5 rounded-md">
			{items.map((o, key) => {
				return (
					<div
						key={key}
						className="text-secondary tab-item-content p-[10px]"
					>
						{o}
					</div>
				);
			})}

			<div className="tab-item-content p-[10px]">
				<Icon icon="mdi:plus" />
			</div>
		</div>
	);
}
