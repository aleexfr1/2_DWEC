/* Create a class BookList

Create another class called Book

BookLists should have the following properties:

    Number of books marked as read
    Number of books marked not read yet
    A reference to the next book to read (book object)
    A reference to the current book being read (book object)
    A reference to the last book read (book object)
    An array of all the Books

Each Book should have several properties:

    Title
    Genre
    Author
    Read (true or false)
    Read date, can be blank, otherwise needs to be a JS Date() object

Every Booklist should have a few methods:

    .add(book)
    should add a book to the books list.
    .finishCurrentBook()
    should mark the book that is currently being read as "read"
    Give it a read date of new Date(Date.now())
    Change the last book read to be the book that just got finished
    Change the current book to be the next book to be read
    Change the next book to be read property to be the first unread book you find in the list of books
    Booklists and Books might need more methods than that. Try to think of more that might be useful. */



class Book {
    constructor(title, genre, author){

        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = null;
    }

    BookReaded(){
        read=true;
        readDate=Date.now().toLocaleString();
    }



    get title (){
        return this.title;
    }

    get genre (){
        return this.genre;
    }

    get author (){
        return this.author;
    }

    get read (){
        return this.read;
    }

    get readDate (){
        return this.readDate;
    }

    set title (title){
        this.title = title;
    }

    set genre (genre){
        this.genre = genre;
    }

    set author (author){
        this.author=author;
    }

    set read (read){
        this.read=read;
    }

    set readDate (readDate){
        this.readDate=readDate;
    }
}

class BookList {
        constructor(){

            this.list=[];
            this.numberBooksRead = 0;
        }

        addBook(title, genre, author){

            this.list.push(new Book(title, genre, author));
        }

        bookFinished(){
            this.numberBooksRead++;
        }
}
        

        allBooks();{
            var total =[];
            list.foreach(i => total.push(i));
            return total;
        }


        miLista = new BookList();
        miLista.numberBooksRead

a.addBook("Los Girasoles Ciegos", "Tragedia", "Alberto Mendez");
