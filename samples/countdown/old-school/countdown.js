(function(){
    'use strict';

    var deadline = 'December 31 2015 00:00:00 UTC+0200';

    var clock = document.querySelector('.countdown');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function update(endtime){

        var t = Date.parse(endtime) -  Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );

        if(t >= 0){
            hoursSpan.textContent = hours;
            minutesSpan.textContent = minutes;
            secondsSpan.textContent = seconds;
        }
    }

    setInterval( () => {
       update(deadline);
    }, 1000);


}());
