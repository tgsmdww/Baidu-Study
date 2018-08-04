class Restaurant{
   constructor(cash, seats, staff){
       this.cash = cash;
       this.seats = seats;
       this.staff = staff;
   } 

   hire(obj){
       this.staff = [...this.staff, obj.name];
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

    order(){//点菜

    }   

    eat(){//吃

    }
}

class Dishes{
    constructor(name, cost, value){
        this.name = name;
        this.cost = cost;
        this.value = value;
    }
}


let ifeRestaurant = new Restaurant('1000000',20,[]);

var newCook = new Cook(null,"Tony",10000);
console.log(newCook)
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);
ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);


