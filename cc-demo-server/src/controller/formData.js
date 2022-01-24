const FormData = require("../model/formData");

exports.create = async (req, res) => {
  const NewFormData = new FormData({ param: JSON.stringify(req.body) });

  NewFormData.save()
    .then((newFormData) => {
      console.log("newFormData:", newFormData);
      res.send(newFormData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
