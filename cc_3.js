// Task #1
// creates an array then adds an item using push and removes the first item using shift
let nums = [1,2,3,4,5];
nums.push(6);
nums.shift() ;
console.log(nums)

// Task #2
//  Creates an array and changes the value of item 3 to 50.
let qty = [10,45,15,25,35,40];
qty[2]= qty[2] + 5;  //Java starts at 0
// sums items in qty array
total_qty = qty.reduce((sum,qty) => sum + qty,0 ); 
console.log("quantities: ",qty);
console.log("Total Quantity: ",total_qty)

