function timer(){
    var CurrentTime = new Date()

    var hrs = CurrentTime.getHours()
    if( hrs < 10){
        hrs = "0" + hrs
    }
    document.getElementById("hrs").innerText = hrs
    var min = CurrentTime.getMinutes()
    if( min < 10){
        min = "0" + min
    }
    document.getElementById("min").innerText = min
    
    var sec = CurrentTime.getSeconds()
    if( sec < 10){
        sec = "0" + sec
    }
    document.getElementById("sec").innerText = sec
}
setInterval(timer, 1000)
