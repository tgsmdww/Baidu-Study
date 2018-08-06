    function random(length){ //产生随机数
        var num = Math.floor(Math.random()*length);
        return num;
    }

    function randomArr(maxcount){ //循环创建一个数组
        let arr = [];
        for(let i = 0; i < maxcount; i++){
            arr.push(i);
        }
        return arr;
    }

    function RandomNum(arr,maxNum){ //取出随机数，maxNum为取出随机数的个数
        let numArr = [];
        let arrlength = arr.length;
        let getarr = arr;
        for(let i = 0; i < arrlength; i++){
            let number = random(getarr.length);//随机数
            numArr.push(getarr[number]);//将找到的数组元素放入新数组
            getarr.splice(number,1);//从数组中删掉被选到的元素
            if(getarr.length <= arrlength - maxNum){
                return numArr;
            }
        }
    }