import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaders = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products)


    const storedCart = getShoppingCart();
    const savebCart = [];

    for (const id in storedCart){
        const addedProduct = products.find(pd=> pd.id === id);

        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity= quantity;
            savebCart.push(addedProduct);
        }
    }
    return savebCart;
}
export default cartProductLoaders;