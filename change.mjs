export function change(amount) {
var possibleChange = [1000,500,200,100,50,20,10,5,2,1];
var result = [];

possibleChange.forEach(bill => {
    var numBill = Math.floor(amount/bill);
    amount = amount % bill;
    for (var i = 0; i < numBill; i++){
      result.push(bill);
    }
  })
  return result;
}
