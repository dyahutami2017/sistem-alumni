<!-- prettier-ignore -->
<template>
  <div class="card">
    <div
      class="card-header p-0 position-relative bg-transparent"
    >
      <div
        class="bg-gradient-light border-radius-lg py-3 pe-1"
      >
        <h5 class="text-center">Tracer Study</h5>
        <div class="chart">
          <canvas id="chart-bars-tracer" class="chart-canvas" height="170"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js/auto";

export default {
  name: "chart-bars-tracer",
  mounted() {
    var ctx = document.getElementById("chart-bars-tracer").getContext("2d");

    var work = {
      label: 'Bekerja',
      data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
      backgroundColor: 'rgba(0, 99, 132, 0.6)',
      borderColor: 'rgba(0, 99, 132, 1)',
      yAxisID: "y-axis-work"
    };
    
    var study = {
      label: 'Melanjutkan',
      data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
      backgroundColor: 'rgba(99, 132, 0, 0.6)',
      borderColor: 'rgba(99, 132, 0, 1)',
      yAxisID: "y-axis-study"
    };

    var enterpreneur = {
      label: 'Wirausaha',
      data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
      backgroundColor: 'rgba(253, 200, 76)',
      borderColor: 'rgba(99, 132, 0, 1)',
      yAxisID: "y-axis-enterpreneur"
    };
    
    var alumniData = {
      labels: ["Fakultas Teknik", "Fakultas Seni", "Fakultas Hukum", "FMIPA", "FK", "Fakultas Pertanian", "FIP", "Fakultas Bahasa"],
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

    new Chart(ctx, {
      type: 'bar',
      data: alumniData,
      options: chartOptions
    });
  },
};
</script>
