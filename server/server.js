const express = require('express')
const app = express()
const verifier = require('./tokenHandler')
const { createInstance } = require("@rownd/node");

 const rownd = createInstance({
  app_key: 'key_dtul1e2bstgmtuouiim43v0v',
  app_secret: '14826e94a05f36091bb303a4a1e3be1566c3b00855663d1e',
});

const { authenticate } = rownd.express;

app.use(express.json())
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/*', authenticate());

app.post('/api/verify-token', async (req, res) => {
    const token = req.body.token;
    try {
        const payload = await verifier.verify(
         token // the JWT as string
        );
        console.log("Token is valid. Payload:", payload);
        res.status(200).json({ valid: true });
      } catch (error) {
        console.log("Token not valid!");
        res.status(401).json({ valid: false, error: error.message });
      }
  })
  
app.listen(3030, () => { console.log('Server is running on port 3030') })