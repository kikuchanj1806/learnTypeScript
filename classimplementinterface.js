"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payments = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return "".concat(this.client, " owers ").concat(this.amount, " dollar for this work: ").concat(this.work);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var payments = /** @class */ (function () {
    function payments(recipient, jods, amt) {
        this.recipient = recipient;
        this.jods = jods;
        this.amt = amt;
    }
    payments.prototype.print = function () {
        return "I owe ".concat(this.recipient, " ").concat(this.amt, " dollar for this jod: ").concat(this.jods);
    };
    return payments;
}());
exports.payments = payments;
