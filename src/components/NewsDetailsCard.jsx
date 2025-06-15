import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div>
            
            <div className="py-5">
                <img src={news.image_url} alt="" />
            </div>
            <h1 className='font-bold text-3xl py-5'>{news.title}</h1>
            <p className="pb-2">{news.details}</p>
            <Link to={`/category/${news.category_id}`}> 
            <button className='btn btn-secondary '>⬅️ Back to Category</button>
            </Link>
        </div>
    );
};

export default NewsDetailsCard;