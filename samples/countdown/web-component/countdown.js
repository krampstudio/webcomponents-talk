(function(){
    'use strict';

    const content =`
    <style>
        .countdown{
            font-family: sans-serif;
            color: #fff;
            display: inline-block;
            font-weight: 100;
            text-align: center;
            font-size: 30px;
        }
        .countdown > div{
            padding: 10px;
            border-radius: 3px;
            background: #007f99;
            display: inline-block;

        }
        .countdown div > span{
            padding: 15px;
            border-radius: 3px;
            background: #003742;
            display: inline-block;
            font-weight: bold;
        }
        .small{
            padding-top: 5px;
            font-size: 16px;
        }
    </style>
    <div class="countdown">
        <div>
            <span class="hours"></span>
            <div class="small">Hours</div>
        </div>
        <div>
            <span class="minutes"></span>
            <div class="small">Minutes</div>
        </div>
        <div>
            <span class="seconds"></span>
            <div class="small">Seconds</div>
        </div>
    </div>`;

    var countDownProto = Object.create(HTMLElement.prototype, {
        deadline : {
            get: function(){
                var t = Date.parse('December 31 2015 ' + this.getAttribute('deadline') + ' UTC+0200') -  Date.parse(new Date());
                var seconds = Math.floor( (t/1000) % 60 );
                var minutes = Math.floor( (t/1000/60) % 60 );
                var hours = Math.floor( (t/(1000*60*60)) % 24 );
                return {
                    hours,
                    minutes,
                    seconds
                };
            }
        }
    });

    countDownProto.createdCallback = function(){
        const root = this.createShadowRoot();
        root.innerHTML = content;

        const hoursSpan = root.querySelector('.hours');
        const minutesSpan = root.querySelector('.minutes');
        const secondsSpan = root.querySelector('.seconds');

        setInterval( () => {
            var deadline = this.deadline;
            hoursSpan.textContent = deadline.hours;
            minutesSpan.textContent = deadline.minutes;
            secondsSpan.textContent = deadline.seconds;
        }, 1000);
    };

    document.registerElement('x-countdown', { prototype : countDownProto });
}());
