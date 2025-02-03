function showMessage() {

  alert("This is message");
},
showMessage();
function sum(num1,num2 ){
return num1+num2;
},
console.log(sum (5,3));

function toCelcius(f){
return(5/9)*(f-32);
},
console.log("100 fahrenheit eshte e barabarte"+toCelcius(100)+"celcius");





















var car={
  name="polo",
  color="red",
  year="2008",
  kilometers="100,000",
  startEngine:function{}{
    alert={"VROOOOOOOOOOOOOOM"};
  }
};
set kilometers(KM(
  car.setKilometers=100;

  console.log(car.getKilometers)


















  var computer= new Object();
  computer.name = "Lenovo";
  computer.CPU = "intel core i7";
  computer.RAM= "16GB";
  computer.GPU= "Geforce GT730 2GB DUAL DP HP";

  computer.type = function(){
    return this.name + "",""+this.CPU+"","" + this.RAM + "", ""+this.GPU;
  };

  alert(computer.GPU);

  alert(computer.type());
  
  delete computer.GPU;
  
  alert(computer.GPU);



function Computer(name,CPU,ram,GPU){
this.name = name;
this.CPU= CPU;
this.RAM = RAM;
this.GPU = GPU;
}

var computer1 = new Computer("MacBoom Pro","M1 8-core","8GB","5600m GPU");
var computer2 = new Computer("Acer","Intel core i3,","4GB","Integrated");




















































var shtepi = new Object();
shtepi.adresa = "Rruga Maple 123";
shtepi.madhesia = "2000 m²";
shtepi.dhoma = 4;
shtepi.garazhi = "Garazh për 2 makina";


shtepi.përshkruaj = function(){
  return "Adresa: " + this.adresa + ", Madhësia: " + this.madhesia + ", Dhoma: " + this.dhoma + ", Garazhi: " + this.garazhi;
};


alert(shtepi.adresa);
alert(shtepi.përshkruaj());


delete shtepi.garazhi;
alert(shtepi.garazhi);  


function Shtepi(adresa, madhesia, dhoma, garazhi){
  this.adresa = adresa;
  this.madhesia = madhesia;
  this.dhoma = dhoma;
  this.garazhi = garazhi;
}


var shtepi1 = new Shtepi("Rruga Oak 456", "3000 m²", 5, "Garazh për 3 makina");
var shtepi2 = new Shtepi("Rruga Pine 789", "1500 m²", 3, "Garazh për 1 makinë");















































