import "dotenv/config"
import express from "express"

import { dbConnect } from "./db.js"
import usersRoutes from "./routes/users-auth.js"
import productsRoutes from "./routes/products.js"
import tokenValidator from "./middlewares/token-validation.js"

const app = express()
const PORT = process.env.PORT


app.use(express.json())

app.use("/auth", usersRoutes)
app.use("/products", tokenValidator, productsRoutes)

app.listen(PORT, () => {
    console.log(`[server]: App listenig on port: ${PORT}`)
    dbConnect()
})


