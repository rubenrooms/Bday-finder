const url = "https://bdayfinder-ruben.herokuapp.com";
const localhost = "http://localhost:8888";
let birthday = localStorage.getItem("birthday");
let username = localStorage.getItem("username");



primus = Primus.connect("http://localhost:3000", {
    reconnect: {
      max: Infinity,
      min: 500,
      retries: 10,
    },
  });

    primus.on('data', (json) => {
      if(json.action === "sendMessage") {
        appendChat(json.data);
      }
    });

  
  // chatbericht maken
  let appendChat = (json) => {
    let chat = `<p class="userName"><strong>${json.data.chat.sender}</strong></p>
                <p class="Message">${json.data.chat.message}</p>`;
    document.querySelector(".chat").insertAdjacentHTML('beforebegin', chat);
  }

  // op enter chatbericht opslaan in database
  let input = document.getElementById("message");
  input.addEventListener("keydown", e => {
    if (e.key === 'Enter') {
      let text = input.value;
      console.log(text);

      fetch(localhost + '/api/v1/chats', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({
            "text": text
          })
      })
      .then(response => {
        return response.json();
      }).then(json => {
        if (json.status === "succes"){
          console.log(json);
            input.value = "";
            input.focus();

            primus.write({
                "action": "sendMessage",
                "data": json
            });
        }
        
      })
      .catch((error) => {
        console.log(error);
      });

      e.preventDefault();
    }
    
  });

  // alle message van dat kanaal afprinten
fetch(localhost + '/api/v1/chats', {
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
    console.log(result);
    if (result.status === "succes") {
      const chats = result.data;
      //console.log(chats);
      console.log(chats);
      chats.forEach((chat) => {
        let message = `<p class="userName"><strong>${chat.sender}</strong></p>
                      <p class="Message">${chat.message}</p>`;
        document.querySelector(".chat").insertAdjacentHTML('beforebegin', message);
      });
    } else {
      console.log("failed");
    }
})
.catch(error =>{
  console.log(error);
});
  