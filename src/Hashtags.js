import React, { Component } from 'react';

//Unfinished component aiming to mount tweets with the Hashtag #BTF502 and #MTF to track twitter activity related to the app
class Hashtags extends Component {
  constructor(props) {
    super(props);

//Store tweets
    this.state = {
      tweets: []
    };
  }

  // Call twitter api
  componentDidMount() {
    fetch('https://api.twitter.com/1.1/search/tweets.json?q=%23BTF502&include_entities=true', )
      .then(response => response.json())
      //.then(data => this.setState({ }));
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Hashtags;
