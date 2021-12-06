import { SearchBar } from "../Main/SearchBar.js";

export function DetailedView() {
    return (
        <>
            <SearchBar/>
            <a href="/">
            <button type="submit">Return Home</button>
            </a>
            <p> This is the detailed view</p>
            
        </>
    );
};