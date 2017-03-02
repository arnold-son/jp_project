$('#step1').submit(function(event){
    if ($("#userp1").val() == $("#p1").val()) {
        $("#msg").text("Good job!").show();
        return;
    }

    $("#msg").text("WRONG!").show().fadeOut(3000)
    event.preventDefault();
});

$('#step2').submit(function(event){
    if ($("#userp1").val() == $("#p1").val() && $("#userp2").val() == $("#p2").val()) {
        $("#msg").text("Good job!").show();
        return;
    }

    $("#msg").text("WRONG!").show().fadeOut(3000)
    event.preventDefault();
});

$('#step3').submit(function(event){
    if ($("#userp1").val() == $("#p1").val() && $("#userp2").val() == $("#p2").val() && $("#userp3").val() == $("#p3").val()) {
        $("#msg").text("Good job!").show();
        return;
    }

    $("#msg").text("WRONG!").show().fadeOut(3000)
    event.preventDefault();
});

$('#step4').submit(function(event){
    if ($("#userp3").val() == $("#p3").val()) {
        $("#msg").text("Good job!").show();
        return;
    }

    $("#msg").text("WRONG!").show().fadeOut(3000)
    event.preventDefault();
});

$('#step5').submit(function(event){
    if ($("#userp1").val() == $("#p1").val() && $("#userp2").val() == $("#p2").val() && $("#userp3").val() == $("#p3").val()) {
        $("#msg").text("Good job!").show();
        return;
    }

    $("#msg").text("WRONG!").show().fadeOut(3000)
    event.preventDefault();
});

$("#SKIPcheck").click(function(event){
    if ($("#userp1").val() == $("#p1").val() && $("#userp2").val() == $("#p2").val() && $("#userp3").val() == $("#p3").val()) {
        $(".hit").show();
    }
    else{
        $("#msg").text("WRONG!").show().fadeOut(3000)
    }
});
$("#hit").click(function(event){
        location.reload();
});
