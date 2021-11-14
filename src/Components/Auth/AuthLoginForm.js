const AuthLoginForm = ({ user, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit} autoComplete="off">
                <div>
                <label>Username</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="username-input"
                    value={user.username}
                    onChange={onChange}
                    name="username"
                    required
                />
                </div>
                <div>
                <label>Password</label>
                <br />
                <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    value={user.password}
                    onChange={onChange}
                    name="password"
                    min="0"
                    required
                />
                </div>
                <div>
            <button type="submit" onSubmit={onSubmit}>
                Submit
            </button>
            </div>
            </form>
        </div>
    )
}

export default AuthLoginForm;