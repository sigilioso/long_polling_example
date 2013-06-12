
function update() {
    $.ajax({
        url: '/data-update',
        success:  function(data) {
            $('#dateChange').text(data.date);
            $('#content').text(data.content);
            update();
        },
        timeout: 500000 //If timeout is reached run again
    });
}

function load() {
    $.ajax({
        url: '/data',
        success: function(data) {
            $('#content').text(data.content);
            update();
        }
    });
}

$(document).ready(function() {
    load();
});
