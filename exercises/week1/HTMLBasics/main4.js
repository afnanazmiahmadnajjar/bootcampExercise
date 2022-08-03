const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
let obj={}
//for(let name of names){
    //for(let age of ages){
     /*   for (let i = 0; i < 2; i++) {
            for (let j= 0; j<2; j++) {
                let name =names[i];
                let age =ages[j];
                obj['name'] =name;
                 obj['age'] =age;
    }
    people.push(obj);
}
console.log(people)*/
for(let index in names)
{
    people.push({name:names[index],age:ages[index]})
}
console.log(people)