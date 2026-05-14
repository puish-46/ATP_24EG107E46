class Book {
    title;
    author;
    pages;
    isAvailable=true;

    constructor(title, author, pages) {
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

    borrow() {
        this.isAvailable=false;
    }

    returnBook() {
        this.isAvailable=true;
    }

    getInfo() {
        return (`${this.title} by ${this.author} (${this.pages} pages)`);
    }

    isLongBook() {
        return this.pages>300;
    }
}

// creating 5 books
let book1=new Book("Harry Potter", "J.K. Rowling", 350);
let book2=new Book("1984", "George Orwell", 250);
let book3=new Book("The Hobbit", "J.R.R. Tolkien", 310);
let book4=new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 200);
let book5=new Book("The Alchemist", "Paulo Coelho", 180);

// store books in array
let books=[book1,book2,book3,book4,book5];


// display info of all books
console.log("All Books:");
books.forEach((book)=>{
    console.log(book.getInfo());
});


// borrow 2 books
book1.borrow();
book3.borrow();

console.log("\nAfter Borrowing 2 Books:");
console.log(book1.title, "Available:", book1.isAvailable);
console.log(book3.title, "Available:", book3.isAvailable);


// return 1 book
b1.returnBook();
console.log("\nAfter Returning 1 Book:");
console.log(book1.title, "Available:", book1.isAvailable);


// count long books (>300 pages)
let longBookCount=books.filter(book=>book.isLongBook()).length;
console.log("\nNumber of Long Books:", longBookCount);


// list all available books
console.log("\nAvailable Books:");
books.forEach(book=>{
    if (book.isAvailable) {
        console.log(book.getInfo());
    }
});