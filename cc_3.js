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

//Task #3
//Creates an object named employee with  sepcifed properties  
let employee = {
    name: "Ryan Johnson",
    role: "CFO",
    peformanceScore: 9,
    isActive: true,
}
// updates employee performancescore property to 10
employee.peformanceScore = 10
// adds employee property qith a boolean value
employee.promotionEligible = true
console.log(employee)

//Task #4
// Creates an array countaining the 3 objecty
let feedback =[{
    customerName: "Ron",
    feedbackText: "I had a horrible time here!",
    rating: 1,
},
{
    customerName: "Snape",
    feedbackText: "I love this place!",
    rating: 10,
},
{
    customerName: "Harry",
    feedbackText: "I liked my experience here.",
    rating: 4,
}
]
// adds a new feedback object to the array
feedback.push({
    customerName: "Voldermort",
    feedbackText: "AVADA KADAVERA",
    rating: 10
})
console.log(feedback)