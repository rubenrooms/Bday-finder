document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let username = document.querySelector('#username').value;
    let birthday = document.querySelector('#birthday').value;
    let password = document.querySelector('#password').value;

    const url = "https://bdayfinder-ruben.herokuapp.com";
    const localhost = "http://localhost:8888";

    console.log(firstName, lastName, username, birthday, password);

    fetch( localhost + '/users/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            username: username,
            birthday: birthday,
            password: password
        })
    }).then(response => {
        return response.json();

    }).then(json => {
        if(json.status === "succes") {
            console.log("gelukt!");
            let token = json.data.token;
            localStorage.setItem("token", token);
            let id = json.data.id;
            localStorage.setItem("id", id);
            let birthday = json.data.birthday;
            localStorage.setItem("birthday", birthday);
            let username = json.data.username;
            localStorage.setItem("username", username);

            window.location.href = "index.html";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});