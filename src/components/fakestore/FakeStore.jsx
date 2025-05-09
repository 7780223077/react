import { useState, useEffect } from "react"
import './FakeStore.css'

export function FakeStoreAPI() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    function getApiService(url) {
        return fetch(url)
            .then((response) => response.json())
    }

    function toTitleCase(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    function updateProductsListToStartsWith(e) {
        getApiService("https://fakestoreapi.com/products")
            .then(products => {
                const filteredProducts = products.filter(product => {
                    return product.title.toLowerCase().startsWith(e.target.value.toLowerCase())
                });
                setProducts(filteredProducts);
            })
            .catch(error => {
                console.error("Failed to load products:", error);
            });
    }
    

    useEffect(() => {
        getApiService("https://fakestoreapi.com/products/categories")
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error("Failed to load categories:", error);
            });
        
        getApiService("https://fakestoreapi.com/products")
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.error("Failed to load products:", error);
            });
    }, []);


    return (
        <div className="ps-5 pe-5 pt-3 pb-3 products">
            <header className="d-flex justify-content-center align-items-center header rounded-4">
                <div className="col-1">       
                    <div className="bi bi-cart-fill cart-symbol">
                        
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-11">
                    <div>
                        <div className="title">Shop the Best Deals!</div>
                        <div><input type="text" className="form-control pt-2 pb-2 rounded-3 search-input" placeholder="Search products" onKeyUp={updateProductsListToStartsWith}/></div>
                    </div>
                </div>
            </header>
            <section>
                <div className="mt-1">
                    <div className="pt-4 d-flex justify-content-between">
                        {
                            categories.map((category) => (
                                <span key={category} className="fs-4 category-box">{toTitleCase(category)}</span>
                            ))
                        }
                    </div>
                </div>
                <main>
                    <div className="fs-2 ps-2 pt-2 fw-medium">
                        Featured Products
                    </div>
                    <section>
                        <div className="d-flex flex-wrap justify-content-between">
                            {
                                products.map(product => 
                                    <div className="card m-2" key={product.id}>
                                        <img src={product.image} className="card-img-top" />
                                        <div className="card-body">
                                            <h6 className="card-title">{product.title}</h6>
                                            <div className="card-text">
                                                {
                                                [...Array(5)].map((_, i) => (
                                                    <i
                                                    key={i}
                                                    className={`bi ${i < Math.round(product.rating?.rate) ? 'bi-star-fill' : 'bi-star'} text-warning`}
                                                    ></i>
                                                ))
                                                }
                                                <span className="ms-1 text-muted">({product.rating?.count})</span>
                                            </div>
                                            <p className="card-text">${product.price}</p>
                                            <div className="text-center w-100">
                                                <button className="btn text-dark bg-light border rounded px-4 py-2 fw-semibold">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </main>
            </section>
        </div>
    )
}