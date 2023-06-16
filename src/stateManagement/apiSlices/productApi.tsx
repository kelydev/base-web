import apiSlice from './apiSlice'
import { 
  getAllCategoryQuery,
  getProductCategoryQuery,
  createProductQuery,
  getProductQuery,
  deleteProductQuery,
  updateProductMutation,
} from '../../stateManagement/queries';

export const productApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAllCategory: build.query(getAllCategoryQuery),
    getProductCategory: build.query(getProductCategoryQuery),
    createProduct: build.mutation(createProductQuery),
    getProduct: build.query(getProductQuery),
    deleteProduct: build.query(deleteProductQuery),
    updateProduct: build.mutation(updateProductMutation)
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetProductCategoryQuery,
  useCreateProductMutation,
  useGetProductQuery,
  useDeleteProductQuery,
  useUpdateProductMutation,
  } = productApi

export default productApi;