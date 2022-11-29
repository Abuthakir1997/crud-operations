import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { SerpApiSearch } from 'google-search-results-nodejs';
// import myLib from "imports-loader?imports=default|jquery|$!./example.js";
//    


const App = () => {
  const [content, setContent] = useState(0);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  var textAreaText = '';

  function spellCheck() {
    textAreaText = document.querySelector('.text-area').value;
    const options = {
      method: 'POST',
      url: 'https://jspell-checker.p.rapidapi.com/check',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1ffdf83fe8mshf929b293d984f30p1fbb24jsn78a4f04aee41',
        'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
      },
      data: {
        "language": "enUS",
        "fieldvalues": textAreaText,
        "config": {
          "forceUpperCase": false,
          "ignoreIrregularCaps": false,
          "ignoreFirstCaps": true,
          "ignoreNumbers": true,
          "ignoreUpper": false,
          "ignoreDouble": false,
          "ignoreWordsWithNumbers": true
        }
      }
    };

    axios.request(options).then(function (response) {
      let res = response.data;
      let { spellingErrorCount, elements } = res;
      console.log(spellingErrorCount, elements);
      if (elements !== undefined) {
        setSuggestions(elements[0].errors);
      }
      else {
        setSuggestions([]);
      }

      setContent(spellingErrorCount);
      console.log(content);
      console.log("suggestions", suggestions);

    }).catch(function (error) {
      console.error(error);
    });

  }

  return (
    <>
      <div className='wrapper'>
        <textarea id="checkTest" className={`text-area ${content > 0 ? "not-correct" : ""}`} placeholder='please enter text to check'>

        </textarea>
        <div className='error-count'>
          Spellingerrorcount : {content}
        </div>
        <button className='submit-button' onClick={spellCheck}>
          submit
        </button>
      </div>
      {
        suggestions.length > 0 ? suggestions.map((suggestionsData) => (
          <div className='suggestions-section'>
            <div className='words'>
              word : {suggestionsData.word}
            </div>
            <div className='suggestions-text'>
              suggestions: {suggestionsData.suggestions.length > 0 ? `${suggestionsData.suggestions},` : "No-suggestions"}
            </div>
          </div>
        )) : ""
      }
    </>


  );

}

export default App;
