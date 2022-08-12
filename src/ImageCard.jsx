import React from "react";

const ImageCard = ({image}) => {
    return (
        <div className="image grid content-start md:content-around">
            <div className="">
                <img src={image.largeImageURL !== 'N/A' ? image.largeImageURL : 'https://via.placeholder.com/400'} alt=""/>
            </div>
        </div>
    )
}

export default ImageCard;