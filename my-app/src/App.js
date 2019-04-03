import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
        <div>
        
        <Navbar />
        <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzA4Zx1YZ6irTMRo-e7Vw8AkqJYRYNT8miUTZusdt3QJN_mx8">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Hero>
        <div className="container">
        <div className="row">
        <div className="col col-xs-10 col-sm-10 col-md-10 col-lg-10 wrapper">
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
         
        ))}
          </div>
        </div>
        </div>
      <Footer />
      </div>
    
    );
  }
}

export default App;
