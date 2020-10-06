import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Newsletter from "../components/Layouts/Newsletter.js"
import Footer from "../components/Layouts/Footer.js"
import ProductBody from "../components/Product/ProductBody.js";
import HeaderV2 from "../components/Header/HeaderV2";
import ProductReview from "../components/Product/ProductReview.js";
import ProductRecommend from "../components/Product/ProductRecommend.js";
import axios from 'axios'
import NewsContent from "../components/News/NewsContent";

export default function ProductDetail(props) {

    const [news, setNews] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/news/` + props.match.params.id)
            .then(res => {
                setNews(res.data)
            }
        )
    },[props.match.params.id])

    return (
        <div className="ProductDetail">
            <HeaderV2/>
            <NewsContent
                news={news}
            />
            <Newsletter/>
            <Footer/>
        </div>
    )
}