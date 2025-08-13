let table = document.getElementById("table");
let row;

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => users.slice(4).forEach(user => {
    row = document.createElement("tr");

    row.innerHTML=`<td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.address.street},${user.address.suite},${user.address.city}</td>
    `

    table.appendChild(row)
}))
.catch(error => console.error("Cant Fetch Data",error));