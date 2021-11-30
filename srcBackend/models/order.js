exports = module.exports = function (app, mongoose) {
  const modelName = "order";
  const schema = mongoose.Schema;

  var orderSchema = new schema({
    // _id: { type: mongoose.Schema.Types.ObjectId },
    // customer: { type: Object, ref: "customer" },
    orderData: {
      address: {
        country: { type: String, required: true },
        street: { type: String, required: true },
        zipCode: { type: String, required: true },
      },
      email: { type: String, required: true },
      name: { type: String, required: true },
    },
    // repartidor: { type: schema.Types.ObjectId, ref: "repartidor",required:true },
    deleveryMethod: { type: String, required: true },
    ingredients: {
      bacon: { type: Number, required: true },
      cheese: { type: Number, required: true },
      meat: { type: Number, required: true },
      salad: { type: Number, required: true },
    },
    price: { type: Number, required: true },
  });

  //Mira para eliminar
  // mongoose.modelNames().includes(order);
  if (mongoose.modelNames().includes(modelName)) {
    mongoose.deleteModel(modelName);
  }

  mongoose.model(modelName, orderSchema);
};
