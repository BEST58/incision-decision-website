const gradeChart = document.getElementById('gradeChart');

new Chart(gradeChart, {
    type: 'doughnut',
    data: {
        labels: ['9th', '10th', '11th', '12th'],
        datasets: [{
            label: 'Employees',
            data: [4, 26, 14, 12],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
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
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
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
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)'
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