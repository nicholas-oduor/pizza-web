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
            if (this.type === "barbecue ") {
                return 1200;
            } else if (this.type === "vergie lovers") {
                return 1300;
            } else if (this.type === "Hawaiian") {
                return 1100;
            } else {
                return 900;
            }


        } else if (this.size === "medium") {
            if (this.type === "barbecue") {
                return 850;
            } else if (this.type === "vergie lovers") {
                return 950;
            } else if (this.type === "Hawaiian") {
                return 850;
            } else {
                return 750;
            }
        } else {
            if (this.type === "barbecue") {
                return 600;
            } else if (this.type === "vergie lovers") {
                return 650;
            } else if (this.type === "Hawaiian") {
                return 750;
            } else {
                return 550;
            }
        }
    }

    Pizza.prototype.myCrustPrice = function () {
        if (this.crust === "pepperoni") {
            return 100;
        } else if (this.crust === "cauliflower") {
            return 50;
        } else {
            return 10;
        }
    }
    Pizza.prototype.myPizzaPrice = function () {
        return this.myCrustPrice() + this.myTypePrice() + this.myToppingsPrice()
    }
    $("#customer-form").submit(function (event) {
        event.preventDefault();
        let customerType = $("#ptype").val();
        let customerCrust = $("#crust").val();
        let customerSize = $("#size").val();
        let customerToppings = $("#toppings").val();
        let newPizza = new Pizza(customerType, customerCrust, customerToppings, customerSize);
        newOrder.push(newPizza);
        $("#ptype").val("");
        $("#crust").val("");
        $("#size").val("");
        $("#toppings").val("");

        totalAmount = 0;

        for (let i = 0; i < newOrder.length; i++) {
            totalAmount += newOrder[i].myPizzaPrice();
        }
        $("#order-summary").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type +
            " - " +
            newPizza.size +
            "  @ " +
            newPizza.myTypePrice() +
            "</th>" +
            "<td>" +
            newPizza.toppings +
            " @ " +
            newPizza.myToppingsPrice() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " @ " +
            newPizza.myCrustPrice() +
            "</td>" +
            "<td>" +
            newPizza.myPizzaPrice() +
            "</td>" +
            "</tr>"
        );
        $("#order-summary").append("");
        if (newOrder.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }

        $("#finalAmount").fadeIn();
        $("#checkout").fadeIn();
        $("#orders-div").fadeIn();

        $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();
    });
    $("#checkout").click(function () {
        $(".checkout-options").show();
    });

    $("#checkout-form").submit(function (event) {
        event.preventDefault();
        let name = $("#name").val();
        let deliveryOption = $("#delivery-option").val();
        customerName = name;
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        $("#checkout").hide();
        $("#finalAmount").empty();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#finalAmount").empty();
            $("#delivery-amount").append(300);
            totalAmount += 300;
            $("#finalAmount").empty();
            $("#finalAmount").empty();
            $("#finalAmount").append(totalAmount);
            $(".finalAmount").show();

            $("#finalAmount").append(totalAmount);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be ready for collection in the next one hour");
        }
    });

    $("#location-form").submit(function (event) {
        event.preventDefault();
        let estateEntered = $("#estate").val();
        let houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        $("#checkout").hide();
        $(".location").hide();
        $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();
        alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hour");
    });
    $("#contacts").submit(function (event) {
        event.preventDefault();
        let name1 = $("#form1").val();
        let email = $("#form2").val();
        let message1 = $("#form3").val();
        alert("Hello! " + name1 + "," + " We have received your message. Thank you for reaching out to us. ");

    });
});