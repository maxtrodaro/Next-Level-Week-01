import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Hello Eduardo");

  response.json(["Eduardo", "Rodrigo"]);
});

app.listen(3333);
