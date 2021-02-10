let book = {
    bookName:       "My Book",
    authorName:     "Mira'le Yosman", 
    publishYear:    "1987",
    numberPages:    "33"
};

function bookDescription(book) {
    return `The book "${book.bookName}" was written by ${book.authorName} in the year ${book.publishYear}.`;
}

console.log(bookDescription(book));