$(document).ready(function () {// load html first and then css.
    //show the present date/time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // save button click listener function for user-input/time stamp
    $(".saveButton").on("click", function () {
        //capture the nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in the local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from local storage - do this for each hour of the workday
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    function getHours() {
        //get present number of hours.
        var presHour = moment().hour();

        // loop over each time block
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourBlock, presHour)

            //use if/else statement to see if time has passed
            if (hourBlock < presHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === presHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    getHours();
})
