import React, { useContext, useEffect, useState } from "react"
import { WrapperContext } from "../index"
import { fetchProducts } from "../interations";

export const UserProductList = ()=>{

    const {token}=useContext(WrapperContext)
    // const [product, setProduct] = useState({name:"",price:"",description:"",imgUrl:""});
    const [products, setProducts] = useState([]);
    // const [isOpen,toggleOpen]=useState(false);

    const handleProducts = ()=>{
        fetchProducts(token).then((data)=>{
            setProducts(data)
            console.log("data:::",data)
        })
    }

    useEffect(()=>{
        handleProducts();
    },[])
    return(
        <div className="container-fluid">

            <div className="row">
                <h2>Product List</h2>
            </div>

            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((data,index)=>(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.description}</td>
                            <td>{data.imgUrl}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

       </div>
    )
}