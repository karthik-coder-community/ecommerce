import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
// import StarRatings from "react-star-ratings";
import Image from "next/image";
import CartContext from "@/context/CartContext";

const ProductItem = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(localStorage.getItem('selectedImage') || '/images/fav.png');

  useEffect(() => {
    localStorage.setItem('selectedImage', selectedImage);
  }, [selectedImage]);

product._id="64709054a1005c321ec7424d"
  const handleImageClick = () => {
    console.log("data_product",product)
    if (selectedImage === '/images/fav.png') {
      setSelectedImage('/images/fav-select.png');
    } else {
      setSelectedImage('/images/fav.png');
    }
  };
  const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      gender: product.gender,
      category: product.category,
      image: product.images[0].url,
      stock: product.stock,
      seller: product.seller,
    });
  };

  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                product?.images[0]
                  ? product?.images[0].url
                  : "/images/default_product.png"
              }
              alt="product anme"
              height="240"
              width="240"
            />
         <span className="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
      <img
        src={selectedImage}
        height="40"
        width="120"
        alt="BuyItNow"
        onClick={handleImageClick}
      />
    </span>
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <Link
              href={`/product/${product._id}`}
              className="hover:text-blue-600"
            >
              {product.name}
            </Link>
            
            <p className="text-gray-500 mb-2">
              {product?.description.substring(0, 150)}...
            </p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
            ₹
 {product?.price}
            </span>

            {/* <p className="text-green-500">Free Shipping</p> */}
            <div className="my-3">
              <a
                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                onClick={addToCartHandler}
              >
                {" "}
                Add to Cart{" "}
               
              </a> 
              {/* test */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;