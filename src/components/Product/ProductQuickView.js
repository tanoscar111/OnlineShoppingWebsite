import React, { useState } from 'react';
import '../../Styles/Product.css';
import '../../App.css';
import { faCartPlus, faHeart, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductQuickView(props) {

    const [countCart, setCountCart] = useState(1);
    const product = props.product;
    
    let ratingList = product.productVote.map(a => a.ratingStar); // get all rating
    const totalRating = ratingList.reduce((a, b) => a + b, 0)
    const averageRating = totalRating/ratingList.length;

    const ratingStar = {
        size: 12,
        value: averageRating,
        edit: false,
        activeColor: "#fda32a",
        color: "#ddd",
        isHalf: true
    };

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return(
        <div>
            <div className={props.view === true ? 'ProductQuickView' : 'ProductQuickView displayNone'}>
                <div 
                    className="productquickview-container flex"
                    onClick={()=>{}}
                >
                    <div
                        className="view-close flex-center"
                        onClick={props.closeView}
                        >
                        <FontAwesomeIcon 
                            icon={faTimes}
                            className="icon"
                            />
                    </div>
                    <div className="productquickview-slide">
                        <div className="productquickview-tag">
                            {
                                product.productSale > 0 && <div className="productquickview-tag-item sale">
                                    {product.productSale}%
                                </div>
                            }
                            {
                                product.productSold >= 40 && <div className="productquickview-tag-item hot">
                                    HOT
                                </div>
                            }
                            {
                                product.productSale > 0 && <div className="productquickview-tag-item new">
                                    NEW
                                </div>
                            }
                        </div>
                        <Slider {...settings}>
                            {product.productImg.map((item, index) => {
                                return (
                                    <img key={index} src={item} alt="" className="view-img"/>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="product-info-detail" style={{padding: '0', marginTop: '70px'}}>
                        <div className="product-info-title">
                            {product.productName}
                        </div>
                        <div className="product-info-des" style={{width: '80%'}}>
                            {product.productDes}
                        </div>
                        <Link to="/product"
                            className="product-info-vote"
                            style={{textDecoration: 'none', color: '#111'}}
                            onClick={product.closeView}
                            >
                            <ReactStars {...ratingStar} />
                            <p style={{margin: '0'}}>
                                ({ratingList.length} customer reviews)
                            </p>
                        </Link>
                        <div className="product-info-price" style={{marginTop: '30px'}}>
                            {product.productPrice} vnđ
                        </div>
                        <div className="product-info-cart flex">
                            <div className="count-cart noselect">
                                <div className="count-cart-item left flex-center"
                                    onClick={() => { 
                                        if (countCart > 1) setCountCart(countCart-1) 
                                    }}
                                    >
                                    <FontAwesomeIcon icon={faMinus}/>
                                </div> 
                                <div className="count-cart-item text flex-center">
                                    <form>
                                        <input 
                                            type="text" 
                                            value={countCart}
                                            onChange={e => setCountCart(Number(e.target.value))}
                                        />
                                    </form>
                                </div>
                                <div 
                                    className="count-cart-item right flex-center"
                                    onClick={() => { setCountCart(countCart+1) }}
                                    >
                                    <FontAwesomeIcon icon={faPlus}/>
                                </div>
                            </div>
                            <div className="product-info-addtocart flex-center btn">
                                <FontAwesomeIcon icon={faCartPlus}/>
                                <p>Add to cart</p>
                            </div>
                            <div 
                                className="product-info-wishlist flex-center">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="product-info-line"></div>
                        <div className="product-info-cate flex">
                            <p>Category:</p>
                            <p>{product.productCate}</p>
                        </div>
                        <div className="product-info-line"></div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
