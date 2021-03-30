import React, { useContext, useEffect, useState } from "react"
import { WrapperContext } from "../index"
import { addProduct, fetchProducts } from "../interations";

export const AdminProductList = ()=>{

    const {token}=useContext(WrapperContext)
    const [product, setProduct] = useState({name:"",price:"",description:"",imgUrl:""});
    const [products, setProducts] = useState([]);
    const [isOpen,toggleOpen]=useState(false);

    const handleProducts = ()=>{
        fetchProducts(token).then((data)=>{
            setProducts(data)
            console.log("data:::",data)
        })
    }

    const handleClose=()=>{
        setProduct({name:"",price:"",description:"",imgUrl:""});
        toggleOpen(!isOpen)
    }

    const handleCreate = ()=>{
        const {name,price,description,imgUrl} = product;
        addProduct(token, name,price,description,imgUrl).then(()=>{
            handleProducts();
            handleClose();
        })
    }

    useEffect(()=>{
        handleProducts();
    },[])

    if(isOpen)
    return(
        <div className="container-fluid">
            <div className="col-sm-8">
                <form action="">
                    <input 
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    value={product.name}
                    onChange={(e)=>{
                        setProduct((prod)=>({...prod,name:e.target.value}))
                    }}
                    />
                    
                    <input 
                    type="text"
                    name="price"
                    className="form-control"
                    required
                    value={product.price}
                    onChange={(e)=>{
                        setProduct((prod)=>({...prod,price:e.target.value}))
                    }}
                    />

                    <input 
                    type="text"
                    name="description"
                    className="form-control"
                    required
                    value={product.description}
                    onChange={(e)=>{
                        setProduct((prod)=>({...prod,description:e.target.value}))
                    }}
                    />

                    <input 
                    type="text"
                    name="imgUrl"
                    className="form-control"
                    required
                    value={product.imgUrl}
                    onChange={(e)=>{
                        setProduct((prod)=>({...prod,imgUrl:e.target.value}))
                    }}
                    />

                    <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={handleCreate}
                    >Add product</button>

                    <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClose}
                    >Cancel</button>

                </form>
            </div>
        </div>
    )

    return(
       <div className="container-fluid">

            <div className="row">
                <h2>Product List</h2>
            </div>

            <div className="row">
                <button
                onClick={()=>{
                    toggleOpen(!isOpen)
                }}
                >+Add Product</button>
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