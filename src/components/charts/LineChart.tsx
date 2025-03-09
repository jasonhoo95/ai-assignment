"use client";

import React, {
	useEffect,
	useRef,
	useState,
} from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";

// Register required chart components
ChartJS.register(
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend,
	Filler
);

const LineChart = () => {
	const chartRef = useRef(null);
	const [gradient, setGradient] = useState<
		string | CanvasGradient
	>("rgba(102, 51, 153, 0.06)");

	useEffect(() => {
		if (chartRef.current) {
			const ctx = (
				chartRef.current as any
			).canvas.getContext("2d");
			const gradientFill =
				ctx.createLinearGradient(
					0,
					0,
					0,
					300
				);
			gradientFill.addColorStop(
				0,
				"rgba(127, 86, 217, 0.05)"
			); // Darker purple at the top
			gradientFill.addColorStop(
				1,
				"rgba(127, 86, 217, 0)"
			); // Fades out to transparent

			setGradient(gradientFill);
		}
	}, []);

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
				label: "Upper Line",
				data: [
					50, 55, 53, 49, 57, 54, 60,
					65, 62, 68, 64, 75,
				],
				borderColor: "#7F56D9", // Purple border
				backgroundColor: gradient, // Light purple fill
				tension: 0.6, // Makes it smooth
				fill: "start",
				pointRadius: 0,
				borderWidth: 1,
			},
			{
				label: "Lower Line",
				data: [
					40, 42, 41, 45, 50, 52, 55,
					54, 56, 57, 58, 60,
				],
				borderColor: "#7F56D9", // Slightly transparent purple
				backgroundColor: "transparent", // Lighter purple fill
				tension: 0.6,
				pointRadius: 0,
				fill: false,
				borderWidth: 1,
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
				grid: {
					display: false,
				},
			},
			y: {
				display: false,
				grid: {
					display: true, // Hide Y-axis grid lines
					drawBorder: false, // Hide the left axis line
				},
				ticks: {
					display: false, // Hide Y-axis labels (numbers)
				},
			},
		},
	};

	return (
		<Line
			data={data}
			ref={chartRef}
			options={options}
		/>
	);
};

export default LineChart;
