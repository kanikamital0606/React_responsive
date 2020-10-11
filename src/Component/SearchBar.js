import React from "react";
import "./SearchBar.css";

function SearchBar() {
    return (
        
        
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <input type="text" placeholder="Search" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
