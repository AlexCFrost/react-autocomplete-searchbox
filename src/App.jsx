import {useState} from 'react'
import SearchResult from './search';
import data from './resources/countryData.json'

function App() {

    const [value, setValue] = useState("");
    const [suggest, setSuggest] = useState([])

    // To search 

    const change = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setValue(inputValue);
        const filteredData = data
          .filter((item) => item.name.toLowerCase().startsWith(inputValue))
          .slice(0, 10);
        setSuggest(filteredData.map((item) => item.name));
      };

      // To allow escape button to return from search

      function handleEnter(event) {
        if (event.key === "Escape" && value.trim() !== "") {
          console.log("Escape");
          setSuggest([]);
          setValue("");
        }
      }


  return (
    <div className='container'>
        <h1>Searach</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          change(e);
        }}
        onKeyDown={handleEnter}
        placeholder="Type here"
      />
      <button>Search</button>
      {suggest.map((item, index) => (
        <SearchResult data={item} key={index} />
      ))}
    </div>
  )
}

export default App