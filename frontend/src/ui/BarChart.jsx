import { Bar } from "react-chartjs-2";
import {Chart,Colors} from 'chart.js/auto';

export default function BarChart({values,labels}){
    const data =  {
        labels: labels,
        datasets: [{
          label: '# of Grade',
          data: values,
          borderWidth: 1,
          backgroundColor: [
            '#8ecae6',
            '#2d00f7',
            '#e500a4',
            '#023047',
            '#ffb703',
            '#c30e0e',
            '#c86bfa',
            '#99ca3c'
          ]
        }]
      }
    return (

                <Bar data={data} 
                  options={{
                    scales:{
                      y:{
                        grid:{
                          display: false
                        }
                      },
                      x:{
                        grid:{
                          display: false
                        }
                      }
                    },
                    // indexAxis:'y'
                  }}
                />
              
    );
}