/* synchronous calls: It means only one operation can be in progress at a time.
It waits for a function to execute and then moves onto next. 
*/
const posts=[
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        for(var i=0;i<posts.length;i++){
            output+= `<li>${posts[i].title}</li>`;
        }
        document.body.innerHTML=output;
    },1000);
}

function createPosts(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

createPosts({title: 'Post Three',body:'This is post three'},getPosts);