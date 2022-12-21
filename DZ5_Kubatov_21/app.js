const btnTime = document.querySelector(".btn_child_time");
const btnStart = document.querySelector(".btn_child_1");
const btnRestart = document.querySelector(".btn_child_2");
const btnStop = document.querySelector(".btn_child_3");
let i = -1;
btnStart.addEventListener("click", function ()
{
    let stop = setInterval(() =>
    {
        i++;
        btnTime.innerText = i;
        if (i === 60) {
            clearInterval(stop);
        }
    }, 1000);
    btnRestart.addEventListener("click", function ()
    {
        btnStart.removeAttribute("disabled")
        btnStop.removeAttribute("disabled")
        clearInterval(stop)
        i = 0;
        btnTime.innerText =i;
    });
    btnStop.onclick = () =>
    {
        clearInterval(stop)
        btnStart.removeAttribute("disabled")
        btnStop.setAttribute("disabled", "disabled")
    }
    btnStart.setAttribute("disabled", "disabled")
    btnStop.removeAttribute("disabled")
})
