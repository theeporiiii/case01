function handlesubmit(callback){
    event.preventDefault()
    var id=document.getElementById('form1Example13').value;
    var pass=document.getElementById('form1Example23').value;
    console.log(id);
    console.log(id);

    if (id==='admin' && pass === '12345') {
        callback();
    } else{
        alert("invalid adress");
    }
}
function validate(){
    window.location.href = "main.html";
}
    