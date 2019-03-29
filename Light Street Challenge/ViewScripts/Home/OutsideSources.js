$(document).ready(function () {

});

function AjaxFailed(result) {
    alert("The request failed.");
    alert(result.status + ' ' + result.statusText);
}