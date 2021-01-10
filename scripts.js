$(document).ready(function () {
function Pizza(type, crust, toppings, size) {
    this.type = type;
    this.crust = crust;
    this.toppings = toppings;
    this.size = size;
}
let totalAmount = 0;
    let newOrder = [];

    Pizza.prototype.myToppingsPrice = function () {
        if (this.size === "large") {
            if (this.toppings === "tomato") {
                return 150;
            } else if (this.toppings === "onions") {
                return 120;
            } else {
                return 180;
            }