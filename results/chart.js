
import { getFromLocalStorage, buildTable } from '../pokemon-utils.js';

const resultsArray = getFromLocalStorage('RESULTS');

const resetButton = document.getElementById('new-button');


// Table Data
buildTable(resultsArray);

// Chart Data
var ctx = document.getElementById('myChart').getContext('2d');

const pokeName = resultsArray.map((item) => {
    return item.pokemon;
});

const captured = resultsArray.map((item) => {
    return item.captured;
});


resetButton.addEventListener('click', ()=> {
    window.location = '../index.html';
});


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: '# of Captured Pokemon',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.50)',
                'rgba(54, 162, 235, 0.50)',
                'rgba(255, 206, 86, 0.50)',
                'rgba(75, 192, 192, 0.50)',
                'rgba(153, 102, 255, 0.50)',
                'rgba(255, 159, 64, 0.50)',
                'rgba(255, 99, 132, 0.50)',
                'rgba(54, 162, 235, 0.50)',
                'rgba(255, 206, 86, 0.50)',
                'rgba(75, 192, 192, 0.50)',
                'rgba(153, 102, 255, 0.50)',
                'rgba(255, 159, 64, 0.50)',
                'rgba(255, 99, 132, 0.50)',
                'rgba(54, 162, 235, 0.50)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.70)',
                'rgba(54, 162, 235, 0.70)',
                'rgba(255, 206, 86, 0.70)',
                'rgba(75, 192, 192, 0.70)',
                'rgba(153, 102, 255, 0.70)',
                'rgba(255, 159, 64, 0.70)',
                'rgba(255, 99, 132, 0.70)',
                'rgba(54, 162, 235, 0.70)',
                'rgba(255, 206, 86, 0.70)',
                'rgba(75, 192, 192, 0.70)',
                'rgba(153, 102, 255, 0.70)',
                'rgba(255, 159, 64, 0.70)',
                'rgba(255, 99, 132, 0.70)',
                'rgba(54, 162, 235, 0.70)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



// const encountered = resultsArray.map((item) => {
//     return item.encountered;
// });

// var myChart-2 = new Chart2(ctx, {
//     type: 'bar',
//     data: {
//         labels: pokeName, 
//         datasets: [{
//             label: '# of Encountered Pokemon',
//             data: encountered,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.70)',
//                 'rgba(54, 162, 235, 0.70)',
//                 'rgba(255, 206, 86, 0.70)',
//                 'rgba(75, 192, 192, 0.70)',
//                 'rgba(153, 102, 255, 0.70)',
//                 'rgba(255, 159, 64, 0.70)',
//                 'rgba(255, 99, 132, 0.70)',
//                 'rgba(54, 162, 235, 0.70)',
//                 'rgba(255, 206, 86, 0.70)',
//                 'rgba(75, 192, 192, 0.70)',
//                 'rgba(153, 102, 255, 0.70)',
//                 'rgba(255, 159, 64, 0.70)',
//                 'rgba(255, 99, 132, 0.70)',
//                 'rgba(54, 162, 235, 0.70)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 100)',
//                 'rgba(54, 162, 235, 100)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 99, 132, 100)',
//                 'rgba(54, 162, 235, 100)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 99, 132, 100)',
//                 'rgba(54, 162, 235, 100)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });