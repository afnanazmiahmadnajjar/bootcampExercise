let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018
let result=currentYear -yearOfTeslaPurchase
if (boughtTesla &&isUSCitizen){
if(result>=4){
    let question1= prompt("whether the customer would like an upgrade?")
    console.log(question1)

}else{
    let question2= prompt("Are you satisfied with the purchase of the car?")
    console.log(question2) 
}


}
else if (boughtTesla&&!isUSCitizen){
    let question3= prompt("Do you want to move to America?")
    console.log(question3) 
}
else {
    let question3= prompt("Do you want to buy a car?")
    console.log(question3)
}