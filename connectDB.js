var mongoose = require("mongoose");
var url = require("./secret")

const collectionName = "employees";

var EmployeesSchema = new mongoose.Schema( { empid: Number, empname: String, salary: Number } );
var EmployeesModel = mongoose.model(collectionName, EmployeesSchema);
mongoose.connect(url).then(()=>console.log("CONNECTED"))

module.exports = EmployeesModel;