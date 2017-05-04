Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Titles',
        colorByPoint: true,
        data: [{
            name: 'Full-time Teachers',
            y: 79.3
        }, {
            name: 'Special Ed Teachers',
            y: 16.2,
            sliced: true,
            selected: true
        }, {
            name: 'School Counselors',
            y: 3.3
        }, {
            name: 'Demonstration Teachers',
            y: 1
        }, {
            name: 'Demonstration Special Ed Teachers',
            y: 0.2
        }]
    }],
    legends: {
    		enabled: false
    },
    credits: {
    		enabled: false
    },
    exporting: {
    		enabled:false
    },
    tooltip: {
        headerFormat: '<span style="font-size:15px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b> {point.y:.2f}%</b> of total<br/>'},
    
});


