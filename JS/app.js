`use strict`;
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


$('#table').append('<table></table>')

function ShopBranch(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.hourlySales = [];
    this.dailySales = 0;
    this.randomNumberOfCustomersPerHour();
}

ShopBranch.prototype.randomNumberOfCustomersPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        var range = this.max - this.min;
        var randomNumber = Math.ceil((Math.ceil(Math.random() * range + this.min)) * this.avg);
        this.hourlySales.push(randomNumber);
        this.dailySales += randomNumber;
    }
}

ShopBranch.prototype.row = function (table) {


    $('table').append(`<tr class="${this.location}"><td>${this.location}</td></tr>`)

    for (var i = 0; i < hours.length; i++) {
        $(`.${this.location}`).append(`<td>${this.hourlySales[i]}</td>`)

    }

    $(`.${this.location}`).append(`<td>${this.dailySales}</td>`)
}

function renderHeaderRow() {

    $('table').append(`<tr class = "head"><th>***</th></tr>`)

    for (var i = 0; i < hours.length; i++) {
        $('.head').append(`<th>${hours[i]}</th>`)

    }
    $('.head').append(`<th>Daily Location Total</th>`)
}

ShopBranch.prototype.render = function (table) {

    $('table').append(`<tr class="${this.location}"><td>${this.location}</td></tr>`)

    for (var i = 0; i < hours.length; i++) {
        $(`.${this.location}`).append(`<td>${this.hourlySales[i]}</td>`)

    }

    $(`.${this.location}`).append(`<td>${this.dailySales}</td>`)
}

function renderFooterRow(table) {
    $(`table`).append(`<tr class=footer><td>Total </td></tr>`)
    var totalTotal = 0;

    for (var k = 0; k < hours.length; k++) {

        var sum = 0;
        for (var j = 0; j < shops.length; j++) {
            var shoptotal = shops[j];
            sum += shoptotal.hourlySales[k];

        }
        $(`.footer`).append(`<td>${sum}</td>`)
        totalTotal += sum;
    }
    $(`.footer`).append(`<td>${totalTotal}</td>`)

};

var shops = []
shops.push(new ShopBranch('Seattle', 23, 65, 6.5));
shops.push(new ShopBranch('Tokyo', 3, 24, 1.2));
shops.push(new ShopBranch('Dubai', 11, 38, 3.7));
shops.push(new ShopBranch('Paris', 20, 38, 2.3));
shops.push(new ShopBranch('Lima', 2, 16, 4.6));

renderHeaderRow();

for (var i = 0; i < shops.length; i++) {
    var shop = shops[i];
    shop.render();
}

renderFooterRow();

////////////////////////////////

let seen = {}
$('#add').submit(function (event) {
    event.preventDefault();

    let location = event.target.city.value;
    let min = parseInt(event.target.min.value);
    let max = parseInt(event.target.max.value);
    let avg = parseFloat(event.target.averagenew.value);

    let newShop = new ShopBranch(location, min, max, avg);
    shops.push(newShop);

    if (!seen[location]) {
        seen[location] = true
        $(`.footer`).remove();
        newShop.row();
        renderFooterRow();
    } else {
        alert('Try a city does not exist')
    }
});

