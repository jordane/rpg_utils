function getEffect(number) {
    $.ajax({
        url: '/static/wonders/' + number + ".html",
        type: 'GET',
        async: true,
        dataType: 'html',
        success: function (data, textStatus, XMLHttpRequest) {
            var div = $('#text');
            div.append(data);
        },
        error: function() {
            var div = $('#text');
            div.append("<p>Unable to get effect</p>");
        }
        });
    }



$(document).ready(function() {
    var number = Math.floor(Math.random()*10000 + 1);
    getEffect(number);
});
