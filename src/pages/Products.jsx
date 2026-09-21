import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <div className='flex justify-center gap-7 bg-cyan-800'>
                <Link to="men">Mens</Link>
                <Link to="women">Womens</Link>
                <Link to="kids">Kids</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Products
