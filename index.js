// First class Story that is inherited by legend and fiction
class Story{
    constructor(name,length,moralLesson,ageGroup){
        this.name=name
        this.length=length;
        this.moralLesson=moralLesson;
        this.ageGroup=ageGroup;
    }
    tellStory(){
        return `The story named ${this.name} narrated to ${this.ageGroup} aged-children and has ${this.length}length with ${this.moralLesson}lesson`
    }


}
const story=new Story('Big giant', '2 pages', 'Courage', '12')
console.log(story.tellStory())








class Legend extends Story{
   constructor(name,length,moralLesson,ageGroup,beliefs){
   super(name,length,moralLesson,ageGroup)
   this.beliefs=beliefs
   }
   tellStory(){
       return`The story ${this.name} is believed to have ${this.beliefs}`
   }
 
}
const result=new Legend('Lioness Kangwa', '1page', 'Bravery', '10','Legendary beliefs')
console.log(result.tellStory())


class Fiction extends Story{
   constructor(name,length,moralLesson,ageGroup,genre){
       super(name,length,moralLesson,ageGroup)
       this.genre=genre
       }
       tellStory(){
           return `Story ${this.name} is of ${this.genre} genre`
       }


}
const fiction=new Fiction('Chupwa chupwa', '1page', 'Bravery', '10','fantasy')
console.log(fiction.tellStory())








// Second class Story teller
class StoryTeller{
    constructor(storyteller_name,story_title,ageGroup,story_type){
        this.storyteller_name=storyteller_name;
        this.ageGroup=ageGroup;
        this.story_title=story_title;
        this.story_type=story_type
    }
    makeStory(){
        return`The story of ${this.story_title} is of ${this.story_type} is narrated by ${this.storyteller_name} to ${this.ageGroup} old children`
    }
 }
 const storyteller=new StoryTeller("Kelly","Big Giant","12 years","Drama")
 console.log(storyteller.makeStory())
 
 
 
 
 class ChildStoryTeller extends StoryTeller{
    constructor(storyteller_name,story_title,ageGroup,story_type){
        super(storyteller_name,story_title,ageGroup,story_type)
     ;
    }
 
 
    makeStory(){
        return`The story of ${this.story_title} is of ${this.story_type} is narrated by ${this.storyteller_name} to ${this.ageGroup} aged-children`
    }
 }
 const childstoryteller=new ChildStoryTeller("Dennis","The hyena","Fable","8")
 console.log(childstoryteller.makeStory())
 
 
 // Third class Translator
 class Translator{
    constructor(language,story_title){
       this.language=language;
       this.story_title=story_title
    }
    translateStory() {
        const translatedStory=""
        if(`${this.language}=="English"`){
            translatedStory=`${this.story_title} will be translated to ${this.language}`
        }
        else if(`${this.story_title} will be translated to ${this.language}`){
            return translatedStory
        }
      }
    }
    const translator=new Translator("Kiswahili","Big Giant")
    console.log(translator.translateStory())



    
    
    


// QUESTION2
class Recipe{
    constructor(foodName,ingredients,time,method,info){
        this.foodName=foodName;
        this.ingredients=ingredients;
        this.time=time;
        this.method=method;
        this.info=info;
    }
    showRecipe(){
        return `${this.foodName} has ${this.info} as nutritional value`
    }
 }
 const result2=new Recipe("Ugali", "Flour", "30mins", "Stirr", "Starch");
 console.log(result2.showRecipe())
 
 
 
 
 
 
 
 
 class MorrocanRecipe extends Recipe{
    constructor(foodName,ingredients,time,method,info,flavour){
        super(foodName,ingredients,time,method,info);
        this.flavour=flavour
    }
    showRecipe(){
        return `${this.foodName} requires ${this.flavour} flavour`
    }
 }
 const result3=new MorrocanRecipe("Tagine", "Flour", "1hour", "soak", "starch", "hot spicy")
 console.log(result3.showRecipe());
 
 
 class EthiopianRecipe extends Recipe{
    constructor(foodName,ingredients,time,method,info,flavour,fermentTime){
        super(foodName,ingredients,time,method,info,flavour);
        this.fermentTime=fermentTime;
    }
    showRecipe(){
        return `${this.foodName} needs to be fermented for ${this.fermentTime}`
    }
 }
 const result4=new EthiopianRecipe("Injera", "flour", "1hour", "Baking", "starch", "sour", "2days")
 console.log(result4.showRecipe())
 
 
 class NigerianRecipe extends Recipe{
    constructor(foodName,ingredients,time,method,info,flavour,cassavaQuantity){
        super(foodName,ingredients,time,method,info,flavour);
        this.cassavaQuantity=cassavaQuantity;
    }
showRecipe(){
    return ` Family ${this.foodName} requires of ${this.cassavaQuantity} to feed the whole family`
}   
}
const result5=new NigerianRecipe("Fufu", "cassava", "30mins", "boiling and mashing", "vitamins", "sweet", "1 kg")
console.log(result5.showRecipe())
  


// question 7
class FlightBooking {
    constructor() {
    this.flights = [];
    }
    addFlight(flight) {
    this.flights.push(flight);
    }
    searchFlights(destination, date) {
    let availableFlights = [];
    for (let flight of this.flights) {
    if (flight.destination === destination && flight.date === date) {
    availableFlights.push(flight);
    }
    }
    return availableFlights;
    }
    reserveSeat(flight, passenger) {
    if (flight.availableSeats > 0) {
    flight.availableSeats -= 1;
    flight.passengers.push(passenger);
    return true;
    } else {
    return false;
    }
    }
    generateConfirmation(flight, passenger) {
    let confirmation = `Booking Confirmation\nFlight: ${flight}\nPassenger: ${passenger}`;
    return confirmation;
    }
    }
    class Flight {
    constructor(destination, date, availableSeats) {
    this.destination = destination;
    this.date = date;
    this.availableSeats = availableSeats;
    this.passengers = [];
    }
    toString() {
    return `${this.destination} - ${this.date}`;
    }
}    

















