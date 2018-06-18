
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
        for(var i = 1; i < trs.length; i += checkednum){
            trs[i].firstChild.setAttribute("rowspan",checkednum);
            for(var j = i + 1; j < i + checkednum; j++)
            {
                trs[j].removeChild(trs[j].firstChild);
            }
        }
    }
    
}