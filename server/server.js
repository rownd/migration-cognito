const express = require('express')
const app = express()
const verifier = require('./tokenHandler')

app.use(express.json())
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

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