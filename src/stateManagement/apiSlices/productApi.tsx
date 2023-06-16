import apiSlice from './apiSlice'
import { 
  getAllProductQuery,
} from '../../stateManagement/queries';

export const productApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAllProduct: build.query(getAllProductQuery),
  }),
});

export const {
  useGetAllProductQuery
} = productApi;
//States

export default productApi;