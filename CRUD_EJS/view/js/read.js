let users = document.querySelector("#users");

(function(){
    fetch(`http://localhost:4250/api/user/all`)
        .then(res => res.json())
        .then(res => {
            console.log('users =', res)
        }).catch(err => console.log(err.message))
})()