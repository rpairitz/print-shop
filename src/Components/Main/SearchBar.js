export function SearchBar() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <label for="Main Search"></label>
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