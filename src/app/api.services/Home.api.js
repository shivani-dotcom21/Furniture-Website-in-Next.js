import axios from "axios"

 



let getSliders = ()=> {
    //Slider data using slider api
}

// let getProduct= async ()=> {
//     let apiRes=await axios.get(`https://dummyjson.com/products`)
//     let res=await apiRes.data                                            // async/await
//     let finalRes= res.products
//     return finalRes
// }
// export {getProducts}


let getProducts = ()=> {
    return axios.get(`https://dummyjson.com/products`)
    .then((res)=>res.data)
    .then((finalRes) =>finalRes.products)
}
export {getProducts}
