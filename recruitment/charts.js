const gradeChart = document.getElementById('gradeChart');

new Chart(gradeChart, {
    type: 'doughnut',
    data: {
        labels: ['9th', '10th', '11th', '12th'],
        datasets: [{
            label: 'Employees',
            data: [4, 26, 14, 12],
            backgroundColor: [
                '#092134',
                '#18598C',
                '#6C91C2',
                '#C5D4E7'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                maxHeight: 50,
                fullSize: false,
                onClick: null
            },
            title: {
                display: true,
                color: 'black',
                text: 'Grade Level'
            }
        }
    },
});

const genderChart = document.getElementById('genderChart');

new Chart(genderChart, {
    type: 'doughnut',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Employees',
            data: [34, 22],
            backgroundColor: [
                '#18598C',
                '#6C91C2'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                maxHeight: 50,
                fullSize: false,
                onClick: null
            },
            title: {
                display: true,
                color: 'black',
                text: 'Gender'
            }
        }
    },
});

const ethnicityChart = document.getElementById('ethnicityChart');

new Chart(ethnicityChart, {
    type: 'doughnut',
    data: {
        labels: [
            'Native Hawaiian/Pacific Islander',
            'South Asian',
            'Southeast Asian',
            'East Asian',
            'Caucasian',
            'African American',
            'Hispanic/Latino',
            'Multi-Racial'
        ],
        datasets: [{
            label: 'Employees',
            data: [1, 30, 5, 8, 6, 1, 7, 5],
            backgroundColor: [
                '#092134',
                '#5984bb',
                '#18598C',
                '#647892',
                '#6C91C2',
                '#8facd1',
                '#416ba0',
                '#C5D4E7'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                maxHeight: 50,
                fullSize: false,
                onClick: null
            },
            title: {
                display: true,
                color: 'black',
                text: 'Ethnicity'
            }
        }
    },
});