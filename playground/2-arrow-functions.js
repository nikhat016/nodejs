//const square=function(x){
  //  return x*x;
//}
/*const square=(x)=>{
    return x*x
}*/
//const square=(x)=>x*x
//console.log(square(2))
const event={
    name:'Birthday',
    guests: ['nik','shab','lah'],
    printGuest(){
        
        console.log('Guests for'+this.name)
        this.guests.forEach((guest)=>{
            console.log(guest+'is attending '+this.name)
        })
    }
}
event.printGuest()
