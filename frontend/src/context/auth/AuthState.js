import AuthContext from "./AuthContext"



const AuthState = (props) => {
    
    const Auth = async (path,cred) => {
        console.log(cred)
        const response = await fetch(`http://localhost:5000/api/auth/${path}`, {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body:JSON.stringify(cred)
        
        });
        
          const content = await response.json();
          
          if (content.success){
            localStorage.setItem("token",content.auth_token)
            
            return true
          }
          else{
              console.log(content)
              
            alert("error")
            return false
          }
      }
    return (
        <AuthContext.Provider value={{Auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
