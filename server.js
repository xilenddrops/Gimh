const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.send("Telegram backend running");

});

app.post("/send", async (req, res) => {

  const message = req.body.message;

  try {

    const response = await fetch(

      "https://api.telegram.org/bot8635496892:AAHXbZx7lwBllDR4YzwBGKucV7v8lrBofrc/sendMessage",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          chat_id: "5535768787",

          text: message

        })

      }
    );

    const data = await response.json();

    res.json(data);

  } catch(error) {

    res.status(500).json({
      error: error.message
    });

  }

});

const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );

});