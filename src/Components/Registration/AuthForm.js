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
            </form>
        </div>
    )
}