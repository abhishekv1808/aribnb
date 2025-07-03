const express = require('express');
const path = require('path')
const rootDir  = require('./utils/mainUtils');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const {mongoConnect} = require('./utils/databaseUtils');


const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());

app.use(userRouter);
app.use(adminRouter);




const port = 3000;
mongoConnect(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on the address : http://localhost:${port}`);
    })
})
