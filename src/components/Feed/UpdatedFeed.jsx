import React, { Component } from "react";
import styles from "./styles.module.css";

import PetCard from './PetCard/PetCard'

class UpdatedFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      isError: '',
      isLoaded: false,
    };

  }

  componentDidMount() {
    let url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${this.props.token}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.hasOwnProperty('error')) {
          //console.log('Success:', data);
          this.setState({
            isLoaded: true,
            isError: true,
          });

        } else {
          this.setState({
            isLoaded: true,
            feeds: data.data,
            isError: false,
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({
          isLoaded: true,
          isError: true,
          error
        });
      });
  }

  render() {
    const { isError, isLoaded, feeds } = this.state;

    if (isError) {
      return <div className={styles.errorMessage}>
        <p> the access token is not valid</p>
      </div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div className={styles.instagramItems}>
          {feeds.slice(0, this.props.counter).map((feed, index) => (
            <div key={index} className={styles.instagramItem}>
              <PetCard class={styles.instagramItem} 
                       key={index} url={feed.media_url} 
                       caption={feed.caption} />
            </div>)
          )}
        </div>
      )
    }
  }
      
}

export default UpdatedFeed