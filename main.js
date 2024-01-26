const xhttp = new XMLHttpRequest()

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos")

xhttp.send()
console.log(xhttp.readyState)

xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200){
        console.log(JSON.parse(xhttp.responseText))
        let users=JSON.parse(xhttp.responseText)
        htmlData=""
        users.forEach((item)=>(
             htmlData+=`
             <tr>
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.completed}</td>
        </tr>
             `
        ))
        console.log(htmlData)
        result.innerHTML=htmlData
    }
}