export const graphs = {
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(0,173,210,0.4)',
        borderColor: '#00ADD2',
        pointRadius: 0,
        data: [50, 40, 60, 30, 65, 20, 60, 55, 90]
      }
    ]
  },
  options: {
    mantainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales:{
      xAxes: [{
          display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          max: 100,
          min: 0,
        }
      }]
    }
  }
}