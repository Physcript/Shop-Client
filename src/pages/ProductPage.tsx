
import { useState,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IProduct,InitalProduct } from "../interfaces/product";
import { useNavigate } from "react-router-dom";

export interface IProductPage {}

const ProductPage = ( props:IProductPage ) => {

    const [ product, setProduct ] = useState<IProduct>(InitalProduct)
    const [ error,setError ] = useState('')
    const { productID } =  useParams()
    const location = useLocation()

    const findProduct = async () => {
        const url = 'http://localhost:1337/api/one-product'
        const p_id = {
            id : productID
        }
        const data = JSON.stringify(p_id)
        const request = new Request(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:data
        })
        fetch(request).then((val) => {
            if(val.status === 200){
                val.json().then((json) => {
                    setProduct(json.data)
                })
            }else {
                val.json().then((json) => {
                    setError('Product Not found')
                })
            }
        })
    }

    useEffect(() => {
        if(location.state !== null) {
            setProduct((location.state))
        }else {
            findProduct()
        }
    },[])

    return (
        <div>
            Product
        </div>
    )
}

export default ProductPage