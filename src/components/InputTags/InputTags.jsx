import { ClearTag, SearchBarSC, UlTags } from "./style";

import { useState, useEffect, useRef } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

function InputTags({getTags, values}) {

  const [tagsVules, setTagsVules] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  
  const inputRef = useRef(null);


  const stringToTagsArray = (tagsString) => {
    if (!tagsString) {
      return [];
    }
  
    const tagsArray = tagsString.split(';').map(tag => tag.trim());
    setTagsVules(tagsArray)
  };


  const clearTag = (index) => {
    const updatedTags = [...tagsVules];
    updatedTags.splice(index, 1);
    setTagsVules(updatedTags);
  };

  const handleSpacebar = (event) => {
    if (event.key === ' ' && inputValue.trim() !== "") {
      const updatedTags = [...tagsVules, inputValue.trim()];
      setTagsVules(updatedTags);
      setInputValue(""); 
      getTags(updatedTags); // Chame getTags com o estado atualizado
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
    stringToTagsArray(values)
    // getTags(tagsVules);
  }, [values]);

  return (

    <SearchBarSC ref={inputRef} onClick={() => setIsInputVisible(true)} >

      <UlTags>
      {tagsVules.length === 0 ? (
          <li className='placeholder'>Tags</li>
        ) : (
          tagsVules.map((tag, index) => (
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

export default InputTags;