export function SignUp() {
    return (
        <>
        <h4>
      Make sure you have signed up for an exclusive account for deals and
      giveaways!
    </h4>
    <p>
      <label for="Account Signup"></label>
      <input
        type="text"
        placeholder="Enter Email here!"
        name="Account Signup"
        id="AS"
        required
      />
      <button type="submit">Sign Up</button>
    </p>
    <div>
      <p>
        By creating an account you agree to our
        <a href="#"> Terms and Conditions</a>.
      </p>
    </div>
        </>
    )
}