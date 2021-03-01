const { Router } = require("express");
// import all routers;
const categoryRouter = require("./category");
const phoneRouter = require("./phone");

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

//router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/phones", phoneRouter)

module.exports = router;
