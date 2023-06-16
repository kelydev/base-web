import { loginMutation } from './userQueries'
import {
    getProductCategoryQuery, 
    getProductQuery, 
    createProductQuery, 
    deleteProductQuery, 
    updateProductMutation
} from './productQueries'
import { getAllCategoryQuery } from './categoryQueries'

export {
    loginMutation,
    getAllCategoryQuery,
    getProductCategoryQuery,
    createProductQuery,
    getProductQuery,
    deleteProductQuery,
    updateProductMutation,
}