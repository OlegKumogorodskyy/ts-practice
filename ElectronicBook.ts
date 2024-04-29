import { Book } from './Book';

export class ElectronicBook extends Book {
    private format: string;

    constructor(title: string, author: string, year: number, format: string) {
        super(title, author, year);
        this.format = format;
    }

    public getSummary(): string {
        return `${super.getSummary()} in ${this.format} format`;
    }
}
