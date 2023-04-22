import React from 'react';
import {useNavigate} from "react-router-dom";

const ProductEdit = (props) =>{
    const history = useNavigate();
    const [formData, updateFormData] = React.useState(
        {
            name: "",
            authorId: 0,
            category: 0,
            availableCopies: 0
        }
    )
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {

        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.books.name ;
        const authorId = formData.authorId !== 0 ? formData.authorId: props.books.authorId ;
        const category = formData.category !== 0 ?  formData.category :  props.books.category ;
        const availableCopies = formData.availableCopies !== 0 ?  formData.availableCopies : props.books.availableCopies;

        props.onEditBook(props.books.id, name, authorId, category, availableCopies);
        history("/books");
    }



    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.books.name}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="authorId" className="form-control" onChange={handleChange} >
                            {props.authors.map((term) => {
                                if (props.books.authorId !== undefined &&
                                    props.books.authorId === term.id)
                                    return <option selected={props.books.authorId}
                                                   value={term.authorId}>{term.name}{term.surname}</option>
                                else return <option value={term.authorId}>{term.name} {term.surname} </option>
                            })}
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>{
                                    if (props.books.category !== undefined &&
                                        props.books.category === term)
                                        return <option selected={props.books.category} value={term}> {term.toString()} </option>
                                    else return <option value={term}>{term.toString()}</option>
                                }
                            )}
                        </select>
                    </div>

                    <br></br>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.books.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductEdit;