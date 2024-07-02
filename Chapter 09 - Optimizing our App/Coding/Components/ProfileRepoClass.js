import { Component } from "react";
import {
  Github_API_User,
  Github_UserName,
  Github_Repository_Name,
  options,
} from "../../../public/Common/constants";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);

    // console.log("ProfileRepoClass child constructor");
  }

  async componentDidMount() {
    // console.log("ProfileRepoClass child componentDidMount");
  }
  componentDidUpdate() {
    // console.log("ProfileRepoClass child componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("ProfileRepoClass child componentWillUnmount");
  }
  render() {
    const {
      userInfo: { followers, html_url },
      repoInfo: repoList,
    } = this.props; // accessing userInfo and repoInfo as props from parent class `ProfileClass`

    // console.log("ProfileRepoClass child render");
    return (
      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === Github_Repository_Name)
          .map((repo) => {
            return (
              <div key={repo.id} className="profile-repo">
                <h1>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>
                <div className="profile-repo-items">
                  <h3>
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiUsers />
                      <span>{followers} Followers</span>
                    </a>
                  </h3>
                  <h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiGitRepoForked />
                      <span>{repo.forks_count} Forks</span>
                    </a>
                  </h3>
                  <h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiStar />
                      <span>{repo.stargazers_count} Stars</span>
                    </a>
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepoClass;
