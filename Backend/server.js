const express = require('express')
// const { userRouter } = require('./Routes/userRouter')
const app = express()

app.use(express.json())
// app.use('/project', projectRouter)

app.use((err, req, res, next)=>{
    console.log(err.message);
    res.json({Error: err})
})
app.listen(5000,()=>{
    console.log('server is actively running on port 5000');
})
