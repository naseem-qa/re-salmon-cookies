`use strict`;
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




// var footerRow;
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


$('#table').append(table);

var table = $('<table>');
table.append('<td>' + '' + '</td>');

for (var i = 0; i < hours.length; i++) {
    table.append('<td>' + hours[i] + '</td>');
}
table.append('<td>' + 'Daily Location Total' + '</td>');


$('#table').append(table);

// $('#table').append(table);
// var table = $('<table></table>')
// let tRow=$('<tr></tr>');
// let tHeader=$('<th><th>');
// let tData=$('<td><td>');


// function addElement(tagName, container, text) {
//     var element = document.createElement(tagName);
//     container.appendChild(element);

//     if (text) {
//         element.textContent = text;
//     }

//     return element;
// }


// ShopBranch.prototype.row = function (table) {

//     var newLocationRow = addElement('tr', table);

//     addElement('td', newLocationRow, this.location);

//     for (var i = 0; i < this.hourlySales.length; i++) {
//         var currentHourlySales = this.hourlySales[i];
//         addElement('td', newLocationRow, currentHourlySales);
//     }

//     addElement('td', newLocationRow, this.dailySale);


// }
// unction renderHeaderRow(table) {
//     var tr = document.createElement('tr');
//     table.appendChild(tr);

//     var th = document.createElement('th');
//     tr.appendChild(th);
//     tRow.append(tData)

//     for (var i = 0; i < hours.length; i++) {

//         th = document.createElement('th');
//         tr.appendChild(th);
//         th.textContent = hours[i];
//     }
//     th = document.createElement('th');
//     tr.appendChild(th);
//     th.textContent = 'Daily Location Total';
// }
// renderHeaderRow(table);

// ShopBranch.prototype.render = function (table) {

//     var tr = document.createElement('tr');
//     table.appendChild(tr);

//     var td = document.createElement('td');
//     tr.appendChild(td);
//     td.textContent = this.location;

//     for (var i = 0; i < hours.length; i++) {
//         td = document.createElement('td');
//         tr.appendChild(td);
//         td.textContent = this.hourlySales[i];
//     }
//    var td = document.createElement('td');
//     tr.appendChild(td);
//     td.textContent = this.dailySales;
// }



// function renderFooterRow(table) {
//     var tr = document.createElement('tr');
//     footerRow = tr;

//     table.appendChild(tr);

//     var td = document.createElement('td');
//     tr.appendChild(td);
//     td.textContent = 'Total';
//     var totalTotal = 0;

//     for (var k = 0; k < hours.length; k++) {
//         var td = document.createElement('td');
//         tr.appendChild(td);

//         var sum = 0;

//         for (var j = 0; j < shops.length; j++) {
//             var shoptotal = shops[j];
//             sum += shoptotal.hourlySales[k];

//         }
//         td.textContent = sum;
//         totalTotal += sum;
//     }

//     td = document.createElement('td');
//     tr.appendChild(td);
//     td.textContent = totalTotal;
// };





var shops = []

shops.push(new ShopBranch('Seattle', 23, 65, 6.5));
shops.push(new ShopBranch('Tokyo', 3, 24, 1.2));
shops.push(new ShopBranch('Dubai', 11, 38, 3.7));
shops.push(new ShopBranch('Paris', 20, 38, 2.3));
shops.push(new ShopBranch('Lima', 2, 16, 4.6));




for (var i = 0; i < shops.length; i++) {
    var shop = shops[i];
    shop.render(table);
}

// renderFooterRow(table);

////////////////////////////////
// function submitHandler(event) {
//     event.preventDefault();

//     var location = event.target.location.value;
//     var min = parseInt(event.target.min.value);
//     var max = parseInt(event.target.max.value);
//     var avg = parseFloat(event.target.avg.value);

//     var newShop = new ShopBranch(location, min, max, avg);

//     shops.push(newShop);

//     table.removeChild(footerRow);

//     newShop.row(table);

//     renderFooterRow(table);

// };
// var form = document.getElementById('add');
// form.addEventListener('submit', submitHandler);