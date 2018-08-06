




//left是相对最开始的位置（即屏幕中间）
    function move(direction) //服务员移动
    {
        return new Promise(resolve=>{
            if(direction === 1){
                 $('#serverimg').animate({left:rightdis - serverori+'px'},resolve());
            }
            else if(direction === 0){
                
                $('#serverimg').animate({left:-(serverori-leftdis) +'px'},0.5*time,resolve());
            }
        })

    }

    function have_a_seat(customers){ //入座
        return new Promise(resolve=>{
            for(let i = ifeRestaurant.seats; i--; i > 0){
                let ollist = document.getElementsByClassName('clist');
                let j = ifeRestaurant.seats - i;
                ol.removeChild(ollist[0]);
                customers[j].status = 'order';
                customers[j].refreshstatus();
                seatcustomers = [...seatcustomers,customers[j]];
                customers.splice(j,1);
                ifeRestaurant.seats--;
                
            }
            resolve();
        });
    }



    function choosedishes(customer){ //点菜

        return new Promise((resolve,reject)=>{
            let dishesnum = random(dishes.length);
            let list = RandomNum(randomArr(dishes.length),dishesnum);
            let dishlist = [];
            for(let i = 0; i < list.length; i++){
                dishlist.push(dishes[list[i]]);
            };
            console.log(dishlist);
    
            customer.dishes = dishlist;
            let waitlist = document.getElementById('waitdishlist')
            for(let i = 0; i < customer.dishes.length;i++){
                let li = document.createElement("li");
                li.innerHTML = `${customer.dishes[i].name} 状态: 还未上`;
                waitlist.appendChild(li);
            }
            customer.status = "waitdish";
            customer.refreshstatus();
            resolve();
        })


    }










    //document.getElementById('time').innerHTML = "剩余时间: " + resttime + "秒";
//setTimeOut函数带参数解决办法 https://blog.csdn.net/lipei1220/article/details/52052589

    // function orderdish(customer,time){
        
    //     customerstatus.innerHTML = `状态：${customer.status}`;
    //     return new Promise((resolve, reject) =>{
    //         let resttime = time;
    //         let timer = setInterval(()=>{
    //             if(resttime <= 0){
    //                 clearInterval(timer);
    //                 resolve();
    //             }
    //             else{
    //                 resttime -= 0.1;
    //                 customertime.innerHTML = `剩余时间：${Math.abs(resttime).toFixed(1)}秒`;
    //             }
    //         },100);
    //     })
    // }


    /*这里animate同时用left和right会导致右移之后不能左移https://www.imooc.com/wenda/detail/302566*/
    //  function move(pos)
    //  {
    //     let dis;
    //     let nowpos = serverimg.offsetLeft;
    //     if(pos > serverimg.offsetLeft){
    //         dis = pos - nowpos;
    //     $('#serverimg').animate({left:dis-50+'px'},0.5*time);
    //     }
    //     else{
    //         dis = nowpos - pos;
    //         $('#serverimg').animate({right:dis+'px'},0.5*time);
    //     }
    //  }

    // function move(pos,cbfunc) //服务员移动
    // {
    //    let dis;
    //    let nowpos = serverimg.offsetLeft;
    //     //typeof cbfunc === "function")少了这个一直报错cbfunc is not a function
    //    dis = pos - nowpos;
    //    if(pos > serverimg.offsetLeft && typeof cbfunc === "function"){
    //        dis = pos - nowpos;
    //         $('#serverimg').animate({left:dis-50+'px'},0.5*time,cbfunc());
    //    }
    //    else if(pos <= serverimg.offsetLeft && typeof cbfunc === "function"){
    //        dis = nowpos - pos;
    //        $('#serverimg').animate({left:-dis+'px'},0.5*time,cbfunc());
    //    }
    // }