import React from "react";

export default function ArticleSearch({ newsName,onHandleNewsNameChange, onHandleSubmit }){
    return(
        <form onSubmit={onHandleSubmit}>
            <label htmlFor="newsName">News Name</label>
            <p> User the search below to look for your Fave News</p>
            <input
                id="newsName"
                name="newsName"
                type="text"
                value={newsName}
                onChange={onHandleNewsNameChange}
            />
            <button aria-label="get-news"> Get Your Fave News</button>
            
        </form>
    )
}