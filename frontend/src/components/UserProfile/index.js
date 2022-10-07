import "./UserProfile.css";
import { useSelector } from "react-redux";
import React from "react";
import Footer from "../Footer/Footer";

function UserProfile() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {sessionUser && (
        <div id="user-profile-page">
          <div id="user-profile-wrapper">
            <div id="user-profile-container">
              <form id="user-profile-detail">
                <h2 id="user-header">About me</h2>

                <div id="user-name-wrapper">
                  <div id="user-name-container">
                    <label id="user-name-title" htmlFor="user-name">
                      Username
                    </label>
                    <div id="user-name-form">
                      <input
                        id="user-name"
                        placeholder="Username"
                        value={sessionUser.username}
                        readOnly
                      ></input>
                    </div>
                  </div>
                </div>

                <div id="email-wrapper">
                  <div id="email-container">
                    <label id="email-title" htmlFor="email">
                      Email address
                    </label>
                    <div id="email-form">
                      <input
                        id="email"
                        placeholder="Email address"
                        value={sessionUser.email}
                        readOnly
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div id="foot">
        <Footer />
      </div>
    </>
  );
}

export default UserProfile;
