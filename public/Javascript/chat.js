const url = "https://bdayfinder-ruben.herokuapp.com";
const localhost = "http://localhost:8888";
let birthday = localStorage.getItem("birthday");

primus = Primus.connect("http://localhost:3000", {
    reconnect: {
      max: Infinity,
      min: 500,
      retries: 10,
    },
  });

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
          
        }
        
      })
      .catch((error) => {
        console.log(error);
      });

      e.preventDefault();
    }
    
  });