import { ClearTag, SearchBarSC, UlTags } from "./style";

import { useState, useEffect, useRef } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

function SearchBar({ getSearch }) {

  const [tagsSearch, setTagsSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef(null);


  const clearTag = (index) => {
    const updatedTags = [...tagsSearch];
    updatedTags.splice(index, 1);
    setTagsSearch(updatedTags);
  };

  const handleSpacebar = (event) => {
    if (event.key === ' ' && inputValue.trim() !== "") {
      setTagsSearch([...tagsSearch, inputValue.trim()]);
      setInputValue(""); 
      getSearch(tagsSearch)
    }
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getSearch(tagsSearch);
  }, [tagsSearch, getSearch]);

  return (

    <SearchBarSC ref={inputRef} onClick={() => setIsInputVisible(true)} >

      <UlTags>
      {tagsSearch.length === 0 ? (
          <li className='placeholder'>Buscar tags</li>
        ) : (
          tagsSearch.map((tag, index) => (
            <li className='tag-li' key={index} id={index}> {tag} <ClearTag onClick={() => clearTag(index)}><IoMdCloseCircleOutline /></ClearTag></li>
          ))
        )}

        {
          isInputVisible && <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleSpacebar} />
        }
      </UlTags>

    </SearchBarSC>


  )
}

export default SearchBar;
