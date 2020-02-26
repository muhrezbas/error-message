const express = require("express")
const router = express.Router()

const errorRouter = require("./error-route")


router.use("/error", errorRouter)


module.exports = router