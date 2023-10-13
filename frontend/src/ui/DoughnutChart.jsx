import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";


export default function DoughnutChart({labels,values}){
    console.log(values)
    const data = {
        datasets: [{
            data: values
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: labels
    };
     
    return(
        <Doughnut data={data}/>
    );
}