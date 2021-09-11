$(function() {
    console.log("content function");
    $(document).on("click", "#discussion_bucket a", function(){
        window.open(this.href, "_blank");
        return false;
    });
});