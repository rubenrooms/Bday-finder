document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let username = document.querySelector('#username').value;
    let birthday = document.querySelector('#birthday').value;
    let password = document.querySelector('#password').value;

    console.log(firstName, lastName, username, birthday, password);

    fetch('http://localhost:8888/users/signup', {
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
            
            window.location.href = "index.html";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});