const myLibrary = [];

function Book(title, author, pages){

    let errorString = "Book: input invalid, you have entered invalid: "
    let errors = [];

    if(typeof title !== 'string') errors.push('title'); 
    if(typeof author !== 'string') errors.push('author');
    if(typeof pages !== 'number') errors.push('pages');

    if(errors.length){
        console.log(errorString + errors.join(", "));
        return;
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = () => {
        return [this.title, this.author, this.pages,this.read];
    }
}

function addBookToLibrary(book){

    if(typeof book !== 'object' || book === null){
        console.log(`addBookToLibrary: \"${book}\" is not an object`);
        return;
    }

    if(!book.title || !book.author || !book.pages){
        console.log(`addBookToLibrary: \"${JSON.stringify(book)}\" is not a valid Book object`);
        return;
    }

    myLibrary.push(book);
}

function displayBooks(){

}
