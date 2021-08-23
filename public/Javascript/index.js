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
        console.log(result);
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
