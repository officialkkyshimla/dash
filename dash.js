window.onload=function(){
    const ctx=document.getElementById('actcli').getContext('2d');
    const actcli=new Chart(ctx,
        {type:'line',
            data:{labels:['2020-21','2021-22','2022-23','2023-24','2024-25'],
                datasets:[{label:'Angel one',
                    data:[20,50,70,90,120],
                    borderColor:'#f59a69',
                    fill:true,
                    tension:0.5,
                    borderWidth:10,
                    pointStyle:'circle',
                    pointRadius:4,
                    pointHoverRadius:6},
                    {
                        label:'Zerodha',
                        data:[26,50,60,40,125],
                        borderColor:'lightblue',
                        fill:true,
                        tension:0.5,
                        borderWidth:10,
                        pointStyle:'circle',
                        pointRadius:4,
                        pointHoverRadius:6

                    }],
                    options:
                    {
                        responsive:true,
                        plugins:{
                            legend:{
                                position:'bottom',
                                lebels:{
                                    usePointStyle:'true',
                                    PointStyle:'circle'
                                }
                            }
                        },
                        scales:
                        {
                            y:{beginAtZero:true}
                        }
                        
                    }
                }});
}