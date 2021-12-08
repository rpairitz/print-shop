const ProductForm = ({newProduct,onChange,onSubmit,onFileChange}) => {
    return (
        <div>
            <h3>Create a New Product Listing</h3>
            <form onSubmit={onSubmit} autoComplete="off">
                <div>
                <label>Product Name</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    value={newProduct.name}
                    onChange={onChange}
                    name="name"
                    required
                />
                </div>
                <div>
                <label>Price ($)</label>
                <br />
                <input
                    type="number"
                    className="form-control"
                    id="price-input"
                    value={newProduct.price}
                    onChange={onChange}
                    name="price"
                    min="0.00"
                    step="0.01"
                    required
                />
                </div>
                <div>
                <label>Stock Quantity</label>
                <br />
                <input
                    type="number"
                    className="form-control"
                    id="stock-input"
                    value={newProduct.stockQty}
                    onChange={onChange}
                    name="stockQty"
                    min="0"
                    step="1"
                    required
                />
                </div>
                <div>
                    <label>Image</label>
                    <br/>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        className="form-control"
                        id="image-input"
                        /*value={newProduct.image}*/
                        onChange={onFileChange}
                        name="image"
                        required
                    />
                </div>
                <div>
            <button type="submit" onSubmit={onSubmit}>
                Create Listing
            </button>
            </div>
            </form>
        </div>
    );
};

export default ProductForm;