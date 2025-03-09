import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";
interface NavGroupProps {
	title: ReactNode;
	navChildren: ReactNode;
}
export default function NavGroup({
	title,
	navChildren,
}: NavGroupProps) {
	return (
		<div>
			<Accordion
				type="single"
				collapsible
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						{title}
					</AccordionTrigger>
					<AccordionContent>
						<ul className="nav-item-container">
							{navChildren}
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
