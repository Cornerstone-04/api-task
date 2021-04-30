function myPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let posts = '';
        data.forEach(element => {
            posts += `<div class="posts-list">
            <ul>
                <li>${element.body}</li>
                <li>${element.id}</li>
                <li>${element.title}</li>
                <li>${element.userid}</li>
            </ul>
            </div>`
        document.getElementById('head1').innerHTML = 'Posts';
        document.getElementById('result1').innerHTML = posts;
        });
    });
};

function myComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let comments = '';
        data.forEach(element => {
            comments += `<div class="comments-list">
            <ul>
                <li>${element.body}</li>
                <li>${element.email}</li>
                <li>${element.id}</li>
                <li>${element.name}</li>
                <li>${element.postid}</li>
            </ul>
            </div>`
        document.getElementById('head2').innerHTML = 'Comments';
        document.getElementById('result2').innerHTML = comments;
        });
    });
};

function myAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((data) => {
        let albums = '';
        data.forEach(element => {
            albums += `<div class="album-list">
            <ul>
                <li>${element.id}</li>
                <li>${element.title}</li>
                <li>${element.userid}</li>
            </ul>
            </div>`
        document.getElementById('head3').innerHTML = 'Albums';
        document.getElementById('result3').innerHTML = albums;
        });
    });
};

function myPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let photos = '';
        data.forEach(element => {
            photos += `<div class="photo-list">
            <ul>
                <li>${element.albumid}</li>
                <li>${element.id}</li>
                <li>${element.title}</li>
                <li><img src="${element.thumbnailurl}"></li>
                <li><img src="${element.url}"></li>
            </ul>
            </div>`
        document.getElementById('head4').innerHTML = 'Photos';
        document.getElementById('result4').innerHTML = photos;
        });
    });
};

function myTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
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