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
    .then((ouput) => {
        // console.log(JSON)
        document.getElementById('head4').innerHTML = 'Photos';
        document.getElementById('result4').innerHTML = JSON.stringify(ouput);
    });
};

function myTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((ouput) => {
        // console.log(JSON)
        document.getElementById('head5').innerHTML = 'ToDos';
        document.getElementById('result5').innerHTML = JSON.stringify(ouput);
    });
};

function myUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((ouput) => {
        // console.log(JSON)
        document.getElementById('head6').innerHTML = 'Users';
        document.getElementById('result6').innerHTML = JSON.stringify(ouput);
    });
};