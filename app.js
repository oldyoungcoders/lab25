let time = document.querySelector('.time');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const restart = document.querySelector('.reset');
const lap = document.querySelector('.lap');
const timer = document.querySelector('.el');
let doli=0,second=0, minute=0, hour=0;


//setInterval

function watch(){
    doli++

    //ternary operator /?/

    if(second==60){
        second=0;
        minute++
    }

    if(minute==60){
        minute=0;
        hour++
    }

    if(doli==100){
        doli=0;
        second++
    }



    let s = second<10 ? '0'+second : second;
    let m = minute<10 ? '0'+minute : minute;
    let h = hour<10 ? '0'+hour :hour
    let d = doli<10 ? '0'+doli :doli

    time.innerText = h+':'+m+':'+s+':'+d
}

let ehleh;

start.addEventListener('click',()=>{
    ehleh = setInterval(watch,10)
});

stop.addEventListener('click',()=>{
    clearInterval(ehleh);
})


restart.addEventListener('click',()=>{
    clearInterval(ehleh);
    hour=0;
    minute=0;
    second=0;
    doli=0;
    time.innerText='00:00:00:00'
    timer.innerHTML=''
});


lap.addEventListener('click',()=>{
    let lapEl = document.createElement('p');

    let s = second<10 ? '0'+second : second;
    let m = minute<10 ? '0'+minute : minute;
    let h = hour<10 ? '0'+hour :hour
    let d = doli<10 ? '0'+doli :doli

    lapEl.innerText = h+':'+m+':'+s+':'+d;

    lapEl.style.color='black'
    lapEl.style.fontFamily='monospace'
    lapEl.style.fontSize='19px'
    timer.append(lapEl);
})