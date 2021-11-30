//File: controllers/ingredients.js
const mongoose = require("mongoose");
const Ingredient = mongoose.model("ingredient");

// GET - Devuelve todo
exports.findAllIngredients = function (req, res) {
  Ingredient.find(function (err, ingredients) {
    if (err) res.send(500, err.message);

    console.log("GET /ingredients");
    return res.status(200).jsonp(ingredients);
  });
};

//GET - Devuelve por id

exports.findById = async function (req, res) {
  Ingredient.findById(req.params.id, function (err, Ingredient) {
    if (err) return res.send(500, err.message);
    console.log("GET /Ingredient/" + req.params.id);
    res.status(200).jsonp(Ingredient.store);
  });
};

//POST - Inserta
// exports.addingredient = function (req, res) {
//   console.log("POST");
//   //   console.log(req.body);

//   var Ingredient = new Ingredient({

//     price: req.body.price,
//     ingredients: req.body.ingredients,
//     customer: req.body.customer,
//   });

//   Ingredient.save(function (err, Ingredient) {
//     console.log(err, Ingredient);
//     if (err) return res.send(500, err.message);
//     res.status(200).jsonp(Ingredient);
//   });
// };

// //PUT - Actualizar registro
// exports.updateingredient = function (req, res) {
//   Ingredient.findById(req.params.id, function (err, Ingredient) {
//     (Ingredient.price = req.body.price),
//       (Ingredient.ingredients = req.body.ingredients),
//       (Ingredient.customer = req.body.customer),
//       Ingredient.save(function (err) {
//         if (err) return res.send(500, err.message);
//         res.status(200).jsonp(Ingredient);
//       });
//   });
// };

// //DELETE -Borrar registro por id
// exports.deleteingredient = function (req, res) {
//   Ingredient.findById(req.params.id, function (err, Ingredient) {
//     Ingredient.remove(function (err) {
//       if (err) return res.send(500, err.message);
//       res.status(200);
//     });
//   });
// };
