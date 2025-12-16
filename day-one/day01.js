// document.getElementById("js-someid").innerText = "I am some Div";

const someid = document.getElementById("js-someid");
document.addEventListener("DOMContentLoaded", () => {
  someid.addEventListener("click", () => {
    someid.innerText = "Some id text";
  });
});
