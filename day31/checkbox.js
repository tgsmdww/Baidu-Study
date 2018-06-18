
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