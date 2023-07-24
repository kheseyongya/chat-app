const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "private-key": "9102e89e-ad9f-4f1f-8e64-c0d1b90b91be",
        },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.status).json(e.response.data);
  }
});

app.listen(3001);
