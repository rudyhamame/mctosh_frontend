import React from "react";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    <header id="Header_article" className="fr">
      <div id="Header_content_container" className="fr">
        <Nav
          rendered_page_switcher={props.rendered_page_switcher}
          username={props.username}
          dbUpdate_isConnected={props.dbUpdate_isConnected}
          logOut={props.logOut}
          state={props.state}
          acceptFriend={props.acceptFriend}
          type={props.type}
        />

        <section>
          {" "}
          <h1
            style={{
              color: "white",
              textAlign: "center",
            }}
            id="timer"
          >
            {props.state.timer.hours && props.state.timer.hours < 10
              ? "0" + props.state.timer.hours
              : props.state.timer.hours >= 10
              ? props.state.timer.hours
              : "00"}
            :
            {props.state.timer.mins && props.state.timer.mins < 10
              ? "0" + props.state.timer.mins
              : props.state.timer.mins >= 10
              ? props.state.timer.mins
              : "00"}
            :
            {props.state.timer.secs && props.state.timer.secs < 10
              ? "0" + props.state.timer.secs
              : props.state.timer.secs >= 10
              ? props.state.timer.secs
              : "00"}
          </h1>{" "}
        </section>
      </div>
    </header>
  );
};

export default Header;
