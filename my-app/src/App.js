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
    friends,
    count: 0
  };

  handleImageClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("Count is: "+this.state.count);
    this.shuffleArray();
  };
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  //function to shuffle friends array
  shuffleArray = () => {
    for (let i = this.state.friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
    }
    console.log("New Array:  "+this.state.friends[0].id);
    this.setState({ friends });
    
}
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
        <div>
        
            <Navbar score={this.state.count}/>
                <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzA4Zx1YZ6irTMRo-e7Vw8AkqJYRYNT8miUTZusdt3QJN_mx8">
                  <h1>Clicky Game!</h1>
                  <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                </Hero>
                <div className="container">
                  <div className="row">
                      <div className="col col-xs-10 col-sm-10 col-md-10 col-lg-10 wrapper">
                      {this.state.friends.map(friend => (
                            <FriendCard
                              shuffleArray={this.shuffleArray}
                              id={friend.id}
                              key={friend.id}
                              image={friend.image}
                              handleImageClick={this.handleImageClick}
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
