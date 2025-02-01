import { Product } from "@/types/product";
import { json } from "stream/consumers";

export const addToCart = (product : Product) =>{
    const cart : Product[] = JSON.parse(localStorage.getItem("cart")   || "[]")
    const exixtingProductIndex = cart.findIndex(item=>item._id === product._id)
    if(exixtingProductIndex > -1){
        cart[exixtingProductIndex].stockLevel +=1
    }
     else{
        cart.push({
            ...product,stockLevel: 1
        })
     }
     localStorage.setItem('cart',JSON.stringify(cart))
}
export const removeFromCart =(productId : string, quantity :number) => {
    let cart : Product[] =  JSON.parse(localStorage.getItem('cart')  || '[]' )
    cart = cart.filter(item =>item._id !==productId)
    localStorage.setItem('cart',JSON.stringify(cart))
} 
export const updateCartQuantity = (productId : string) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]' )
    const productIndex = cart.findIndex( item => item._id === productId)
    if(productIndex > -1){
        cart[productIndex].stockLevel += 1
    }
}
export const getCatrItems = () :Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}