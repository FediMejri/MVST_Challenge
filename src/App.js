import React, {useState, useEffect} from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  
  const [name, setName] = useState('')
  const [userName, setUsername] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [repos, setRepos] = useState([])
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')
  const [saveUser, setSaveUser] = useState('')
  const [error, setError] = useState(null)
  const [repositories, setRepositories] = useState([])

  //This function is executed once the components are rendered(on refresh) call the setData method with the user data
  useEffect(()=>{
    fetch(`https://api.github.com/users/FediMejri`)
    .then(res=> res.json())
    .then(data=>{
      setData(data)
    })
  }, [])

  //This method sets the state of the user's attributes
  const setData = ({name, login, followers, following, public_repos, avatar_url, bio }) => {
    setName(name)
    setUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setBio(bio)
  }

  // This method is executed on search to set Data of the desired user and pass it then to the template.
  const handleSearch  = () =>{
    let userName = document.getElementById("searchBox").value
    let expand
    setSaveUser(userName)
    if(userName.length==0){
      expand = "FediMejri"
    }else{
      expand = userName
    }
    fetch(`https://api.github.com/users/`+expand)
    .then(res => res.json())
    .then(data =>{
      if(data.message){
        setError(data.message)
      }else{
        setData(data)
      }
    })
  }

  //Method responsible for setting the repositories to use them in the repos view
  const handleSearchRepos = () =>{
    let reposName = document.getElementById("searchRepos").value
    fetch(`https://api.github.com/users/`+userName+`/repos`)
    .then(res => res.json())
    .then(data=>{
      setRepositories(data)
    })
  }

  //this is the list of the repos rendered in the repos view
  const listToRender = repositories.map((item) =>{
    let reposName
    if(document.getElementById("searchRepos") != null){
      reposName = document.getElementById("searchRepos").value
    }
    if(reposName == null || document.getElementById("searchRepos") == null){
      return(
        <li className="card">
          <span className="card-title">{item.name}</span>
          <p> {item.description} </p>
        </li>
      )
    }
    if(item.name.includes(reposName)){
      return(
        <div key={item.id} className="card grey lighten-4">
        <div className="card-content">
          <span className="card-title light-blue-text">{item.name}</span>
          <br />
          <div>{item.description ? (<p> {item.description} </p>) : (<p className="red-text text-darken-2">No description with this repository</p>) } </div><br />
          {item.language ? (<div className="chip">{item.language}</div>) : (null)} <br />
        </div>
        </div>
      )
    }
  })

  //Function responsible to show repositories of the user entered (executed when clicking on Repositories)
  const showRepositories = () =>{
    fetch(`https://api.github.com/users/`+userName+`/repos`)
    .then(res => res.json())
    .then(data => {
      setRepositories(data)
    })
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper">GitHub Quick Search Feature</div>
      </nav>
      <div className="row">
        <div className="col s5 sticky">
          <div className="row">
          <div className="margined"><h3>Search for Users</h3></div><br />
            <div className="input-field col s12 centered">
              <input id="searchBox" type="text" placeholder='Search for a user' className="materialize-textarea searchBox" onChange={handleSearch} />
              <button className='waves-effect waves-light btn' onClick={handleSearch}> Search</button>
            </div>
          </div>
          <div className='card grey lighten-3 centered'>
            <div className='card-content'>
              <img className='circle responsive-img' src={avatar} />
              <h2 data-testid='defaultUserName'>{userName}</h2>
              <p>{bio}</p>
              <hr />
              <span> {followers} Followers</span><br />
              <span> {following} Following</span><br />
              <a className='repos' onClick={showRepositories}> {repos} Repositories</a><br />
            </div>
          </div>
        </div>
        <div className="col s6">
        <div>
            <div className="margined"><h3>{repos} public Repos for {userName}</h3></div>
            <div className="input-field">
              <input id="searchRepos" type="text" placeholder='Search for a Repository' className="materialize-textarea" onChange={handleSearchRepos} />
              <button className='waves-effect waves-light btn grey darken-3' onClick={handleSearchRepos}> Search</button>
            </div>
            <br />
            <div>
            <div>
              {listToRender}
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
