import React from 'react';
import NewsCard from './NewsCard';

const NewsCards = ({filter}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  py-16  gap-7 ">
        { filter.map((items,index)=><NewsCard key={index} items={items}/>)}
      </div>

    );
};

export default NewsCards;