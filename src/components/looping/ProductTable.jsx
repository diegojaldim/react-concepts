import './ProductTable.css';
import React from "react";
import products from "../../data/products";


const ProductTable = props => {

    function listProducts() {
        return products.map((item, index) => {
            return (
                <tr 
                    key={item.id} 
                    className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>R$ {item.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="ProductTable">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { listProducts() }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;