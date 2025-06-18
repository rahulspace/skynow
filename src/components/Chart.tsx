"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Props {
  data: number[];
  categories: string[];
}

export default function Chart(props: Props) {
  const series: ApexAxisChartSeries = [
    {
      name: "Summary",
      data: props.data,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#d946ef"],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val}°`,
      style: {
        colors: ["#f0abfc"],
      },
      background: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 0,
    },
    xaxis: {
      categories: props.categories,
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#f0abfc",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100],
        gradientToColors: ["#d946ef"],
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
}
