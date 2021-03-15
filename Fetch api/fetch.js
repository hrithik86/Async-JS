console.log("Fetch API");

function getData(){
    console.log("Started getData")

    // GET request
    fetch('https://api.github.com/users').then((response)=>{
        console.log("Inside first then")

        // This can be response.test() also according to our needs
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    });
}

console.log("Before running getData");
getData();
console.log("After running getData");

function postData(){

    // POST request
    url = "https://jsonplaceholder.typicode.com/posts";
    data = JSON.stringify({
        title: 'testing',
        body: 'hi! I am a bot',
        userId: 1
    });
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // data needs to be sent in the form of string
        body: data
    }
    fetch(url,params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    });
}

postData();