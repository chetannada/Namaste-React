import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: ""
      }
    };
    // console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    this.setState({
      userInfo: json,
    })
    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const { userInfo } = this.state; // object destructuring for json data
    // console.log("Profile-Parent - render");
    return (
      <>
        {userInfo.name === "" ? null : (<div className="profile-class-container">
          <div className="profile-container">
            <h1 className="profile-title">About Me</h1>
            <ProfileUserClass data={userInfo} />
            {/* Passing props data (full json data) from parent to child */}
          </div>
          <div className="repo-container">
            <h1 className="repo-title">Food<span>Fire</span> App Github Repository</h1>
            {/* Passing props followers from parent to child */}
            <ProfileRepoClass followers={userInfo} />
          </div>
        </div>)}
      </>
    );
  }
}

export default Profile;
