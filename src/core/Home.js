import React, { useState, useEffect } from 'react';
import { getProducts } from "../apiCore/productsApi";
import NewProducts from './NewProducts';
import BestSellers from './bestSellers';
import Layout from './Layout';


const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            setProductsBySell(data.data);
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            setProductsByArrival(data.data);
        });
    };

    return (
        <>
            <Layout>
                 <div className="row">
                </div>  
                {productsByArrival.length != '' ?
                <NewProducts products={productsByArrival}/>   :
                null   
                 }
                {productsByArrival.length != '' ?
                <BestSellers products={productsByArrival}/>   :
                null   
                 }
            </Layout>
            
        </>
    );
};

export default Home;
