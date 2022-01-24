const DynamicForm = require("../model/dynamicForm");

exports.create = async (req, res) => {
  const NewDynamicForm = new DynamicForm(req.body);

  NewDynamicForm.save()
    .then((newDynamicForm) => {
      console.log("newDynamicForm:", newDynamicForm);
      res.send(newDynamicForm);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

// Response:
// {
//     "acknowledged": true,
//     "insertedCount": 2,
//     "insertedIds": {
//         "0": "61ee26ed3c9616b2e3d37ce8",
//         "1": "61ee26ed3c9616b2e3d37ce9"
//     }
// }
exports.createMany = async (req, res) => {
  console.log("req:", req);
  DynamicForm.collection
    .insertMany(JSON.parse(req.body))
    .then((newDynamicForm) => {
      console.log("newDynamicForm:", newDynamicForm);
      res.send(newDynamicForm);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.getAll = async (req, res) => {
    DynamicForm.find()
      .where("_id")
      .in(req.body)
      .exec((err, generatedFormData) => {
        if (generatedFormData) {
            console.log("generatedFormData:", generatedFormData);
            res.send(generatedFormData); 
        }

        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
    });
};
