import express from 'express';


const app= express();

app.listen(3000, () =>{
    console.log('server is running on por 3000')
});

app.get(
    '/',
    (req,res) => {
    res.send("Hello Horld NODEMON!")
    }
)

