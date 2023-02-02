import React, { useEffect, useState } from 'react';  
import ReactPaginate from "react-paginate";
import NewsCard from './NewsCard'
import './News.css'
import SearchInput from './SearchInput';
import NewsCards from './NewsCards';






const News = ({ newsItem }) => {
  const { sectionName, sectionTitle, news } = newsItem;
  const [filter, setFilter] = useState(news);

  // search 
const filterBySearch = (event) => {
  console.log(event.target.value)
  const searchText = (event.target.value);
  const matchProducts = news.filter(items => items.title.toLowerCase().includes(searchText.toLowerCase()));
  setFilter(matchProducts);

}


// start Pagination

// active class
try{
  var header = document.getElementById("filterBtn");
  var btns = header.getElementsByClassName("filterbn");
   for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btnactive");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" btnactive", "");
    }
    this.className += " btnactive";
    });
  }
  
}catch{

}

// Start filter

const filterItem = (categoryItem) => {
  const updateItem = news.filter((currentItem) => {
    return currentItem.category === categoryItem;
  });

  setFilter(updateItem);
}


  return (
    <div className="py-16 container mx-auto px-5 mediaSection">
      <p className="uppercase text-xl font-semibold py-3  text-[#44B0FD]">{sectionName}</p>
      <p className="text-5xl font-bold  py-5">{sectionTitle}</p>

      {/* Search Input */}
      <SearchInput filterBySearch={filterBySearch} />
        

      {/* start filter button*/}
      <div className='flex justify-center items-center'>
          <div className='text-center pt-5 grid grid-cols-2 sm:grid-cols-4  gap-2' id="filterBtn">
              <button className='bg-[#44B0FD] filterbn px-8 py-2 mx-2 rounded-lg hover:bg-[#0a505e] hover:text-white font-semibold' onClick={() => setFilter(news)}>All ({news.length})</button>
              <button className='bg-[#44B0FD] filterbn px-8 py-2 mx-2 rounded-lg hover:bg-[#0a505e] hover:text-white font-semibold' onClick={() => filterItem('News')}>News </button>
              <button className='bg-[#44B0FD] filterbn px-8 py-2 mx-2 rounded-lg hover:bg-[#0a505e] hover:text-white font-semibold' onClick={() => filterItem('Blogs')}>Blogs </button>
              <button className='bg-[#44B0FD] filterbn px-8 py-2 mx-2 rounded-lg hover:bg-[#0a505e] hover:text-white font-semibold' onClick={() => filterItem('Events')}>Events </button>
        </div>
      </div>

    


    <NewsCards filter={filter} />
    
    </div>
  );
};

export default News;
