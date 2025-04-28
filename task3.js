let principal = 1000; 
let rate = 0.05;     
let years = 3; 

function Interest(principal,rate,years){
        if(principal<=0||rate<=0||years<=0){
            return `Enterings must be positive`
        }
        let totalAmount =principal*(1+rate)**years;
        let Interest= totalAmount-principal

        return {
            finalAmount: totalAmount.toFixed(2),
            Interest: Interest.toFixed(2)
          };
}
let results = Interest(1000, 0.05, 3);
console.log("Results:", results);