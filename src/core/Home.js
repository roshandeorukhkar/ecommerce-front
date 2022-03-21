import React, { useState, useEffect } from 'react';
import { getProducts } from './apiCore';
import Card from './Card';
import NewProducts from './NewProducts';
import BestSellers from './bestSellers';
import Search from './Search';
import {SliderMainWrapper} from "./SliderMainWrapper"
import Layout from './Layout';

const Home = () => {
    
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <>
            <Layout>
                 <div className="row">
                   
                </div>  
                {productsByArrival.length != '' ?
                <NewProducts products={productsByArrival}/>   :
                null   
                 }
                {/* <div className="row">
                    {productsBySell.map((product, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
                    ----
                     {productsByArrival.map((product, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                 */}
                {productsByArrival.length != '' ?
                <BestSellers products={productsByArrival}/>   :
                null   
                 }
            </Layout>
            
        </>
    );
};

export default Home;
