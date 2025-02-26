
const LoginPageUserRef = () => {
    return (
        <div className="loginFormDetailsCont">
            {/* ------------------------------------------------------- */}
            <div className=" right login-container">
                <div className="login-card">
                 <img className="leftImage" src="https://s3-alpha-sig.figma.com/img/7601/35c4/d45b29375af616f50c15c80df0e9d5d1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ptfnoFq6zdSj23x8ac0ALH7hs0gnDYErIzYmXUZ75wt3A1N4S5dNqhaniNPPSfWm-LWXlfwg0DEYnCd7RdM5585O-JW344puqVK4~zRxOGp7ojXVcmFR--0yiuOibwEsAtV88ZOH8W1-KAETAjp9uNYVS0Ja66a6yGMO9zNdHP2McUr5u8qIx6snGv74v8Z4m7JaAGy88gwyRhlcc-vi5fVZ5Akq0OWe5MAQdSnVWF~iM727ZTOyMd1DwO7IXGZ0NwDLTGQVDrmszCTVvZJ5anWyH3ZzKaZbfghgEs-jenG1SF2wHPcx4v8ddMwE9ARXcHZpnyMASe5Nxzn8tdhWsw__" alt="" />  
                    
                           
                       
                    
                </div>
            </div>
            
            <div className=" right login-container">
                <div className=" mainLoginpAGE login-card">
                    <h1 className="brand">
                        <span className="icon"><img className="imgLogo" src="https://s3-alpha-sig.figma.com/img/ae76/4789/d89baad98ce45e7cd2f31a2d3707171e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH82yEr9ZQdOsD~4BkwfrFidHLjz~styfL-zGamBPHU3rClmulcWzpM09Nrdq0D7RDSwhDDz7WxoREWHtpoUKQ4B9SZMiZqKyDDoQzkG0ILsUdHpxGLKrDdXFGlbXcZKQtsAW2Ub8wyQvTKR26u2ybnkJ8hGdSs1jzARqxxkczazSJOzDZMDoj~uxNnVC6q4lUeNHgp5VgH-2FQ~2HDS7OtjaqRZ92mgE4eUBz5Xxv5ntlAxPJqtS25WKL7mrxFu2E7zgYHiqJxqR1mjMM6Dzb4hvvXcF9O1vZ~CHl872xcEe-WE0B--6I-Q~xh6Xcxy2pfYzOkCqauyNqP~QBBTdA__" alt="" /></span> Move-Up
                    </h1>
                    <form className="login-form">
                        <label htmlFor="email">Login</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="input-field"
                        />
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                className="input-field"
                            />
                            <button type="button" className="show-password-btn">
                                👁️
                            </button>
                        </div>
                        <div className="options">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="/" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                        <button type="submit" className="sign-in-btn">
                            Sign in
                        </button>
                        <button type="button" className="google-btn">
                            <img className="googleICon" src="https://s3-alpha-sig.figma.com/img/2f8f/449b/2a59233c5968ccd19e7b7a82da381262?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdRl1VJXJBtV0JqlKyqRwhGPfowOAUzSSnqdSxL7bdVrYI1OcC-V-1X3wGbKLmlFVX8pHbLZyVbsGjvvit8wlXxzrKz7qpcSpgEJeNVrl6l~en~OSY~JP3NfShTIsKgbisnfSTbgMluCAZgAsrd8tY4b7WarN1yF0n5b8YxBbN5ZEWhsHWYw9gmKnXRV3ehSUB~ltTvCIy34WHsE35WNBhTh4qL9wd9NYSs5IiQC5WTtQKFPkhJdowFEFsWd8f~7SphFoYf93JhOq3Iq1HgtHgtG8TArcSU90mIOIrwaUJeqRhmPQWSS99Cod6pAUOXhF5fvMX1Iul63de1JiiW4wQ__" alt="Google icon" />   Or sign in with Google
                        </button>
                    </form>
                    <div className="signup">
                        <span>Don't have an account?</span> <a href="/">Sign up now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPageUserRef;
