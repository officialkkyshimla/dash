const ctx = document.getElementById('act').getContext('2d');

        const act = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [10, 15, 8, 20, 25, 30],
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.1)',
                        fill: true,
                        tension: 0.4  // Makes it smooth
                    },
                    {
                        label: 'Dataset 2',
                        data: [5, 12, 15, 10, 18, 22],
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        fill: true,
                        tension: 0.4  // Makes it smooth
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });