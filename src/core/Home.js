import React, { useState, useEffect } from 'react';
import { getProducts } from './apiCore';
import Card from './Card';
import {NewProducts} from './newProducts';
import {BestSellers} from './bestSellers';
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
            {/* <SliderMainWrapper/> */}
            {/* <h2 className="mb-4">........</h2> */}
            <Layout>
                {/*<div class="col-lg-12 col-md-12 col-12 no_padd">
                    <img class="img-fluid" src="../assets/images/banner.png" alt="logo"/>
                </div>*/}
                <div className="row">
                    {productsByArrival.map((product, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
                <NewProducts/>       
                {/* <h2 className="mb-4">Best Sellers</h2> */}
                <div className="row">
                    {productsBySell.map((product, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
                <BestSellers/>
            </Layout>
            
        </>
    );
};

export default Home;
