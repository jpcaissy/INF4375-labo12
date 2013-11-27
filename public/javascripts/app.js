$(document).ready(function() {
    $("#get_all").submit(function(e){
        e.preventDefault();
        $.getJSON("/api/wikis", function(data) {
            $("#result").text(JSON.stringify(data));
        });
    });
    $("#get_id").submit(function(e){
        e.preventDefault();
        $.getJSON("/api/wiki/id/" + $("#id").val(), function(data) {
            $("#result").text(JSON.stringify(data));
        });
    });
    $("#get_title").submit(function(e){
        e.preventDefault();
        $.getJSON("/api/wiki/title/" + $("#title").val(), function(data) {
            $("#result").text(JSON.stringify(data));
        });
    });
    $("#new").submit(function(e){
        e.preventDefault();
        $.post('/api/wiki/', $("new_wiki").val(), function(data) {
            $("#result").text(JSON.stringify(data));
        });
    });
});
