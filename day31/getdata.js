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