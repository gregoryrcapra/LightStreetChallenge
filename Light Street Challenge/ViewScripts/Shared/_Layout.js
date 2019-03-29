$(document).ready(function () {
    var timestamp = Date.now()
    $.ajax({
        url: "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NFLX&apikey=CPAMZBDHDWV5FKG1?"+timestamp.toString(),
        type: "GET",
        success: function (resp) {
            var globalQuoteObject = resp
            const price = globalQuoteObject["Global Quote"]["05. price"]
            const change = globalQuoteObject["Global Quote"]["09. change"]
            const percChange = globalQuoteObject["Global Quote"]["10. change percent"]
            
            if (change.startsWith("-")) {
                $("#delta").css({ color: "red" })
                $("#arrowIcon").attr("src", "../assets/img/red_down_arrow.png?" + timestamp.toString())
            }
            else {
                $("#delta").css({ color: "green" })
                $("#arrowIcon").attr("src", "../assets/img/green_up_arrow.png?" + timestamp.toString())
            }
            $("#currentPrice").text(price)
            $("#delta").text(change + " (" + percChange + ")")

        },
        error: AjaxFailed
    })

    $.ajax({
        url: "https://cloud.iexapis.com/beta/stock/nflx/stats?token=pk_65461f82c0e64c3fa80e717ae12507fc",
        type: "GET",
        success: function (resp) {
            var keyStatsObject = resp
            const marketCap = abbreviateNumber(keyStatsObject["marketcap"])
            const peRatio = parseFloat(keyStatsObject["peRatio"]).toFixed(2)
            const nextEarningsDate = keyStatsObject["nextEarningsDate"]
            const exDividendDate = keyStatsObject["exDividendDate"]
            const week52High = keyStatsObject["week52high"]
            const week52Low = keyStatsObject["week52low"]
            const sharesOutstanding = abbreviateNumber(keyStatsObject["sharesOutstanding"])

            if (marketCap) {
                $("#mktCap").text("Market Cap:   " + marketCap)
            }
            else {
                $("#mktCap").text("Market Cap:   n/a")
            }

            if (peRatio) {
                $("#peRatio").text("PE Ratio:   " + peRatio)
            }
            else {
                $("#peRatio").text("PE Ratio:   n/a")
            }

            if (nextEarningsDate) {
                $("#nxtEarnDate").text("Next Earnings Date:   " + nextEarningsDate)
            }
            else {
                $("#nxtEarnDate").text("Next Earnings Date:   n/a")
            }

            if (exDividendDate) {
                $("#nxtDivDate").text("Ex Dividend Date:   " + exDividendDate)
            }
            else {
                $("#nxtDivDate").text("Ex Dividend Date:   n/a")
            }

            if (week52High) {
                $("#week52High").text("52 Week High:   " + week52High)
            }
            else {
                $("#week52High").text("52 Week High:   n/a")
            }

            if (week52Low) {
                $("#week52Low").text("52 Week Low:   " + week52Low)
            }
            else {
                $("#week52Low").text("52 Week Low:   n/a")
            }

            if (sharesOutstanding) {
                $("#outstandingShares").text("Outstanding Shares:   " + sharesOutstanding)
            }
            else {
                $("#outstandingShares").text("Outstanding Shares:   n/a")
            }

        },
        error: AjaxFailed
    })

    var pageTitle = window.location.pathname.replace(/^.*\/([^/]*)/, "$1");
    var element = document.getElementById(pageTitle);
    $(element).closest("ul").addClass("open");
    $(element).addClass("active");
});

function AjaxFailed(result) {
    alert("The request failed.");
    alert(result.status + ' ' + result.statusText);
}

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0) shortNum = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}