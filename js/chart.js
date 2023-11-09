'use strict';

let canvasElem = document.getElementById('chart')

// Instantiate a new AppState
const appState = new AppState();
appState.loadVoteData(); // Use a method on that AppState to load vote data from localStorage.

// Create a data object for chart.js using your AppState's allProducts array.
const chartData = {
  labels: appState.allProducts.map(product => product.label),
  datasets: [
    {
      label: 'Vote Data',
      data: appState.allProducts.map(product => product.data),
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Example color
      borderColor: 'rgba(75, 192, 192, 1)', // Example color
      borderWidth: 1,
    },
  ],
};

// Combine the data object with configuration information for chart.js type, colors, etc.
const chartConfig = {
  type: 'bar', // Change this to the desired chart type (bar, line, etc.)
  data: chartData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Call chart.js with the configuration and the canvasElem
const myChart = new Chart(canvasElem, chartConfig);
function renderChart() {
}

renderChart();
