module.exports = (app) => {
    const dynamicForms = require("../controller/dynamicForm");
  
    var router = require("express").Router();

    router.post("/save-dynamic-form", dynamicForms.createMany);

    router.post("/get-generated-form", dynamicForms.getAll);

    app.use("/api", router);
};
