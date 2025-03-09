"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import TabContent from "@/components/ui/tabContent";
import { Card } from "@/components/ui/card";
import { orderItems } from "@/config/menuContent";
import { DatePickerWithRange } from "@/components/ui/datePickerRange";
import AvatarProfile from "@/components/ui/avatarProfile";
import { personItems } from "@/config/menuContent";
import LineChart from "@/components/charts/LineChart";
import { Badge } from "@/components/ui/badge";
import { chartDateConfig } from "@/config/menuContent";
import dynamic from "next/dynamic";

export default function MenuContent() {
	// Disable SSR for Chart.js
	const BarChart = dynamic(
		() =>
			import(
				"@/components/charts/BarChart"
			),
		{ ssr: false }
	);
	const LineChart = dynamic(
		() =>
			import(
				"@/components/charts/LineChart"
			),
		{ ssr: false }
	);

	const RenderTag = ({ item }: any) => {
		if (item.type === "success") {
			return (
				<Badge className="h-[24px] color-success flex items-center">
					<Icon icon="tabler:arrow-up" />
					{item.value}
				</Badge>
			);
		} else if (item.type === "danger") {
			return (
				<Badge className="h-[24px] color-danger">
					<Icon icon="tabler:arrow-down" />

					{item.value}
				</Badge>
			);
		}
	};

	return (
		<div>
			<div className="flex">
				<div>
					<h1 className="h1">
						Sales Overview
					</h1>
					<div>
						Your current sales summary
						and activity.
					</div>
				</div>

				<div className="ml-auto flex items-center gap-[10px]">
					<Button
						variant="outline"
						className="flex gap-[5px]"
					>
						<Icon icon="pajamas:export" />
						Export report
					</Button>

					<Button className="flex gap-[5px] bg-[#7F56D9]">
						<Icon icon="line-md:plus" />
						Invite
					</Button>
				</div>
			</div>

			<div className="flex justify-between items-center">
				<TabContent
					items={[
						"Default",
						"Saved view",
						"SDR view",
					]}
				/>

				<div className="justify-end flex gap-[5px]">
					<DatePickerWithRange />
					<Button variant="outline">
						<Icon icon="mynaui:filter-solid" />
						Filters
					</Button>
				</div>
			</div>

			<div className="flex gap-[10px]">
				<div className="w-[70%]">
					<div className="flex gap-[10px]">
						{orderItems.map(
							(o, key) => {
								return (
									<Card
										key={key}
										className="w-[33.33%] p-[20px]"
									>
										<div className="flex justify-between items-center">
											{
												o.header
											}

											<Icon
												className="text-gray-400"
												icon="mi:options-vertical"
											/>
										</div>
										<div className="flex justify-between items-center">
											<h1 className="h1">
												{
													o.content
												}
											</h1>
											<RenderTag
												item={
													o
												}
											/>
										</div>
									</Card>
								);
							}
						)}
					</div>

					<Card className="my-5 p-[20px]">
						<div className="flex justify-between">
							<div className="text-[18px] font-bold">
								Sales report
							</div>
							<div>
								<Button
									variant={
										"outline"
									}
								>
									View Report
								</Button>
							</div>
						</div>

						<div className="flex gap-[10px]">
							{chartDateConfig.map(
								(o, key) => {
									return (
										<div
											className="font-bold text-[#667085]"
											key={
												key
											}
										>
											{
												o.label
											}
										</div>
									);
								}
							)}
						</div>

						<div className="min-h-[200px]">
							<LineChart />
						</div>
					</Card>

					<Card className="my-5 p-[20px]">
						<div className="flex justify-between">
							<div className="text-[18px] font-bold">
								Sales report
							</div>
							<div>
								<Button
									variant={
										"outline"
									}
								>
									View Report
								</Button>
							</div>
						</div>

						<div className="flex gap-[10px]">
							{chartDateConfig.map(
								(o, key) => {
									return (
										<div
											className="font-bold text-[#667085]"
											key={
												key
											}
										>
											{
												o.label
											}
										</div>
									);
								}
							)}
						</div>

						<div className="min-h-[200px]">
							<BarChart />
						</div>
					</Card>

					<div className="flex justify-center relative ">
						<hr className="absolute top-[20px] z-[-1] w-full" />
						<Button
							variant="outline"
							className="flex items-center"
						>
							<Icon icon="line-md:plus" />
							Add
						</Button>
					</div>
				</div>
				<div className="w-[30%] flex flex-col gap-[10px] px-[20px]">
					<div className="flex justify-between">
						<h2 className="h2">
							Activity
						</h2>

						<div className="text-sub">
							View All
						</div>
					</div>

					{personItems.map((o, key) => {
						return (
							<AvatarProfile
								key={key}
								src={o.src}
							>
								<div>
									<label className="text-secondary">
										{o.title}
									</label>
								</div>
								<div>
									<label className="text-label">
										Purchased{" "}
										<span className="text-[#7F56D9]">
											{
												o.label
											}
										</span>
									</label>
								</div>
							</AvatarProfile>
						);
					})}
				</div>
			</div>
		</div>
	);
}
