import products from '../products.json'

export default function filterList(arr, method) {

    if(method == null) return products;

    else {
          return products.filter(Product => {
          const sizeArray = Product.size.split(" ");
          if(arr.length > 0) {
                if(sizeArray.some(r => arr.indexOf(r) >= 0)) {
                    return Product;
            }
          }
          else {
              return products;
          }
      })  
    }
}