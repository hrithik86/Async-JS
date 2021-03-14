console.log("Promise tutorial");

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const error=true;
            if(!error){
                console.log("Function: This promise has been resolved");
                resolve();
            }
            else{
                console.log("Function: This promise has not been resolved");
                reject("Sorry not fulfilled due to technical error");
            }
        },2000);
    });
}

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
func1().then(function(){
    console.log("Thanks for resolving!");
}).catch(function(error){
    console.log("Reason: "+error);
});

