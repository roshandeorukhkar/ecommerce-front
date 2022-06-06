import React, { useState, useEffect } from "react";
import { getTopCategories,getCategories, list } from "./apiCore";
import Card from "./Card";

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false
    });

    const { categories, category, search, results, searched } = data;
    //const categories =[], category=[], search =[], results=[], searched = [];

   /* const loadCategories = () => {
        getCategories().then(data => {
            // if (data.error) {
            //     console.log(data.error);
            // } else {
            //     setData({ ...data, categories: data });
            // }
        });
    };
    useEffect(() => {
        loadCategories();
    }, []); */
    const [categories_list, setCategories_list] = useState([])
    //const [categories_list_top, setCategories_list_top] = useState([])

     useEffect(async () => {
        let response = await getCategories()
        setCategories_list(response)
        /* let response_ = await getTopCategories()
        console.log(response_)
        console.log(5555555)
        setCategories_list_top(response_) */
       
    }, []);
    

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true });
                    }
                }
            );
        }
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched != '' && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

                <div className="row">
                    {results.map((product, i) => (
                        <div className="col-4 mb-3">
                            <Card key={i} product={product} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="search_filter">
                <select 
                    className="select_dropdown"
                    onChange={handleChange("category")}
                >
                <option value="">All Categories</option>
                       {
                        categories_list.map(function(item, i){
                            return <option value={item._id}>{item.name}</option>
                        })
                        }
                    
                    
                    {/* categories.map((c, i) => (
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    )) */}
                </select>
                <input 
                    type="text" 
                    onChange={handleChange("search")}
                    placeholder="Search Product"/>
                <button className="search_btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
    );

    return (
        <div className="row">
            <div className="container mb-3">{searchForm()}</div>
                {searchedProducts(results)}
        </div>
    );
};

export default Search;