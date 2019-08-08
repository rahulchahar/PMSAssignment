 export function editProductDetails(postId, Desc, Price) {
  return {
    type: 'EDIT_PRODUCT',
    postId,
    Desc,
    Price
  }
 }
 export function deleteProduct(i){
  console.log('delete');
  return{
  type: 'DELETE_PRODUCT',
  i
  }

 }

  export function addProduct(name,code){
  return{
  type: 'ADD_PRODUCT',
  name,
  code
  }

 }

export function addDesc(postId,code,Desc,Price){  
  return{
  type: 'ADD_DESCRIPTION',
  code,
  Desc,
  Price,
  postId
  }

 }