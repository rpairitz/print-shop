const AuthForm = ({ user, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit} autoComplete="off">
                <div>
                    <label>First Name</label>
                    <br/>
                    <input
                        type="text"
                        id="first-name-input"
                        value={user.firstName}
                        onChange={onChange}
                        name="firstName"
                        required
                        />
                </div>
                <div>
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="last-name-input"
                        value={user.lastName}
                        onChange={onChange}
                        name="lastName"
                        required
                    />
                </div>
                <div>
                <label>Email</label>
                <br />
                <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    value={user.email}
                    onChange={onChange}
                    name="email"
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

export default AuthForm;