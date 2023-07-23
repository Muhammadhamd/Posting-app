import express from "express"
const router = express()
import profileRoute from "./routes/profile.mjs"
import createRoute from "./routes/create.mjs"
import authRoute from "./routes/auth.mjs"


router.use(authRoute)
router.use("/muhammadhamd",profileRoute)
router.use("/muhammadhamd",createRoute)


export default router