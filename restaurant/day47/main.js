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



    async function flow(){
        //有顾客在等待入座
            await have_a_seat(outercustomers);
            await move(1);
            await seatcustomers[0].orderdish(3);
            await choosedishes(seatcustomers[0]);
            await move(0);
            await server.tellcook(seatcustomers[0],cook);

        
    }


flow()

})

