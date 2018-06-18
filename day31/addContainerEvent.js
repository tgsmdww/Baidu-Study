function addContainerEvent(container,classname){    
    container.onclick = function(){
        var event = event || window.event;
        checkboxEvent(classname,event);
        var data = getData();
        table.innerHTML = renderTable(data);
        merge();
    }
}