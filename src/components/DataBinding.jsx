export function DataBinding() {
    const productId = 2092
    const name = "LG OLED"
    const price = 45000.00
    const stock = true 
    return (
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{productId}</dd>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Product Price</dt>
                <dd>{price}</dd>
                <dt>Product Stock</dt>
                <dd>{stock?"Available":"Out Of Stock"}</dd>
            </dl>
        </div>
    )
}


export function JsonDataBinding() {
    const product = {
        "id": 275252,
        "name": "Samsung O LED TV",
        "price": 568363,
        "stock": false
    }
    return (
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{product.id}</dd>
                <dt>Product Name</dt>
                <dd>{product.name}</dd>
                <dt>Product Price</dt>
                <dd>{product.price}</dd>
                <dt>Product Stock</dt>
                <dd>{product.stock?"Available":"Out Of Stock"}</dd>
            </dl>
        </div>
    )
}

export function ArrayDataBinding() {
    const categories = ["All", "Mobiles", "Laptops", "Watches"]
    return (
        <div>
            <h2>Category</h2>
            <ul>
                {
                    categories.map((categorey)=> 
                        <li key={categorey}>{categorey}</li>
                    )
                }
            </ul>
        </div>
    )
}

export function ArrayDataBinding2() {
    const categories = ["All", "Mobiles", "Laptops", "Watches"]
    return (
        <div>
            <h2>Category</h2>
            <table className="table table-stripped table-hover" border='1'>
                <thead>
                    <tr>
                        <th>categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((categorey) =>
                            <tr>
                                <td>{categorey}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}