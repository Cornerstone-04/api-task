function myPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((output) => {
        // console.log(JSON)
        document.getElementById('head1').innerHTML = "Posts";
        document.getElementById('result1').innerHTML = JSON.stringify(output);
    });
};

function myComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((output) => {
        // console.log(JSON)
        document.getElementById('head2').innerHTML = 'Comments';
        document.getElementById('result2').innerHTML = JSON.stringify(output);
    });
};

function myAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((ouput) => {
        // console.log(JSON)
        document.getElementById('head3').innerHTML = 'Albums';
        document.getElementById('result3').innerHTML = JSON.stringify(ouput);
    });
};

function myPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById('head4').innerHTML = 'Photos';
        document.getElementById('result4').innerHTML = JSON.stringify(data);
    });
};

function myTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let todos = '';
        data.forEach(element => {
            todos += `<div class="todo-list">
            <ul>
                <li>${element.completed}</li>
                <li>${element.id}</li>
                <li>${element.title}</li>
                <li>${element.userid}</li>
            </ul>
            </div>`
        document.getElementById('head5').innerHTML = 'ToDos';
        document.getElementById('result5').innerHTML = todos;
        });
    });
};

function myUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
       let users = '';
        data.forEach(element => {
            users += `<div class="card">
            <ul>
                <li>${element.name}</li>
                <li>${element.phone}</li>
                <li >${element.website}</li>
                <li>${element.email}</li>
                <li>${element.address.street}</li>
                <li>${element.company.name}</li>
            </ul>
            </div>`
        document.getElementById('head6').innerHTML = 'Users';
        document.getElementById('result6').innerHTML = users;
        });
    });
};