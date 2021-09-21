import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './topfold.css'

const TopFold = () => {


    const [query, setQuery] = useState("");

    const handleQuery = (e) => {

        setQuery(e.target.value);
        
    }

    return (
        <div className='topfold'>
            {window.location.pathname === '/' ? <div className="home-topfold">
                <div className="searchbar">
                    <i class="devicon-opera-plain"></i>
                    <input placeholder="search for expenses" value={query} onChange={(e) => handleQuery(e)}></input>

                </div>
                <Link to="/add-expense">
                <div className="add-button">
                    <i className="fi-rr-add"></i>
                    <label>Add</label>
                </div>
                </Link>
            </div> : (
                    <div className="add-topfold">
                        <Link to="/">
                        <div className="add-topfold-button">
                                <label>Back</label>
                        </div>
                        
                        </Link>
                        
                        <Link to="/">
                        <div className="add-topfold-button">
                                <label>Cancel</label>
                                </div>                           
                            
                        </Link>
                        
                    </div> 
                
            )}
        </div> 
            
    )
}

export default TopFold
