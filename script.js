$(document).ready(function () {
  var dis = document.querySelector("#currentDay");
  var curtime = dayjs(new Date()).format("dddd, MMMM D YYYY, h:mm:ss");
  dis.textContent = curtime;


$(".saveBtn").on("click", function (){
  var time = $(this).parent().attr("id");
  var act = $(this).siblings(".description").val();
  localStorage.setItem(time, act);});

$(".time-b").each(function (){var block = $(this).attr("id").split("-")[1];
  var curr = dayjs().hour();
  if (curr == block){
    $(this).addClass("present");
    $(this).children("description").addClass("white-text");}
    else if(curr > block){
      $(this).removeClass("present");
      $(this).addClass("past");}
    else if(curr < block){
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    
  } )})
  
  var hour06= localStorage.getItem("hour-06");
  var hour07 = localStorage.getItem("hour-07");
  var hour08 = localStorage.getItem("hour-08");
  var hour09 = localStorage.getItem("hour-09");
  var hour10 = localStorage.getItem("hour-10");
  var hour11 = localStorage.getItem("hour-11");
  var hour12 = localStorage.getItem("hour-12");
  var hour13 = localStorage.getItem("hour-13");
  var hour14 = localStorage.getItem("hour-14");
  var hour15 = localStorage.getItem("hour-15");
  var hour16 = localStorage.getItem("hour-16");
  var hour17 = localStorage.getItem("hour-17");
  var hour18 = localStorage.getItem("hour-18");
  var hour19 = localStorage.getItem("hour-19");
  var hour20 = localStorage.getItem("hour-20");
  var hour21 = localStorage.getItem("hour-21");
  var hour22 = localStorage.getItem("hour-22");
  var hour23 = localStorage.getItem("hour-23");
  
  $("#hour-06 .description").val(hour06);
  $("#hour-07 .description").val(hour07);
  $("#hour-08 .description").val(hour08)
  $("#hour-09 .description").val(hour09);
  $("#hour-10 .description").val(hour10);
  $("#hour-11 .description").val(hour11);
  $("#hour-12 .description").val(hour12);
  $("#hour-13 .description").val(hour13);
  $("#hour-14 .description").val(hour14);
  $("#hour-15 .description").val(hour15);
  $("#hour-16 .description").val(hour16);
  $("#hour-17 .description").val(hour17);
  $("#hour-18 .description").val(hour18);
  $("#hour-19 .description").val(hour19);
  $("#hour-20 .description").val(hour20);
  $("#hour-21 .description").val(hour21);
  $("#hour-22 .description").val(hour22);
  $("#hour-23 .description").val(hour23);

