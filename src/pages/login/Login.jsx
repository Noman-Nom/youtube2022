import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className="submit">Login</button>

      </form>
    </div>
  )
}

export default Login