const productInStock = require('./Actividad')
const productsToBuy = require('./Actividad_Clients')

productInStock.forEach(element => console.log(element));
productsToBuy.forEach(item => console.log(item))
