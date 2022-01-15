// Map

mapboxgl.accessToken =
"pk.eyJ1IjoieGF2aWVyYmVsbGhhZGRvbiIsImEiOiJja2h0dWJzd3owMnV0MnJydmI5dXp1MjJrIn0.XsZhwZnA3zq2_SZZ5TF1RA";
const map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/xavierbellhaddon/ckyg92dg21rh014p71gtsvm5e",
center: [-96, 39],
zoom: 1,
attributionControl: false,
logoPosition: 'top-left'
});
map.addControl(new mapboxgl.AttributionControl(), 'top-right');

// Chart

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
