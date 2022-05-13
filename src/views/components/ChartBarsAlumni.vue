<!-- prettier-ignore -->
<template>
  <div class="card">
    <div
      class="card-header p-0 position-relative bg-transparent"
    >
      <div
        class="bg-gradient-light border-radius-lg py-3 pe-1"
      >
        <h5 class="text-center">Data Alumni</h5>
        <div class="chart">
          <canvas id="chart-bars" class="chart-canvas" height="170"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js/auto";
import axios from "axios";
export default {
  name: "chart-bars",
  data() {
      return {
        myOptions: []
      }
  },
  methods: {
    
  },
  mounted() {
    axios.get('http://api.alumni.eduraya.co.id/api/faculty').then(res => {
          for(var i=0; i < res.data.faculty.length; i++){
            alumniData.labels.push(
               res.data.faculty[i].faculty_name
            )
          }
    })
    var ctx = document.getElementById("chart-bars").getContext("2d");

    var work = {
      label: 'Bekerja',
      data: [5427,1200],
      backgroundColor: 'rgba(0, 99, 132, 0.6)',
      borderColor: 'rgba(0, 99, 132, 1)',
      yAxisID: "y-axis-work"
    };
    
    var study = {
      label: 'Melanjutkan',
      data: [3.7,5],
      backgroundColor: 'rgba(99, 132, 0, 0.6)',
      borderColor: 'rgba(99, 132, 0, 1)',
      yAxisID: "y-axis-study"
    };

    var enterpreneur = {
      label: 'Wirausaha',
      data: [3.7,9],
      backgroundColor: 'rgba(253, 200, 76)',
      borderColor: 'rgba(99, 132, 0, 1)',
      yAxisID: "y-axis-enterpreneur"
    };
    
    var alumniData = {
      labels: [],
      datasets: [work, study, enterpreneur]
    };
    
    var chartOptions = {
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage: 0.6
        }],
        yAxes: [{
          id: "y-axis-work"
        }, {
          id: "y-axis-study"
        }, {
          id: "y-axis-enterpreneur"
        }]
      }
    };
    setTimeout(() => {
      new Chart(ctx, {
          type: 'bar',
          data: alumniData,
          options: chartOptions
      });
    }, 1000);
    
  },
};
</script>
