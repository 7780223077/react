import './App.css';
import { useState } from 'react'; // ✅ Correct React import

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState("Not Authenticated")

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Username:", username);
    console.log("Password:", password);
    if(username ==="gunda.charanreddy@tekworks.in" && password === "Charanreddy@007") {
      setAuthenticated("Authenticated")
    }
  };

  return (
    <div className='login'>
      {authenticated !=="Authenticated"?<form onSubmit={handleSubmit}>
        <div>
          <dt>Username</dt>
          <dd>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)} // ✅ Add onChange
            />
          </dd>
        </div>
        <div>
          <dt>Password</dt> {/* ✅ Capitalized */}
          <dd>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} // ✅ Add onChange
            />
          </dd>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>Login</button> {/* ✅ Add type="submit" */}
        </div>
        <p>{authenticated}</p>
      </form>:
      <div>
        Logged IN
      </div>}
    </div>
  );
}

export default App;
