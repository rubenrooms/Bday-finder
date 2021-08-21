document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    //console.log(username);

    fetch("http://localhost:8888/users/login", {
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

            //window.location.href = "index.html";
            console.log("succes");

        } else{
            console.log("failed");
        }
    }).catch((error) => {
        console.error("error:", error);
    })

});