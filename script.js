$(document).ready(function () {
  var dis = document.querySelector("#currentDay");
  var curtime = dayjs().format("dddd, MMMMM, YYYY, h:mm:ss");
  dis.textContent = curtime;


$(".saveBtn").click(function (event) {event.preventDefault();
  var act = $(this).siblings("description").val()
  var time = $(this).parent ().attr("id").split("-")[1];
  localStorage.setItem(time, act)})
  
  
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
    
  } )

$("#hour-06 .time-b").val(localStorage.getItem("06"));
$("#hour-07 .time-b").val(localStorage.getItem("07"));
$("#hour-08 .time-b").val(localStorage.getItem("08"));
$("#hour-09 .time-b").val(localStorage.getItem("09"));
$("#hour-10 .time-b").val(localStorage.getItem("10"));
$("#hour-11 .time-b").val(localStorage.getItem("11"));
$("#hour-12 .time-b").val(localStorage.getItem("12"));
$("#hour-13 .time-b").val(localStorage.getItem("13"));
$("#hour-14 .time-b").val(localStorage.getItem("14"));
$("#hour-15 .time-b").val(localStorage.getItem("15"));
$("#hour-16 .time-b").val(localStorage.getItem("16"));
$("#hour-17 .time-b").val(localStorage.getItem("17"));
$("#hour-18 .time-b").val(localStorage.getItem("18"));
$("#hour-19 .time-b").val(localStorage.getItem("19"));
$("#hour-20 .time-b").val(localStorage.getItem("20"));
$("#hour-21 .time-b").val(localStorage.getItem("21"));
$("#hour-22 .time-b").val(localStorage.getItem("22"));
$("#hour-23 .time-b").val(localStorage.getItem("23"));
})
