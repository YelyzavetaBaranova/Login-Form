const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/register", (req, res) => {
  const { fname, email, password } = req.body || {};
  if (!fname || !email || !password) {
    return res.json({ success: false, error: "Всі поля обов’язкові!" });
  }
  res.json({ success: true, fname });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.json({ success: false, error: "Всі поля обов’язкові!" });
  res.json({ success: true, fname: "Guest" });
});

app.listen(PORT, () => {
  console.log(`server started http://localhost:${PORT}`);
});
