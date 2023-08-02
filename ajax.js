function changedata() {
    console.log('hi')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {

            var data = JSON.parse(this.responseText);
            console.log(data);
            var output = `<table><tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
        </tr>`;
            for (let i = 0; i < data.length; i++) {
                let checked
                if (data[i].completed) {
                    checked = 'checked'
                }
                output += `<tr>
            
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
           
            <td><input type="checkbox" name="" ${checked} onclick="ifCheck()" /></td>

            
            
            </tr>`

            }
            output += '<table>'
            document.getElementById('tbl').innerHTML = output

        }
    }

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    xhttp.send();
}

var checked = 0;

function incCheck() {
    return new Promise((resolve, reject) => {
        checked++
        if (checked == 5) 
        resolve()
    })
}

function ifCheck() {
    incCheck().then(() => alert('Congrats. 5 Tasks have been Successfully Completed'))
}