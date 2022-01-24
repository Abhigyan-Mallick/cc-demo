module.exports = (app) => {
    const formData = require("../controller/formData");
  
    var router = require("express").Router();

    router.post("/save-data", formData.create);

    app.use("/api", router);
};
