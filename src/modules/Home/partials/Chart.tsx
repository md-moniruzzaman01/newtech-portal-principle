"use client"
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

import { Chartdata } from "../config/constants";

export default function ChartSection() {
    return(< >
    <PolarArea data={Chartdata} />
    </>)
    
}