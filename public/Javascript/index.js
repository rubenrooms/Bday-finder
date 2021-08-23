const id = localStorage.getItem("id");
let user;
let birthday;
const getBirthday = () => {
  fetch(`http://localhost:8888/users/birthday/${id}`, {
    method: "GET",        
    headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    })
    .then(response => {
        return response.json();
        
    })
    .then(result => {
        //console.log(result);
        if (result.status === "succes") {
            birthday = result.data.birthday;
            document.querySelector(".birthday").innerHTML = `${birthday}`;
            return birthday;

        } else {
            console.log("request failed");
            return error;
        }
    })
    .catch((error) => {
        console.log("request failed");
    })
};
getBirthday();

    fetch(`http://localhost:8888/users/birthday/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        if (result.status === "succes") {
            firstName = result.data.firstName;
            lastName = result.data.lastName;
            const list = document.querySelector(".list");

            users = result.data;
            let i = 0;
            console.log(users);
            users.forEach((user) => {
                i++;
                let buddy = document.createElement("li");
                buddy.classList.add("buddy");
                li = `<p class="number">${i}</p><p class="name">${user.firstName} ${user.lastName}</p> - <p class="birthday">${user.birthday}</p>`
                buddy.innerHTML = li;
                list.appendChild(buddy);
            });
        } else {
            console.log("failed");
        }
    })
    .catch(error =>{
        console.log(error);
    });
