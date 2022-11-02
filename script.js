const btn1 = document.querySelector(".men-direct");
const btn2 = document.querySelector(".women-direct");
const btn3 = document.querySelector(".shoe-direct");
const btn9 = document.querySelector(".con-direct");
const btn4 = document.querySelector("#men");
const btn5 = document.querySelector("#women");
const btn6 = document.querySelector(".men-contact-direct");
const btn7 = document.querySelector(".women-contact-direct");
const btn8 = document.querySelector(".shoe-contact-direct");

const btn_sub = document.querySelector("#sub");

const men = document.querySelector(".mens");
const women = document.querySelector(".womens");
const shoes = document.querySelector(".shoe");
const contact = document.querySelector(".contact");

btn1.addEventListener("click", function () {
  men.scrollIntoView({ behavior: "smooth" });
});
btn2.addEventListener("click", function () {
  women.scrollIntoView({ behavior: "smooth" });
});
btn3.addEventListener("click", function () {
  shoes.scrollIntoView({ behavior: "smooth" });
});
btn4.addEventListener("click", function (e) {
  men.scrollIntoView({ behavior: "smooth" });
});
btn5.addEventListener("click", function (e) {
  women.scrollIntoView({ behavior: "smooth" });
});
btn6.addEventListener("click", function (e) {
  contact.scrollIntoView({ behavior: "smooth" });
});
btn7.addEventListener("click", function (e) {
  contact.scrollIntoView({ behavior: "smooth" });
});
btn8.addEventListener("click", function (e) {
  contact.scrollIntoView({ behavior: "smooth" });
});
btn9.addEventListener("click", function (e) {
  contact.scrollIntoView({ behavior: "smooth" });
});

btn_sub.addEventListener("click", function (e) {
  alert("Your Order placed Successfully");
});
