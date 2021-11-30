exports = module.exports = function (app, mongoose) {
  const modelName = "ingredient";
  const schema = mongoose.Schema;

  var ingredientSchema = new schema({
    store: {
      bacon: { type: Number },
      salad: { type: Number },
      cheese: { type: Number },
      meat: { type: Number },
    },
  });
  mongoose.model(modelName, ingredientSchema);
};
