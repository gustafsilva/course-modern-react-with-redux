import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect( () => {
        const searchWikipedia = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        }

        const timeoutId = setTimeout(() => {
            if (term) {
                searchWikipedia();
            }
        }, 500);

        return () => {
            // CLEANUP
            clearTimeout(timeoutId);
        }
    }, [term]);

    const renderedResults = results.map(result => (
        <div className="item" key={result.pageid}>
            <div className="right floated content">
                <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
    ))

    return (
        <div>
           <div className="ui form">
               <div className="field">
                   <label htmlFor="term">Enter Search Term</label>
                   <input
                       type="text"
                       className="input"
                       name="term"
                       value={term}
                       onChange={event => setTerm(event.target.value)}
                   />
               </div>
           </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;
