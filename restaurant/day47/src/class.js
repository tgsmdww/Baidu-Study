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

        refreshcash(){
            rescash.innerText = `现金 ${this.cash}`;
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
     
         tellcook(customer, cook){
             return new Promise(resolve=>{
                cook.dishes = customer.dishes;
                console.log("告知厨师菜单");
                resolve();
             })
         }
     
     }
     
     class Cook extends Staff{
         constructor(ID, name, salary,dishes){
             super(ID, name, salary);
             this.dishes = dishes;
         }
     
         async doWork(){
            const dishes = this.dishes;
            console.log(dishes);
            for(const dish of dishes){
                await this.cookadish(dish);
                move(1)
                .then(()=>{
                    if(judge(dish.name) == 1){
                    return seatcustomers[0].eat(dish.name).then(lastdish)
                    }
                    else{
                        move(0);
                        console.log("去端盘");
                        seatcustomers[0].eat(dish.name);
                    }
                })
            }
         }

         cookadish(dish){
            return new Promise(resolve=>{
                let resttime = dish.time;
                let timer = setInterval(()=>{
                    if(resttime <= 0){
                        clearInterval(timer);
                        cookstatus.innerHTML = `已经做完${dish.name}`;
                        resolve(dish.name);
                    }
                    else{
                        resttime -= 0.1;
                        cookstatus.innerHTML = `正在制作${dish.name},剩余时间:${Math.abs(resttime).toFixed(1)}秒`;
                    }
                },100);   
            })
         }

     }
     
     class Customer{
         constructor(ID,status,dishes, ordered = []){
             this.ID = ID;
             this.status = status; 
             this.dishes = dishes;
            this.ordered = ordered;
         }

         refreshstatus(){
                customerstatus.innerHTML = `状态： ${this.status}`;
         }

        orderdish(time){ //点菜
            return new Promise((resolve, reject) =>{
                let resttime = time;
                let timer = setInterval(()=>{
                    if(resttime <= 0){
                        clearInterval(timer);
                        resolve();
                    }
                    else{
                        resttime -= 0.1;
                        customertime.innerHTML = `剩余时间：${Math.abs(resttime).toFixed(1)}秒`;
                    }
                },100);
            })
        }

     
         eat(dish){//吃
            return new Promise(resolve=>{
                let resttime = 3;
                let dishli = document.getElementById(`cus${dish}`);            
                dishli.innerHTML = `${dish} 状态: 正在吃`;
                let timer = setInterval(()=>{
                    if(resttime <= 0){
                        customertime.innerHTML = `剩余时间：0秒` 
                        clearInterval(timer);
                        dishli.innerHTML = `${dish} 状态: 已经吃完`;
                        resolve();
                    }
                    else{
                        resttime -= 0.1;
                        seatcustomers[0].status = `正在享用${dish}`;
                        seatcustomers[0].refreshstatus();
                        customertime.innerHTML = `剩余时间：${Math.abs(resttime).toFixed(1)}秒`
                    }
                },100);
            })
         }
     }
     
     class Dishes{ //菜类
         constructor(name, cost, value, time){
             this.name = name;
             this.cost = cost;
             this.value = value;
             this.time = time;
         }
     }

     var ifeRestaurant = new Restaurant('1000000',1,[]);//餐厅
     var cook = new Cook(1,'H',1000);//厨师
     var server = new Server(2,'Z',500);//服务员
     var c1 = new Customer(1,"wait",[]);//顾客
     var c2 = new Customer(2,"wait",[]);//顾客
     const dish1 = new Dishes('fish',5,10,6);
     const dish2 = new Dishes('nut',3,7,2);
     const dish3 = new Dishes('meat',15,25,8);
     const dish4 = new Dishes('vegetable',1,2,1)

     const dishes = [dish1,dish2,dish3,dish4];

     var outercustomers = [c1,c2];//外面等待的客人
     var seatcustomers = [];//入座的客人