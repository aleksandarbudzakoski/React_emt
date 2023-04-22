import axios from '../custom-axios/axios';

const BookService = {
    fetchBooks: () => {
        return axios.get("/books");
    },

    takenBook: (id) => {
        return axios.post(`/books/rented/${id}`);
    },

    //@DeleteMapping("/delete/{id}")
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },

    // @PostMapping("/create") with RequestBody
    addBook: (name,authorId,category,availableCopies) => {
        return axios.post("/books/create",{
                "name" : name,
                "authorId" : authorId,
                "category" : category,
                "availableCopies" : availableCopies
        })
    },

    editBook :(id,name,authorId,category,availableCopies) =>{
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "availableCopies" : availableCopies,
            "authorId" : authorId
        })
    },
    getBook: (id) =>{
        return axios.get(`books/${id}`);
    }

}

export default BookService