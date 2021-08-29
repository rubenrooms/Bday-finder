primus = Primus.connect("http://localhost:8888", {
    reconnect: {
      max: Infinity,
      min: 500,
      retries: 10,
    },
  });