let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

var position = document.getElementsByName('region');
var product = document.getElementsByName('product');

var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

var table = document.getElementById('datatable');

addContainerEvent(container1,position);
addContainerEvent(container2,product);

function addContainerEvent(container,classname){    
    container.onclick = function(){
        var event = event || window.event;
        checkboxEvent(classname,event);
        var data = getData();
        table.innerHTML = renderTable(data);
        merge();
    }
}


function renderTable(data)
{
    if(data != '')
    {
        var positionnum = 1;//1为只有1个，0为多个，下同
        var productnum = 1;

        var innerHtml = '';

        if(checkedNumber(position) > 1)  positionnum = 0;
        if(checkedNumber(product) > 1)   productnum = 0;

        if(positionnum == 1 && productnum == 0) //多个商品一个地区
        {
            innerHtml += "<table><tr><th>地区</th><th>商品</th>";
            for(var i = 0; i < data[0].sale.length; i++)
            {
                innerHtml += "<th>" + i + "月</th>";
            }
            innerHtml += '</tr>';

            innerHtml += '<tr><td rowspan =' + checkedNumber(product) + '>' + data[0].region + '</td><td>' + data[0].product + '</td>'
            for(var i = 0; i < data[0].sale.length; i++)
            {
                innerHtml += '<td>' + data[0].sale[i] + '</td>'
            }
            innerHtml += '</tr>';
            for(var i = 1; i < data.length; i++)
            {
                innerHtml += '<tr><td>' + data[i].product + '</td>'; 
                for(var j = 0; j < data[i].sale.length; j++)
                {
                    innerHtml += '<td>' + data[i].sale[j] + '</td>';
                }
                innerHtml += '</tr>';
            }
        }

        else{          //一般情况
            innerHtml += "<table><tr><th>商品</th><th>地区</th>";
            for(var i = 0; i < data[0].sale.length; i++)
            {
                innerHtml += "<th>" + i + "月</th>";
            }
            innerHtml += '</tr>';

            for(var i = 0; i < data.length; i++)
            {
                innerHtml += '<tr><td>' + data[i].product + '</td><td>' + data[i].region + '</td>';
                for(var j = 0; j < data[i].sale.length; j++)
                {
                    innerHtml += '<td>' + data[i].sale[j] + '</td>';
                }
                innerHtml +=  '</tr>';
            }
        }
        innerHtml += "</table>";
        return innerHtml;
    }
    else return '';
}

function merge(){
        var trs = document.getElementsByTagName("tr");
        var checkednum = checkedNumber(position);
        if(checkednum > 1){
            console.log(checkednum)
            for(var i = 1; i < trs.length; i += checkednum){
                trs[i].firstChild.setAttribute("rowspan",checkednum);
                for(var j = i + 1; j < i + checkednum; j++)
                {
                    trs[j].removeChild(trs[j].firstChild);
                }
            }
        }
        
}

function getData(){//获取数据
    var checkedarr = new Array();
    var poschecked = getCheckedBox(position);
    var prochecked = getCheckedBox(product);
    for(var i = 0; i < sourceData.length; i++)
    {

        if(poschecked.indexOf(sourceData[i].region) != -1 && prochecked.indexOf(sourceData[i].product) != -1){
        checkedarr.push(sourceData[i]);
        }
    }
    return checkedarr;
}

function checkboxEvent(classname,event){ //事件
    if(event.target.value == '全选')//设置全选
    {
        for(var i = 0; i < classname.length; i++)
        {
            classname[i].checked = true;
        }
    }
    else{                       //非全选键
        var count = checkedNumber(classname);
        if(count == classname.length - 1)//三个触发全选
        {
            for(var i = 0; i < classname.length; i++)
            {
                classname[i].checked = true;
            }
        }
        else{
            if(count == 2){
                classname[0].checked = ''; //字符串不为空即true，为空则为false
            }
            else if(count == 0)
            {
                event.target.checked = true;
            }
        }
    } 
}

function checkedNumber(arr){  //checkbox选中个数
    var count = 0;
    for(var i = 1; i < arr.length; i++)
    {
        if(arr[i].checked == true){
        count++;
        }
    }
    return count;
}

function getCheckedBox(checkarr) //获取被选中的checkbox的值
{
    var arr = new Array();
    for(var i = 1; i < checkarr.length; i++)
    {
        if(checkarr[i].checked == true)
        {
            arr.push(checkarr[i].value);
        }
    }
    return arr;
}
