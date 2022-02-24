import React , {useState} from "react";
import { FaSistrix , FaRandom } from "react-icons/fa";
import "./searchBar.css";

export default function SearchBar(){

    
    return (
        <div className="search">
           <input className="input" type="text" placeholder="Search for a meals or keywords" /> 
           <button><FaSistrix/></button>
           <button><FaRandom/></button>
        </div>
    )
}