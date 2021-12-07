export function SearchBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <label htmlFor="Main Search"></label>
                    <input 
                        type="text"
                        placeholder="Search for cool prints here!"
                        name="Search Bar"
                        id="SB"
                        size="90"
                        required/>
                        <button type="submit">Search</button>
                </div>
            </div>
        </div>
    );
};