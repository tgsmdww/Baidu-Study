class Restaurant{
   constructor(cash, seats, staff){
       this.cash = cash;
       this.seats = seats;
       this.staff = staff;
   } 

   hire(obj){
       this.staff = [...this.staff, obj.name];
       console.log("just hire "+obj.name);
   }
   fire(obj){
       let index = this.staff.indexOf(obj.name);
       if(index > -1){
           this.staff.splice(index,1);
       }
   }
}

class Staff{
    constructor(ID, name, salary){
        this.ID = ID;
        this.name = name;
        this.salary = salary;
    }


}

class Server extends Staff{
    constructor(ID, name, salary){
        super(ID, name, salary);
    }

    doWork(args){
        if(args instanceof Array){//点菜

        }
        else{//上菜

        }
    }

}

class Cook extends Staff{
    constructor(ID, name, salary){
        super(ID, name, salary);
    }

    doWork(menu){

    }
}

class Customer{
    constructor(ID,dishes){
        this.ID = ID;
        this.dishes = dishes;

    }
    order(dish){//点菜
        this.dishes = [...this.dishes,dish.name]
        console.log('order '+dish.name);
    }   

    eat(dish){//吃
        let index = this.dishes.indexOf(dish.name);
       if(index > -1){
           this.dishes.splice(index,1);
       }
        console.log('Eating '+dish.name);
    }
}

class Dishes{
    constructor(name, cost, value){
        this.name = name;
        this.cost = cost;
        this.value = value;
    }
}


let ifeRestaurant = new Restaurant('1000000',1,[]);
let cook = new Cook(1,'H',1000);
let server = new Server(2,'Z',500);
let dish1 = new Dishes('fish',5,10);
let dish2 = new Dishes('nut',1,2);
let dish3 = new Dishes('meat',15,25);
let c1 = new Customer(1,[]);
let c2 = new Customer(2,[]);


const customers = [c1,c2];
const dishes = [dish1,dish2];

ifeRestaurant.hire(cook);

ifeRestaurant.hire(server);

function random(length){
    var num = Math.floor(Math.random()*length);
    return num;
}

function orders(customers,dishes){
    let clength = customers.length;
    let dlength = dishes.length;

    for(let i = 0; i < clength; i++)
    {
        let dish = dishes[random(dlength)];
        customers[i].order(dish);
        customers[i].eat(dish);
        while(customers[i].dishes.length > 0){
        }
        console.log(customers[i].ID + " left.");

    }
}

orders(customers, dishes);




