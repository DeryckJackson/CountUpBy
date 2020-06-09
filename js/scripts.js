function countToBy(countTo, countBy) {
  for (let index= 0; index < countTo; index += countBy) {
    $(".Output").append(index + " ");
  }
}


$(document).ready(function() {
  $("#Counter").submit(function(event) {
  event.preventDefault();
  const countTo = parseInt($("#CountTo").val());
  const countBy = parseInt($("#CountBy").val());
  countToBy(countTo, countBy);
  });
});