//create new object type

const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll"
const bookPubYear = 1865
const bookISBN = 9798369203415

// Your code goes here
function Book(title,author, publicationYear, ISBN){
    this.title = title;
    this.author = author;
    this.publicationYear = 1865;
    this.ISBN = 9798369203415;
}

// Create a Book instance
const book = new Book(bookTitle, bookAuthor, bookPubYear, bookISBN);

// Print the book properties to the console
console.log("Book Title:", book.title);
console.log("Author:", book.author);
console.log("Publication Year:", book.publicationYear);
console.log("ISBN:", book.ISBN);