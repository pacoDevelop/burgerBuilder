var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  cors = require("cors");
mongoose = require("mongoose");
const { config } = require("./config");

// Connection to DB
const url = `mongodb://${config.db.ip}:` + config.db.port + config.db.name;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a mongo"))
  .catch(() => console.log("Error al conectar a mongo"));

//Configuracion si lo cambias recuerda cambiarlo en el package en el script de startFull
var port = config.server.port;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Importar modelos y controladores
var models = require("./models/order")(app, mongoose);
var models = require("./models/ingredient")(app, mongoose);
var orderCtrl = require("./controllers/orders");
var ingredientCtrl = require("./controllers/ingredients");

// Rutas
var router = express.Router();
router.get("/", function (req, res) {
  res.send("Funcionando");
});
app.use(router);

// API routes
var server = express.Router();

server.route("/orders").get(orderCtrl.findAllOrders).post(orderCtrl.addOrder);
server.route("/ingredients").get(ingredientCtrl.findAllIngredients);
// .post(ingredientCtrl.addIngredient);

server.route("/orders/:id").get(orderCtrl.findById).put(orderCtrl.updateOrder).delete(orderCtrl.deleteOrder);
server.route("/ingredients/:id").get(ingredientCtrl.findById);

app.use(server);

// Iniciar servidor
app.listen(port, function () {
  console.log(`Node server funcionando en http://localhost:${port}`);
});
