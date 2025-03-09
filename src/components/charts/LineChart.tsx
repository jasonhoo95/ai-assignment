"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues in Next.js
const ApexChart = dynamic(
	() => import("react-apexcharts"),
	{ ssr: false }
);

const LineChart = () => {
	// Chart data
	const [series, setSeries] = useState([
		{
			name: "Upper Line",
			data: [
				50, 55, 53, 49, 57, 54, 60, 65,
				62, 68, 64, 75,
			],
		},
		{
			name: "Lower Line",
			data: [
				40, 42, 41, 45, 50, 52, 55, 54,
				56, 57, 58, 60,
			],
		},
	]);

	const options: ApexOptions = {
		chart: {
			type: "area",
			toolbar: { show: false },
			zoom: { enabled: false },
		},
		stroke: {
			curve: "smooth",
			width: [2, 2], // Line thickness
		},
		fill: {
			type: ["gradient", "none"], // Apply gradient only to Upper Line
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.5,
				gradientToColors: [
					"rgba(127, 86, 217, 0)",
				], // Fades to transparent
				opacityFrom: 0.4, // Stronger opacity at the top
				opacityTo: 0,
				stops: [0, 100],
			},
			opacity: [1, 0],
		},
		colors: ["#7F56D9", "#7F56D9"], // Purple color
		dataLabels: { enabled: false },
		xaxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			labels: { style: { colors: "#aaa" } },
		},
		yaxis: { show: false },
		grid: { show: false },
		legend: { show: false },
		tooltip: { theme: "dark" },
	};

	return (
		<div className="w-full h-[300px]">
			<ApexChart
				options={options}
				series={series}
				type="area"
				height={300}
			/>
		</div>
	);
};

export default LineChart;
