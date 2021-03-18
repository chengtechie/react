import React, {useState, useEffect} from 'react'
import axios from 'axios'

// useEffect -> can trigger when rerender and data changes
// 1st param -> callback function
// 2nd param -> empty array, array or none
//  if empty array -> first render
//  if empty -> rerender without data change
//  if array -> rerender with data change

// useEffect() returns a lambda, it always calls BEFORE rerender


const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    // useEffect(() => {
    //     console.log(`I only run once`)
    // }, [])
    // useEffect(() => {
    //     console.log(`I run after every render`)
    // }) // very rare
    useEffect(() => {
        // console.log(`I run after every render with data change`)
        const timeOutId = setTimeout(() => {
            if (term.length > 2) {
                axios.get('', {
                    baseURL: 'https://en.wikipedia.org/w/api.php',
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                })
                    .then(response => {
                        const temp = response.data.query.search
                        // console.log(temp)
                        setResults(temp)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
        }, 500)
        return () => {
            // console.log('Clean up')
            clearTimeout(timeOutId)
        }
    }, [term])
    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
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
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="ui field">
                    <label>Enter search term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search