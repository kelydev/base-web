import {endpoints as ep} from '../../core/constants'
//import { productDto } from '../models/product/productDto'

export const getAllCategoryQuery = {
  query: (data: any) => {
    return ({
    url: ep.category.getAllCategory,
    data,
    method: 'GET',
  })},
  transformResponse: (response: any) => response,
}
