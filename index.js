"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classimplementinterface_1 = require("./classimplementinterface");
var documentOne = new classimplementinterface_1.Invoice("Reuzel", "sell hair wax", 500000);
var documentTwo = new classimplementinterface_1.payments("Vinamilk", "buy milk", 2000000);
var allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);
