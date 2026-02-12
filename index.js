import app from "./src/app.js";
import dotenv from "dotenv"



dotenv.config()

const PORT=process.env.PORT || 5000;

console.log(process.env.PORT)
app.listen(PORT,()=>{
    console.log(`Server is listining Port ${PORT}`)
})