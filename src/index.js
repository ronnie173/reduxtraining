
import ReactDOM from 'react-dom'
import React from 'react'
import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyDVP8XGTsqAsx5Kx8ERNvWdmkiI7ZiE2xA';
//Create a new component. This component should produce some html
const App = () =>{
    return (
        <div>
            <SearchBar/>
        </div>
        );
};


//Take this components generated html and put it on the page (in the dom)
ReactDOM.render(<App />,document.querySelector('.container'));