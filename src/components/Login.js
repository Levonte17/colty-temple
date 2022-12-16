import { login, logout } from '../Firebase';

function Login({ user }) {
    return(
<section>
{ 
    user ? 
    <>
    <div className='nav-logo'>
        Welcome, {user.displayName}
    </div>
    <div className='nav-logo'
        onClick={logout}>
        LOGOUT
    </div>
    </>
:
<div className='nav-logo'
    onClick={login}>
    LOGIN
</div>
}
</section>
    );
}
export default Login;