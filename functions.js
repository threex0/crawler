$( document ).ready(function() {
    console.log("Jquery Loaded");
    $('#add-button').click(function(){
        $('#add-div').show();
    });

    $('#edit-button').click(function(){
        alert("HELLO 2");
    });

    $('#delete-button').click(function(){
        alert("HELLO 3");
    });
});