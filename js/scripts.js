// Business Logic
function ToDo(task) {
  this.task = task;
  // this.completed = completed;
}


// User Interface Logic
$(document).ready(function() {
  $("#tasks").html(localStorage.getItem("taskItems"));
  $("form.toDoList").submit(function(event) {
    var taskInput = $(".task").val();

    var newTask = new ToDo(taskInput);

    $("ul#tasks").append("<li><input class='checkbox' type='checkbox'><span class='todo'>" + newTask.task + "</span><a class='remove'>x</a><hr></li>");

    event.preventDefault();
  });

  // CHECKBOX TWEAKS
  $(document).on("change", ".checkbox", function() {  // Remember, we're working with dynamic element here!
// 8. keep checkbox checked/unchecked on refresh: if/else, "checked" is an attribute
      if ($(this).attr("checked")) {  // IF attribute "checked" is present??
          $(this).removeAttr("checked");  // then remove the attribute from input
      } else {
        $(this).attr("checked", "checked");  // otherwise check the checked attrib.
      }
      $(this).parent().toggleClass("completed"); // each time clicked, it swaps completed
// 7d. save checkbox action to localStorage
      localStorage.setItem("taskItems", $("#tasks").html());
  });

  $(document).on("click", ".remove", function() {
    $(this).parent().slideUp( 900, function() {  // animation slideUp really sloww
        $(this).remove();
// 7c. save to localStorage: .setItem("key", $("value")
        localStorage.setItem("taskItems", $("#tasks").html());
    });
  });
});
