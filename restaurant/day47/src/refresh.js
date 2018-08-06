    function refreshcash(cash){//刷新现金
        ifeRestaurant.cash = cash;
        rescash.innerText = cash;
    }

    function refreshcustomerstatus(customer){
        customerstatus.innerHTML = `状态： ${customer.status}`;
    }