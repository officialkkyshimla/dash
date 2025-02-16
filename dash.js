window.onload = function() {
    activeclient();
    complaint();
    sharehld();
    sharehldz();
    financial();
};

function activeclient() {
    const ctx = document.getElementById('actcli').getContext('2d');
    const color1 = ctx.createLinearGradient(0, 0, 200, 200);
    color1.addColorStop(0, "#1B98FF");
    color1.addColorStop(1, "#DEF0FF");
    const color2 = ctx.createLinearGradient(0, 0, 200, 200);
    color2.addColorStop(0, "#FF8119");
    color2.addColorStop(1, "#FFEEDF");

    const flowchart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
            datasets: [
                {
                    label: 'Angel one',
                    data: [0, 300000, 600000, 900000, 1200000], 
                    borderColor: color2,
                    fill: false,
                    tension: 0.5,
                    borderWidth: 10,
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    backgroundColor: color2
                },
                {
                    label: 'Zerodha',
                    data: [0, 300000, 600000, 400000, 1250000], 
                    borderColor: color1,
                    backgroundColor: color1,
                    fill: false,
                    tension: 0.5,
                    borderWidth: 10,
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Active Clients",
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 10,
                        usePointStyle: true,
                        pointStyle: 'circle',
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 300000, // Increase by 3L each step
                        callback: function(value) {
                            return (value / 100000) + "L"; // Convert to Lakh format
                        }
                    }
                }
            }
        }
    });
}

function complaint() {
    const com = document.getElementById('complain').getContext('2d');
    const color1 = com.createLinearGradient(0, 0, 200, 200);
    color1.addColorStop(0, "#1B98FF");
    color1.addColorStop(1, "#DEF0FF");
    const color2 = com.createLinearGradient(0, 0, 200, 200);
    color2.addColorStop(0, "#FF8119");
    color2.addColorStop(1, "#FFEEDF");
    
    const complain = new Chart(com, {
        type: 'line',
        data: {
            labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
            datasets: [
                {
                    label: 'Angel one',
                    data: [20, 50, 170, 190, 120],
                    borderColor: color2,
                    fill: false,
                    tension: 0.5,
                    borderWidth: 10,
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    backgroundColor: color2
                },
                {
                    label: 'Zerodha',
                    data: [260, 50, 160, 40, 125],
                    borderColor: color1,
                    backgroundColor: color1,
                    fill:false,
                    tension: 0.5,
                    borderWidth: 10,
                    pointStyle: 'circle',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,

            plugins: {
                title:{
                    display:true,
                    text:"Complaints",
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 10,
                        usePointStyle: true,
                        pointStyle: 'circle',
                    }
                },
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
function sharehld()
{
    const shr = document.getElementById('shrhld').getContext('2d');
    const color1=shr.createLinearGradient(0,0,200,200);
    color1.addColorStop(0,"#1B98FF");
    color1.addColorStop(1, "#DEF0FF");
    const color2=shr.createLinearGradient(0,0,200,200);
    color2.addColorStop(0,"#FF8119");
    color2.addColorStop(1,"#FFEEDF");
     const complain = new Chart(shr, {
         type: 'bar',
         data: {
             labels: ['','', '', '', '', ''],
             datasets: [
                 {
                     label: ' Angel one',
                     data: [20, 50, 170, 190, 120,26],
                     borderColor: color2,
                     fill: true,
                     tension: 0.5,
                     borderWidth: 10,
                     backgroundColor: [color2,color1]
                 }
             ]
         },
         options: {
             responsive: true,
             plugins: {
                title:{
                    display:true,
                    text:"Share Holding",
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                 legend: {
                     position: 'bottom',
                     labels: {
                         padding:10,
                         usePointStyle: true,
                         pointStyle: 'circle',
                         
                     }
                 }
             },
             scales: {
                 y: { beginAtZero: true }
             }
         }
     });
}
function sharehldz()
{
    const shrh = document.getElementById('shrhlz').getContext('2d');
    const color1=shrh.createLinearGradient(0,0,200,200);
    color1.addColorStop(0,"#1B98FF");
    color1.addColorStop(1,"#DEF0FF");
    const color2=shrh.createLinearGradient(0,0,200,200);
    color2.addColorStop(0,"#FF8119");
    color2.addColorStop(1,"#FFEEDF");
   
    const complain2 = new Chart(shrh, {
         type: 'bar',
         data: {
             labels: ['', '', '', '', ''],
             datasets: [
                 {
                     label: ' Zerotha',
                     data: [20, 50, 170, 190, 120,26],
                     borderColor: color1,
                     fill: true,
                     tension: 0.5,
                     borderWidth: 10,
                     backgroundColor: [color1,color2]
                 }
             ]
         },
         options: {
             responsive: true,
             plugins: {
                 legend: {
                     position: 'bottom',
                     labels: {
                         padding:10,
                         usePointStyle: true,
                         pointStyle: 'circle',
                         
                     }
                 }
             },
             scales: {
                 y: { beginAtZero: true }
             }
         }
     });
}
function financial()
{
    const finc=document.getElementById('Financials').getContext('2d');
    const color1=finc.createLinearGradient(0,0,200,200);
    color1.addColorStop(0,"#1B98FF");
    color1.addColorStop(1,"#DEF0FF");
    const color2=finc.createLinearGradient(0,0,200,200);
    color2.addColorStop(0,"#FF8119");
    color2.addColorStop(1,"#FFEEDF");
    const financ = new Chart(finc, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Profit/Loss'],
            datasets: [
                {
                    label: 'Angel one 2021',
                    data: [20, 50],
                    borderColor: color2,
                    backgroundColor:color2,
                    borderWidth: 2,
                    fill: true,
                    borderRadius: 50,
                    borderSkipped:false 
                },
                {
                    label: 'Zerodha 2021',
                    data: [26, 50],
                    backgroundColor: color1,
                    borderColor: color1,
                    borderWidth: 2,
                    fill: true,
                    borderRadius: 50,
                    
                    borderSkipped:false 
                },
                {
                    label: 'Angel one 2022',
                    data: [30, 40],
                    backgroundColor: color2,
                    borderColor: color2,
                    borderWidth: 2,
                    fill: true,
                    borderRadius: 50,
                    borderSkipped:false  
                },
                {
                    label: 'Zerodha 2022',
                    data: [28, 45],
                    backgroundColor: color1,
                    borderColor: color1,
                    borderWidth: 2,
                    fill: true,
                    borderRadius: 50,
                    borderSkipped:false  
                },
                {
                    label: 'Angel one 2023',
                    data: [35, 50],
                    backgroundColor: color2,
                    borderColor: color2,
                    borderWidth: 2,
                    fill: true,
                    borderRadius: 50,
                    borderSkipped:false  
                },
                {
                    label: 'Zerodha 2023',
                    data: [30, 60],
                    backgroundColor: color1,
                    borderColor: color1,
                    borderWidth: 2,
                    fill: true,
                    borderRadius: 50,
                    borderSkipped:'false'  
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title:{
                    display:true,
                    text:"Financials",
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

