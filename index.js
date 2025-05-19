
const express = require ('express');
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
require('dotenv').config();
const cors = require('cors')
const DB = require('./SRC/database/db')
const port = process.env.PORT
const authRouter = require('./SRC/routes/route')
const postRouter = require('./SRC/routes/postRouter')







const app = express();

app.use(cookieParser())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/api/auth' , authRouter)
app.use('/api/posts', postRouter)
app.get('/' , (req, res) => {
    
    res.end('app is working')
})

DB().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }).catch(err => {
    console.error('Failed to connect to MongoDB. Server not started.');
  });


