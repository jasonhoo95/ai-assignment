import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps {
	className: string;
	type: string;
	placeholder: string;
	renderPlaceholder?: React.ReactNode;
	favicon?: React.ReactNode;
}

function Input({
	className,
	type,
	placeholder,
	favicon,
}: InputProps) {
	return (
		<div className="relative">
			<input
				type={type}
				data-slot="input"
				placeholder={placeholder}
				className={cn(
					"border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					"focus-visible:border-ring",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					className
				)}
			/>
			<div className="absolute left-[10px] top-[10px]">
				{favicon}
			</div>
		</div>
	);
}

export { Input };
