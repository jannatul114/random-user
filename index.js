
fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => userInfo(data));


function userInfo(data) {
    console.log(data.results[0].picture.large);
    const result = data.results;
    console.log(result[0])
    const parent = document.getElementById('container')
    const div = document.createElement('div');
    div.classList.add('post')
    div.innerHTML = `
    <img style = "border-radius: 50%; border: 5px solid #fff" src = ${result[0].picture.large} >
    <h2>name: ${result[0].name.first} ${result[0].name.last}</h2>
    <h2>gender: ${result[0].gender}</h2>
    <h3>country: ${result[0].location.country}</h3>
    <h3>email: ${result[0].email}</h3>
    <div id= "button-container">
    <button class= "button">Add Friend</button>
    <button class= "button">Message</button>
    </div>
    `
    parent.appendChild(div);
}
