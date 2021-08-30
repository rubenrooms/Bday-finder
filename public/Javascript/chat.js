primus = Primus.connect("http://localhost:3000", {
    reconnect: {
      max: Infinity,
      min: 500,
      retries: 10,
    },
  });