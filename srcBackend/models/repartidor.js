exports = module.exports = function (app, mongoose) {
  const modelName = "repartidor";
  const schema = mongoose.Schema;

  var orderSchema = new schema({
    // _id: { type: mongoose.Schema.Types.ObjectId },
    // customer: { type: Object, ref: "customer" },

    name: { type: String },
  });

  //Mira para eliminar
  // mongoose.modelNames().includes(order);
  // if (mongoose.modelNames().includes(modelName)) {
  //   mongoose.deleteModel(modelName);
  // }

  mongoose.model(modelName, orderSchema);
};
