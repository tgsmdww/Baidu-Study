var position = document.getElementsByName('region');
var product = document.getElementsByName('product');

var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

var table = document.getElementById('datatable');

addContainerEvent(container1,position);
addContainerEvent(container2,product);

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

