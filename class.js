//class Movie
class Movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}
setRating(rat){
         if(this.rating === null){
    this.rating=PG;
         }
         this.rating=PG;
}
getDetails(){
    return(`The name of movie ${this.title} by ${this.studio} got rating of ${this.rating}`);
}
}
let movie1=new Movie("Casino Royale","Eon Productions","PG13");
let movie2=new Movie("Spiderman","KS Productions");
let movie3=new Movie("Avatar","Fox Productios","R");
console.log(movie2.getDetails());


//Write a "person" class to hold all the details
var a=[];
class Person{
    constructor(Name,age,profession,company){
        this.Name=Name;
        this.age=age;
        this.profession=profession;
        this.company=company;
    }
    getDetails(){
        return(`The name of person ${this.Name} with age of ${this.age} was a ${this.profession} at ${this.company}`)
    }
}
let person1=new Person("Ravi","28","Engineer","chennai");
let person2=new Person("Sweety","30","doctor","bangalore");
let person3=new Person("Swatha","32","pilot","chennai");
console.log(person2.getDetails());
a[0]=["Ravi","28","Engineer","chennai"];
a[1]=["Sweety","30","doctor","bangalore"];
a[2]=["Swatha","32","pilot","chennai"];
for(let i=0; i<a.length;i++){
console.log(a[i]);
}

//write a class to calculate the uber price
class Uber{
    constructor(distance,waitingperiod,rate){
    this.distance=distance;
    this.waitingperiod=waitingperiod;
    this.rate=rate;
}
setDistance(dist){
    this.distance=dist;
}
getTravelDetails(){
    return(`the distance of the ride is ${this.distance} with waiting period of ${this.waitingperiod} and rate of ${this.rate}`);

}
getPrice(){
    if(this.distance>= 100){
    let totalPrice=((this.distance*this.rate)+(this.waitingperiod*5));
 let offerPrice= totalPrice*(100-10)/100; //10% offer for more than distance 100 km
    return offerPrice;
}
else{
    let totalPrice=(this.distance*this.rate)+(this.waitingperiod*5);
    return totalPrice;
}
}
}
let customer1=new Uber(60,20,25);
let customer2=new Uber(100,10,25);
let customer3=new Uber(120,20,25);
console.log(customer2.getTravelDetails());
console.log(customer3.getPrice());
console.log(customer1.getPrice());