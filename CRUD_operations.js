const EmployeesModel = require('./connectDB')
const mongoose = require('mongoose')

// READ operation
EmployeesModel.find().then(afterDataRetrieved)
function afterDataRetrieved(data)
{ console.log(data)
  mongoose.disconnect();
}
