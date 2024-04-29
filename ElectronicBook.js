"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicBook = void 0;
const Book_1 = require("./Book");
class ElectronicBook extends Book_1.Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }
    getSummary() {
        return `${super.getSummary()} in ${this.format} format`;
    }
}
exports.ElectronicBook = ElectronicBook;
