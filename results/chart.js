
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
                '#CC0000',
                '#FFDE00',
                '#3B4CCA',
                '#CC0000',
                '#FFDE00',
                '#3B4CCA',
                '#CC0000',
                '#FFDE00',
                '#3B4CCA',
                '#CC0000',
                '#FFDE00',
                '#3B4CCA',
                '#CC0000',
                '#FFDE00',
            ],
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