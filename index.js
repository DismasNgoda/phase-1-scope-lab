// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'Initial value';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob'; 
}
setBestCustomer(bestCustomer);

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
overwriteBestCustomer(bestCustomer);

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'new value';
}
changeLeastFavoriteCustomer(leastFavoriteCustomer);