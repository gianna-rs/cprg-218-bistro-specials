shake.addEventListener("click", function () {
  let response = Math.random();
  response = Math.floor(Math.random() * 11);
  console.log(response);
  if (response == 0) {
    answer.innerHTML = "Ask again later";
  }
  if (response == 1) {
    answer.innerHTML = "No";
  }
  if (response == 2) {
    answer.innerHTML = "Yes";
  }
});
