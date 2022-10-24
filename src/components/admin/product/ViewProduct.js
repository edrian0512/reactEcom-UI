import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewProduct() {


    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);

    useEffect(() => {
        axios.get('/api/view-product').then(res => {
            if (res.data.status === 200) {
                setProduct(res.data.products);
                setLoading(false);
            }
        });
    }, []);


    var display_ProductData = '';

    if (loading) {
        return <h4>View Products Loading....</h4>
    } else {
        display_ProductData = viewProduct.map((item) => {
            return (
                <tr key={ item.id }>
                    <td>{item.id}</td>
                    <td>{item.category_id}</td>
                    <td>{item.name}</td>
                    <td>{item.selling_price}</td>
                    <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt={item.name}/></td>
                    <td><Link to="edit-product" className="btn btn-success btn-sm">Edit</Link></td>
                    <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                
                </tr>
            );
        });
    }

    return (

        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>
                        View Product
                        <Link to="/admin/view-product" className="btn btn-primary btn-sm float-end">View Product</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category Name</th>
                                    <th>Product Name</th>
                                    <th>Selling Price</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {display_ProductData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default ViewProduct;