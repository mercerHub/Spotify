import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('Server is ready');
})

app.get('/api/home',(req, res) => {
    res.send('hiii');
})

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})