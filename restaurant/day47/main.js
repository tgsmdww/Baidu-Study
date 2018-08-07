$(document).ready(function(){

    ifeRestaurant.hire(cook);
    ifeRestaurant.hire(server);

    for(let i = 0; i < dishes.length; i++)
    {
        let li = document.createElement("li");
        li.setAttribute("id",dishes[i].name);
        li.innerHTML = dishes[i].name + ":" + dishes[i].value + "元" + "&nbsp&nbsp&nbsp&nbsp所需时间:&nbsp&nbsp" + dishes[i].time + "秒";
        ul.appendChild(li);
    }


    for(let i = 0; i < outercustomers.length; i++)
    {
        let li = document.createElement("li");
        li.setAttribute("id",outercustomers[i].name);
        li.setAttribute("class","clist");
        li.innerHTML ="顾客ID：" + outercustomers[i].ID;
        ol.appendChild(li);
    }



    async function flow(cus){
        //有顾客在等待入座
            await have_a_seat(cus); //入座
            await move(1);  //服务员到顾客那
            await seatcustomers[0].orderdish(3);//想想吃啥
            await choosedishes(seatcustomers[0]);//点单
            await move(0);//服务员到厨师那
            await server.tellcook(seatcustomers[0],cook);//服务员告诉厨师菜单
            await cook.doWork();
            await sweep();
        }
        console.log(outercustomers) 
    async function all() {        
        for(const cus of outercustomers){
            await flow(cus);
        }
    }
    all()

})

