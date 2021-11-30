//File: controllers/orders.js
const mongoose = require("mongoose");
const Order = mongoose.model("order");

//GET - Devuelve todo
exports.findAllOrders = function (req, res) {
  Order.find(function (err, orders) {
    if (err) res.send(500, err.message);

    console.log("GET /orders");
    return res.status(200).jsonp(orders);
  });
};

//GET - Devuelve por id
// exports.findById = async function (req, res) {
exports.findById = async function (req, res) {
  // const order = await Order.find({
  //   query: { _id: req.params.id, $populate: [{ path: "repartidor" }] },
  // });
  // console.log(order);
  // const result = order.data[0];

  // res.status(200).jsonp(result);
  Order.findById(req.params.id, function (err, order) {
    if (err) return res.send(500, err.message);
    console.log("GET /order/" + req.params.id);
    res.status(200).jsonp(order);
  });
};

//POST - Inserta
exports.addOrder = function (req, res) {
  console.log("POST");
  //   console.log(req.body);

  //   let uuid = uuidv4();
  var order = new Order({
    // _id: uuid,
    price: req.body.price,
    ingredients: req.body.ingredients,
    deleveryMethod: req.body.deleveryMethod,
    orderData: req.body.orderData,
  });

  order.save(function (err, order) {
    if (err) res.send(404, err.message);
    res.status(200).jsonp(order);
  });
};

//PUT - Actualizar registro
exports.updateOrder = function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    (order.price = req.body.price),
      (order.ingredients = req.body.ingredients),
      (order.customer = req.body.customer),
      order.save(function (err) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(order);
      });
  });
};

//DELETE -Borrar registro por id
exports.deleteOrder = function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    console.log("DELETE- id " + req.params.id);
    if (order) {
      order.remove(function (err) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp("true");
      });
    } else {
      res.status(404).jsonp("false");
    }
  });
};
