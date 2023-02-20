import React from 'react'
import FormInput from '../common/FormInput';
const Search = ({timeLimit = 2000, callbackApi, ...props}) => {

  // const [search, setSearch] = useState('')
  const deboundInput = () => {
    let timer;
    return function(value){
      clearTimeout(timer);
      timer = setTimeout(() => {
        // api call 
        callbackApi(value)
      }, timeLimit)
    }
  }
  const debounce = deboundInput();
  const onChangeHandler = (e) => {
    debounce(e.target.value);
  }
return (
  <div className='search-box-container'>
    <FormInput onChange={onChangeHandler} type="search" {...props}/>
  </div>
)
}

export default Search;