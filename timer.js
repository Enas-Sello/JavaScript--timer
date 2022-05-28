let time = document.getElementById( 'timer' )
let count;
let btnsubmet = document.getElementById( 'submit' )
let inputTxT = document.getElementById( 'text' )



    let sec = 0;
    const intervel =setInterval( function ()
    {
        time.innerHTML = "00:" + sec;
        sec++

function timer ()
{
    if ( sec == 10 )
    {
        alert('you did not made any action')
        clearInterval( intervel )
    }
}timer ()

    }, 1000 )

btnsubmet.onclick = submet;

function submet ()
{
    if ( inputTxT.value ==false )
    {
        alert('your input is empty')
    }
    else
    {
        alert( "you entered : " + inputTxT.value )
        clearInterval( intervel )
        let val = document.getElementById( 'val' )
        val.innerHTML = `<p style=" color:blue; font-size:25px">
        youe entered :   ${inputTxT.value}</p>`
    }
}