import axios from '../custom-axios/axios';

const CategoryService = {
    fetchCategories: () => {
        return axios.get("/categories");
    },

}

export default CategoryService;