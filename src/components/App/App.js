import {BrowserRouter, BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom'
import './App.css';
import React,{Component} from "react";
import Books from "../Books/BookList/Books";
import BookService from "../../repository/booksRepository";
import Authors from "../Authors/authors";
import AuthorsService from "../../repository/authorsRepository";
import Header from "../Header/Header";
import CategoryService from "../../repository/categoryRepository";
import Categories from "../Categories/categories";
import BookAdd from "../Books/BookAdd/BookAdd";
import BookEdit from "../Books/BookEdit/BookEdit";

class App extends Component{

    constructor() {
        super();
        //sostojbata e sekogas objekt i sodrzi (key, value)
        this.state= {
             books: [],
             authors: [],
             categories: [],
             selectedBook: {}
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={"/books"} element={
                                <Books books={this.state.books}
                                       onDelete={this.deleteBook}
                                       onEdit={this.getBook}
                                       takenBook={this.takenBook}
                                />}/>
                            <Route path={"/"} element={<Books books={this.state.books} />}/>
                            <Route path={"/authors"} element={<Authors authors={this.state.authors}/>}/>
                            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"/books/edit/:id"}  element={
                                <BookEdit authors={this.state.authors}
                                          categories={this.state.categories}
                                          onEditBook={this.editBook}
                                          books={this.state.selectedBook}/>}/>
                            <Route path={"/books/create"}  element={
                                <BookAdd authors={this.state.authors}
                                         categories={this.state.categories}
                                         onAddBook={this.addBook}/>}/>
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
            // <div>
            //     <Books books={this.state.books}/>
            // </div>
        )
    }

    loadBooks = () =>{
        BookService.fetchBooks()
            .then((data)=>{
                this.setState({
                      books: data.data
                })
            });
    }

    loadAuthors = () =>{
        AuthorsService.fetchAuthors()
            .then((data)=>{
                this.setState({
                    authors: data.data
                })
            });
    }

    loadCategories = () =>{
        CategoryService.fetchCategories()
            .then((data)=>{
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteBook = (id) =>{
        BookService.deleteBook(id)
            .then(()=>{
                this.loadBooks();
            });
    }

    takenBook = (id) =>{
        BookService.takenBook(id)
            .then(()=>{
                this.loadBooks();
            });
    }

    addBook = (name,authorId,category,availableCopies) =>{
        BookService.addBook(name,authorId,category,availableCopies)
            .then(()=>{
                this.loadBooks();
            });
    }

    getBook = (id) =>{
        BookService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
            })
        })
    }

    editBook = (id, name,authorId,category,availableCopies) =>{
        BookService.editBook(id,name,authorId,category,availableCopies)
            .then(()=>{
                this.loadBooks();
            });
    }


    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }




}

export default App;
