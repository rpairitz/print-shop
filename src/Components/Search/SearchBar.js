export function SearchBar() {
    return (
        <p>
            <label for="Main Search"></label>
            <input 
                type="text"
                placeholder="Search for cool prints here!"
                name="Search Bar"
                id="SB"
                required/>
                <button type="submit">Search</button>
        </p>
    );
};