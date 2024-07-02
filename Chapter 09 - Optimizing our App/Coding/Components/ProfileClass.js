import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../../../public/Common/constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      repoInfo: null,
    };
    // console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch(Github_API_User + Github_UserName, options), // Fetch the data from github User API
        fetch(Github_API_User + Github_UserName + "/repos", options), // Fetch the data from github User API for Repository
      ]); // handle Multiple API Requests usign Promise.all()

      const resData = await Promise.all(response.map((r) => r.json()));

      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1],
      });
    } catch (error) {
      console.error(error); // show error in console
    }

    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const { userInfo, repoInfo } = this.state; // object destructuring for state data
    // console.log("Profile-Parent - render");

    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
              {/* Passing props data (full json data) from parent to child */}
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Food<span>Fire</span> App Github Repository
              </h1>
              {/* Passing props followers from parent to child */}
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
