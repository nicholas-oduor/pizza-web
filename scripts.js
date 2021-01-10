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
            if (this.toppings === "pancetta") {
                return 150;
            } else if (this.toppings === "mushroom") {
                return 120;
            } else {
                return 180;
            }
        } else if (this.size === "medium") {
            if (this.toppings === "pancetta") {
                return 100;
            } else if (this.toppings === "mushroom") {
                return 80;
            } else {
                return 140;
            }
        } else {
            if (this.topping === "pancetta") {
                return 80;
            } else if (this.toppings === "mushroom") {
                return 50;
            } else {
                return 100;
            }
        }
    };
    Pizza.prototype.getCrustPrice = function () {
        if (this.crust === "pepperoni") {
            return 100;
        } else {
            return 0;
        }
    };
    Pizza.prototype.myTypePrice = function () {
        if (this.size === "large") {
            if (this.type === "Veg Tikka") {
                return 1200;
            } else if (this.type === "Periperi") {
                return 1300;
            } else if (this.type === "Hawaiian") {
                return 1100;
            } else {
                return 900;
            }
