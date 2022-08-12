import { useEffect, useState } from "react";

import "./index.css"
import ImageCard from "./ImageCard"

import SearchIcon from "./icons8-search.svg";

const API_URL = 'https://pixabay.com/api/?key=29219479-c3d8f6e8f17acdf9cc379cee0&per_page=50';

const App = () =>  {

    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchImages = async (title) => {
        const response = await fetch(`${API_URL}&q=`+ encodeURIComponent(`${title}`));
        const data = await response.json();
        console.log(data);

        setImages(data.hits);
    }

    useEffect(() => {
        searchImages('red roses')
    }, [])

    return (
        <div className="app bg-gray-800 h-full w-full">
            <h1 className="relative flex text-3xl font-bold justify-center">Test react search Image</h1>
            
            <div className="search relative flex items-center">
                <input className="ml-6 pr-3 pl-10 py-2 font-semihold rounded-2xl focus:ring-gray-500 focus:ring-2 w-full"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img className="h-5 w-5 absolute ml-9"
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchImages(searchTerm)}
                />
            </div>
            
            {
                images?.length > 0
                    ? (
                        <div className="container mx-auto">
                            <div className="grid grid-cols-3 gap-4">
                            {
                                images.map((image) => (
                                    <ImageCard image={image} />
                                ))
                            }
                            </div>
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Images found</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default App;