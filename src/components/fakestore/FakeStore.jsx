import { useState, useEffect } from "react"
import './FakeStore.css'

export function FakeStoreAPI() {
    const [categories, setCategories] = useState([])

    function loadCategories(url) {
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
    

    useEffect(() => {
        loadCategories("https://fakestoreapi.com/products/categories")
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error("Failed to load categories:", error);
            });
    }, []);
    

    return (
        <div className="p-5 products">
            <header className="d-flex justify-content-center align-items-center header rounded-4">
                <div className="col-2 ps-5">       
                    <div className="bi bi-cart-fill cart-symbol">
                        
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-10">
                    <div>
                        <div className="title">Shop the Best Deals!</div>
                        <div><input type="text" className="form-control pt-3 pb-3 rounded-3 search-input" placeholder="Search products"/></div>
                    </div>
                </div>
            </header>
            <section>
                <div className="mt-1">
                    <div className="pt-1 fw-bold fs-2">
                        Categories
                    </div>
                    <div className="p-4 d-flex justify-content-between">
                        {
                            categories.map((category) => (
                                <span key={category} className="fs-4 category-box">{toTitleCase(category)}</span>
                            ))
                        }
                    </div>
                </div>
                <main>

                </main>
            </section>
        </div>
    )
}