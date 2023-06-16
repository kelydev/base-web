import {endpoints as ep} from '../../core/constants'
//import { productDto } from '../models/product/productDto'

export const getAllProductQuery = {
  query: (data: any) => {
    return ({
    url: ep.product.getAllProduct,
    data,
    method: 'GET',
  })},
  transformResponse: (response: any) => response,
}