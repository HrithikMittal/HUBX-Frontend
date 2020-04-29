import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import DefaultProfile from "../images/avatar.jpg";
import { listByUser } from "../post/apiPost";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      loading: false,
      error: "",
      posts: [],
    };
  }

  loadPosts = (userId) => {
    const token = isAuthenticated().token;
    listByUser(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data, loading: true });
      }
    });
  };

  init = (userId) => {
    this.loadPosts(userId);
  };

  componentWillMount() {
    const userId = this.props.match.params.userId;
    this.loadPosts(userId);
  }

  // componentWillMount() {
  //   if (this.state.posts.event != null) {
  //     console.log(JSON.stringify(this.state.posts.events));
  //   }
  // }

  render() {
    const { redirectToSignin, user, posts } = this.state;

    if (redirectToSignin) return <Redirect to="/signin" />;
    let showevents = null;

    if (this.state.loading == true) {
      console.log("The value is:   ", JSON.stringify(posts.events));
      console.log("undefined    ", JSON.stringify(posts.events));
      showevents = posts.events.map((event, i) => {
        return (
          <div className="row " style={{ marginTop: "20px" }} id={i}>
            <div className="col md-6 card">
              <p className="lead">Event is {event.title}</p>
              <p className="lead">
                <i>{event.body}</i>
              </p>
              <p className="lead">{event.createdDate.Date()}</p>
            </div>
          </div>
        );
      });
    }
    //

    const photoUrl = user._id
      ? `${process.env.REACT_APP_API_URL}/user/photo/${
          user._id
        }?${new Date().getTime()}`
      : DefaultProfile;

    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ height: "200px", width: "auto" }}
              className="img-thumbnail"
              src={photoUrl}
              onError={(i) => (i.target.src = `${DefaultProfile}`)}
              alt={user.name}
            />
          </div>

          <div className="col-md-8">
            <div>Your Events are</div>
            <div>{showevents}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
