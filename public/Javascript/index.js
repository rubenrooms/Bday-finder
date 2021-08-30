const url = "https://bdayfinder-ruben.herokuapp.com";
const localhost = "http://localhost:8888";
const id = localStorage.getItem("id");
let user;
let birthday = localStorage.getItem("birthday");

const getBirthday = () => {
  fetch( localhost + `/users/birthday/${id}`, {
    method: "GET",        
    headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
    })
    .then(response => {
        return response.json();
        
    })
    .then(result => {
        //console.log(result);
        if (result.status === "succes") {
            //birthday = result.data.birthday;
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

// code voor lijst van users met dezelfde birthday
const getUsersByBirthday= () => {
    fetch( localhost + `/users/birthday/all/${birthday}`, {
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
            username = result.data.username;
            
            const list = document.querySelector(".list");
           
            const users = result.data;
            let i = 0;
            console.log(users);
            users.forEach((user) => {
                i++;
                let buddy = document.createElement("li");
                buddy.classList.add("buddy");
                li = `<a href="chat.html"><p class="name">${user.username}</p></a>`
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
}



getUsersByBirthday();
    
