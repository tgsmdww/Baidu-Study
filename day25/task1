<!DOCTYPE html>
<html>
<head>
	<title>task1</title>
</head>
<body>
    <div>
        <p id = 'time'>当前时间为：</p>
    </div>
    <script type="text/javascript">
        var body = document.getElementsByTagName('body')[0];
        var time = document.getElementById('time');


        function checkTime(i){
            if(i<10)
            {
                i = '0'+i;
            }
            return i;
        }

        function weekday(day){
            switch(day){
                case 1 :return '一';break;
                case 2:return '二';break;
                case 3:return '三';break;
                case 4:return '四';break;
                case 5:return '五';break;
                case 6:return '六';break;
                case 7:return '日';break;
            }            
        }

        function startTime(){
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var week = d.getDay();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var mill = d.getSeconds();
        
        month = checkTime(month);
        day = checkTime(day);
        hour = checkTime(hour);
        minute = checkTime(minute);
        mill = checkTime(mill);
 

        time.innerHTML = "当前时间为："+year+" 年 "+month+" 月 "+day+' 日 星期 '+weekday(week)+" "+hour+":"+minute+':'+mill;
        setTimeout('startTime()',500);
        }
        body.addEventListener('onload',startTime());
        
	</script>
</body>
</html>
