import { Invoice, payments } from "./classimplementinterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("Reuzel", "sell hair wax", 500000);
const documentTwo: hasPrint = new payments("Vinamilk", "buy milk", 2000000);

const allDocuments: hasPrint[] = [];

allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);
