import express from "express";
import morgan from "morgan";
const app = express();

const port = 3000;

app.use(morgan("dev"));

app.get('/', function(req, res){
    res.send('Hello World');
});

const handleListen = () => {
    console.log(`✅ Listening on ${port} port`)
}

app.listen(port, handleListen);