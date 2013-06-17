/**
 * Simple long polling client based on JQuery
 */

/**
 * Request an update to the server and once it has answered, then update
 * the content and request again.
 * The server is supposed to response when a change has been made on data.
 */
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

/**
 * Perform first data request. After taking this data, just query the
 * server and refresh when answered (via update call).
 */
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
