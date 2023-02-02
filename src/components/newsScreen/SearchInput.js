import React from 'react';

const SearchInput = ({filterBySearch}) => {
    
    return (
        <div className='flex justify-center items-center w-[95%] md:w-[70%] xl:w-[50%] rounded-full bg-white mx-auto searchOption '>
        <i className="fa-solid fa-magnifying-glass pl-5"></i>
          <input 
              className="rounded-full py-3 w-full text-xl pl-4 focus:outline-none "
             onChange={filterBySearch}
              placeholder = "Search your Content" 
            />
        </div>
    );
};

export default SearchInput;