"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const ElectronicBook_1 = require("./ElectronicBook");
const book = new Book_1.Book("Animal Farm", "George Orwell", 1945);
console.log(book.getSummary());
const eBook = new ElectronicBook_1.ElectronicBook("Nineteen Eighty-Four", "George Orwell", 1949, "EPUB");
console.log(eBook.getSummary());
