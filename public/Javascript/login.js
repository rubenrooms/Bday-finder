document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    const url = "https://bdayfinder-ruben.herokuapp.com";
    const localhost = "http://localhost:8888";
    //console.log(username);

    fetch( url + "/users/login", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => {
        return response.json();
    }).then((json) => {
        console.log(json);
        if ((json.status === "succes")){
            let token = json.data.token;
            localStorage.setItem("token", token);
            let id = json.data.id;
            localStorage.setItem("id", id);
            let birthday = json.data.birthday;
            localStorage.setItem("birthday", birthday);
            let username = json.data.username;
            localStorage.setItem("username", username);

            window.location.href = "index.html";

        } else{
            console.log("failed");
        }
    }).catch((error) => {
        console.error("error:", error);
    })

});