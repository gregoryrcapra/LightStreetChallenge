$(document).ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingTop = 80;

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.simplifiedProcessing = true;
    series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

    chart.cursor = new am4charts.XYCursor();

    // a separate series for scrollbar
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.valueY = "close";
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;

    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;

    $.ajax({
        url: "https://cloud.iexapis.com/beta/stock/nflx/chart/1y?token=pk_65461f82c0e64c3fa80e717ae12507fc",
        type: "GET",
        success: function (resp) {
            var dailyPriceObject = resp
            var chartDailyPriceObject = []

            for (var i = 0; i < dailyPriceObject.length; i++) {
                var current = dailyPriceObject[i];
                var chartObject = { "date": current.date, "open": current.open, "high": current.high, "low": current.low, "close": current.close }
                chartDailyPriceObject.push(chartObject)
            }

            chart.data = chartDailyPriceObject

        },
        error: AjaxFailed
    })

});

function AjaxFailed(result) {
    alert("The request failed.");
    alert(result.status + ' ' + result.statusText);
}