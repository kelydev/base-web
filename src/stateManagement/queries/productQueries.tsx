import {endpoints as ep} from '../../core/constants'
import { productDto } from '../models/product/productDto'

export const getProductCategoryQuery = {
  query: (param: any) => {
    return ({
    url: ep.product.getProductCategory+param,
    method: 'GET',
  })},
  transformResponse: (response: any) => response,
}

export const getProductQuery = {
  query: (param: any) => {
    return ({
    url: ep.product.getProduct+param,
    method: 'GET',
  })},
  transformResponse: (response: any) => response,
}

export const createProductQuery = {
  query: (data: productDto) => {
    return ({
    url: ep.product.createProduct,
    data,
    method: 'POST',
  })},
  transformResponse: (response: any) => response,
}

export const deleteProductQuery = {
  query: (param: any) => {
    return ({
    url: ep.product.deleteProduct+param,
    method: 'DELETE',
  })},
  transformResponse: (response: any) => response,
}

export const updateProductMutation = {
  query: (data: productDto) => {
    return ({
    url: ep.product.updateProduct+data.id,
    data,
    method: 'PUT',
  })},
  transformResponse: (response: any) => response,
}