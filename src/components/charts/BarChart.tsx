"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	BarController,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";

// Register required chart components
ChartJS.register(
	BarElement,
	BarController,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend
);

const BarChart = () => {
	const data = {
		labels: [
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
		datasets: [
			{
				label: "Total Traffic",
				data: [
					80, 90, 85, 70, 95, 100, 110,
					105, 98, 120, 115, 125,
				],
				backgroundColor:
					"rgba(200, 200, 200, 0.4)", // Light gray
				borderRadius: 6,
				barThickness: 30, // Adjust thickness to make it appear in front
				order: 2, // Bring to front
			},
			{
				label: "Store Visits",
				data: [
					50, 60, 55, 40, 65, 70, 80,
					75, 68, 90, 85, 95,
				],
				backgroundColor: "#7F56D9", // Purple color
				borderRadius: {
					topLeft: 6, // Round top-left
					topRight: 6, // Round top-right
					bottomLeft: 0, // No rounding at the bottom
					bottomRight: 0, // No rounding at the bottom
				},
				barThickness: 30, // Slightly larger so it appears behind
				order: 1, // Push to back
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false, // Hide legend if not needed
			},
		},
		scales: {
			x: {
				stacked: true, // Enable stacking
				grid: {
					display: false,
				},
			},
			y: {
				stacked: true, // Enable stacking
				display: false,
				grid: {
					display: false, // Hide Y-axis grid lines
					drawBorder: false, // Hide the left axis line
				},
				ticks: {
					display: false, // Hide Y-axis labels (numbers)
				},
			},
		},
	};

	return (
		<Bar
			data={data}
			options={options}
		/>
	);
};

export default BarChart;
