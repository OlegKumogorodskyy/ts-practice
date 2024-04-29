import { Book } from './Book';
import { ElectronicBook } from './ElectronicBook';

const book = new Book("Animal Farm", "George Orwell", 1945);
console.log(book.getSummary());

const eBook = new ElectronicBook("Nineteen Eighty-Four", "George Orwell", 1949, "EPUB");
console.log(eBook.getSummary());
