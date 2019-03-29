$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "../assets/NFLXConsensusData.csv",
        dataType: "text",
        success: function (data) { processCSVData(data); },
        error: AjaxFailed
    });


});

function processCSVData(csvData) {

    var data = $.csv.toArrays(csvData);

    var periodLabels = []

    var totalSubscribersUSValues = []
    var totalSubscribersUSYoY = []
    var totalSubscribersUSQoQ = []
    var totalSubscribersUSConsensusValues = []
    var totalSubscribersUSConsensusYoY = []
    var totalSubscribersUSConsensusQoQ = []

    var paidSubscribersUSValues = []
    var paidSubscribersUSYoY = []
    var paidSubscribersUSQoQ = []
    var paidSubscribersUSConsensusValues = []
    var paidSubscribersUSConsensusYoY = []
    var paidSubscribersUSConsensusQoQ = []

    var totalSubscribersINTValues = []
    var totalSubscribersINTYoY = []
    var totalSubscribersINTQoQ = []
    var totalSubscribersINTConsensusValues = []
    var totalSubscribersINTConsensusYoY = []
    var totalSubscribersINTConsensusQoQ = []

    var paidSubscribersINTValues = []
    var paidSubscribersINTYoY = []
    var paidSubscribersINTQoQ = []
    var paidSubscribersINTConsensusValues = []
    var paidSubscribersINTConsensusYoY = []
    var paidSubscribersINTConsensusQoQ = []

    var arpuUSValues = []
    var arpuUSYoY = []
    var arpuUSQoQ = []
    var arpuUSConsensusValues = []
    var arpuUSConsensusYoY = []
    var arpuUSConsensusQoQ = []

    var arpuINTValues = []
    var arpuINTYoY = []
    var arpuINTQoQ = []
    var arpuINTConsensusValues = []
    var arpuINTConsensusYoY = []
    var arpuINTConsensusQoQ = []

    var revUSValues = []
    var revUSYoY = []
    var revUSQoQ = []
    var revUSConsensusValues = []
    var revUSConsensusYoY = []
    var revUSConsensusQoQ = []

    var revINTValues = []
    var revINTYoY = []
    var revINTQoQ = []
    var revINTConsensusValues = []
    var revINTConsensusYoY = []
    var revINTConsensusQoQ = []

    var contProfitUSValues = []
    var contProfitUSYoY = []
    var contProfitUSQoQ = []
    var contProfitUSConsensusValues = []
    var contProfitUSConsensusYoY = []
    var contProfitUSConsensusQoQ = []

    var contProfitINTValues = []
    var contProfitINTYoY = []
    var contProfitINTQoQ = []
    var contProfitINTConsensusValues = []
    var contProfitINTConsensusYoY = []
    var contProfitINTConsensusQoQ = []

    for (var j = 1; j < 25; j++) {
        periodLabels.unshift(data[j][2])
    }

    for (var i = 1; i < data.length; i++) {
        current = data[i]
        if (current[3] == "US Subscribers - Total") {
            totalSubscribersUSValues.unshift(current[4])
            totalSubscribersUSYoY.unshift(current[5])
            totalSubscribersUSQoQ.unshift(current[6])
            totalSubscribersUSConsensusValues.unshift(current[7])
            totalSubscribersUSConsensusYoY.unshift(current[8])
            totalSubscribersUSConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "US Subscribers - Paid") {
            paidSubscribersUSValues.unshift(current[4])
            paidSubscribersUSYoY.unshift(current[5])
            paidSubscribersUSQoQ.unshift(current[6])
            paidSubscribersUSConsensusValues.unshift(current[7])
            paidSubscribersUSConsensusYoY.unshift(current[8])
            paidSubscribersUSConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "International Subscribers - Total") {
            totalSubscribersINTValues.unshift(current[4])
            totalSubscribersINTYoY.unshift(current[5])
            totalSubscribersINTQoQ.unshift(current[6])
            totalSubscribersINTConsensusValues.unshift(current[7])
            totalSubscribersINTConsensusYoY.unshift(current[8])
            totalSubscribersINTConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "International Subscribers - Paid") {
            paidSubscribersINTValues.unshift(current[4])
            paidSubscribersINTYoY.unshift(current[5])
            paidSubscribersINTQoQ.unshift(current[6])
            paidSubscribersINTConsensusValues.unshift(current[7])
            paidSubscribersINTConsensusYoY.unshift(current[8])
            paidSubscribersINTConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "US ARPU") {
            arpuUSValues.unshift(current[4])
            arpuUSYoY.unshift(current[5])
            arpuUSQoQ.unshift(current[6])
            arpuUSConsensusValues.unshift(current[7])
            arpuUSConsensusYoY.unshift(current[8])
            arpuUSConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "International ARPU") {
            arpuINTValues.unshift(current[4])
            arpuINTYoY.unshift(current[5])
            arpuINTQoQ.unshift(current[6])
            arpuINTConsensusValues.unshift(current[7])
            arpuINTConsensusYoY.unshift(current[8])
            arpuINTConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "US Revenue") {
            revUSValues.unshift(current[4])
            revUSYoY.unshift(current[5])
            revUSQoQ.unshift(current[6])
            revUSConsensusValues.unshift(current[7])
            revUSConsensusYoY.unshift(current[8])
            revUSConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "International Revenue") {
            revINTValues.unshift(current[4])
            revINTYoY.unshift(current[5])
            revINTQoQ.unshift(current[6])
            revINTConsensusValues.unshift(current[7])
            revINTConsensusYoY.unshift(current[8])
            revINTConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "US Contribution Profit") {
            contProfitUSValues.unshift(current[4])
            contProfitUSYoY.unshift(current[5])
            contProfitUSQoQ.unshift(current[6])
            contProfitUSConsensusValues.unshift(current[7])
            contProfitUSConsensusYoY.unshift(current[8])
            contProfitUSConsensusQoQ.unshift(current[9])
        }
        else if (current[3] == "International Contribution Profit") {
            contProfitINTValues.unshift(current[4])
            contProfitINTYoY.unshift(current[5])
            contProfitINTQoQ.unshift(current[6])
            contProfitINTConsensusValues.unshift(current[7])
            contProfitINTConsensusYoY.unshift(current[8])
            contProfitINTConsensusQoQ.unshift(current[9])
        }
    }

    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };

    var lineChartData = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: totalSubscribersUSValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: totalSubscribersUSYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: totalSubscribersUSQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: totalSubscribersUSConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: totalSubscribersUSConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: totalSubscribersUSConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData2 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: paidSubscribersUSValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: paidSubscribersUSYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: paidSubscribersUSQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: paidSubscribersUSConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: paidSubscribersUSConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: paidSubscribersUSConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData3 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: totalSubscribersINTValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: totalSubscribersINTYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: totalSubscribersINTQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: totalSubscribersINTConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: totalSubscribersINTConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: totalSubscribersINTConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData4 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: paidSubscribersINTValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: paidSubscribersINTYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: paidSubscribersINTQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: paidSubscribersINTConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: paidSubscribersINTConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: paidSubscribersINTConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData5 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: arpuUSValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: arpuUSYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: arpuUSQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: arpuUSConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: arpuUSConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: arpuUSConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData6 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: arpuINTValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: arpuINTYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: arpuINTQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: arpuINTConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: arpuINTConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: arpuINTConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData7 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: revUSValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: revUSYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: revUSQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: revUSConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: revUSConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: revUSConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData8 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: revINTValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: revINTYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: revINTQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: revINTConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: revINTConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: revINTConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData9 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: contProfitUSValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: contProfitUSYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: contProfitUSQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: contProfitUSConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: contProfitUSConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: contProfitUSConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    var lineChartData10 = {
        labels: periodLabels,
        datasets: [{
            label: 'Value',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: contProfitINTValues,
            yAxisID: 'y-axis-1',
        }, {
            label: 'YoY',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            fill: false,
            data: contProfitINTYoY,
            yAxisID: 'y-axis-2'
        }, {
            label: 'QoQ',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            fill: false,
            data: contProfitINTQoQ,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus Value',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            fill: false,
            data: contProfitINTConsensusValues,
            yAxisID: 'y-axis-2'
        }, {
            label: 'Consensus YoY',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            fill: false,
            data: contProfitINTConsensusYoY,
            yAxisID: 'y-axis-1'
        }, {
            label: 'Consensus QoQ',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            fill: false,
            data: contProfitINTConsensusQoQ,
            yAxisID: 'y-axis-2'
        }]
    };

    window.onload = function () {
        //**US TOTAL SUBSCRIBERS GRAPH**
        var ctx = document.getElementById('totalSubscribersUS').getContext('2d');
        window.myLine = Chart.Line(ctx, {
            data: lineChartData,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Total US Subscribers'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**US PAID SUBSCRIBERS GRAPH**
        var ctx2 = document.getElementById('paidSubscribersUS').getContext('2d');
        window.myLine = Chart.Line(ctx2, {
            data: lineChartData2,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Paid US Subscribers'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**INTL TOTAL SUBSCRIBERS GRAPH**
        var ctx3 = document.getElementById('totalSubscribersINTL').getContext('2d');
        window.myLine = Chart.Line(ctx3, {
            data: lineChartData3,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Total Intl Subscribers'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**INTL PAID SUBSCRIBERS GRAPH**
        var ctx4 = document.getElementById('paidSubscribersINTL').getContext('2d');
        window.myLine = Chart.Line(ctx4, {
            data: lineChartData4,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Paid Intl Subscribers'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**US ARPU GRAPH**
        var ctx5 = document.getElementById('arpuUS').getContext('2d');
        window.myLine = Chart.Line(ctx5, {
            data: lineChartData5,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'US ARPU'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**INTL ARPU GRAPH**
        var ctx6 = document.getElementById('arpuINTL').getContext('2d');
        window.myLine = Chart.Line(ctx6, {
            data: lineChartData6,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Intl ARPU'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**US REV GRAPH**
        var ctx7 = document.getElementById('revUS').getContext('2d');
        window.myLine = Chart.Line(ctx7, {
            data: lineChartData7,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'US Revenue'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**INTL REV GRAPH**
        var ctx8 = document.getElementById('revINTL').getContext('2d');
        window.myLine = Chart.Line(ctx8, {
            data: lineChartData8,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Intl Revenue'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**US CONTRIBUTION PROFIT GRAPH**
        var ctx9 = document.getElementById('contProfitUS').getContext('2d');
        window.myLine = Chart.Line(ctx9, {
            data: lineChartData9,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'US Contribution Profit'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
        //**INTL CONTRIBUTION PROFIT GRAPH**
        var ctx10 = document.getElementById('contProfitINTL').getContext('2d');
        window.myLine = Chart.Line(ctx10, {
            data: lineChartData10,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Intl Contribution Profit'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
    };

}

function AjaxFailed(result) {
    alert("The request failed.");
    alert(result.status + ' ' + result.statusText);
}