import logo from './BALOO.png';

import './App.css';
import React, { useContext } from 'react';


import InstagramFeed from './components/Feed/InstagramFeed'
import { Redirect, Route, NavLink } from 'react-router-dom';


const token = "IGQVJYWEJFTC1xZAnRBOFpHWTZAXaDNXZAHhuckxWMTB2TndOUWh0TkNiNWV4MjRWYmNUZAUpXQl90TXN3VDBLdVRzWlhhcTBqX2wwQWVpTXZALWm9WSGdFYVdNWlVnNkxmYTFKd0lDRVd3"


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      items: [

      ],
    };
  }
  // componentDidMount() {
  //   var that = this
  //   let items = that.state.items
  //   folders.forEach(e => {
  //     items[e] = []

  //     // console.log(require('./images/'+e))
  //     // storageRef.child('animals/' + e).listAll().then(function (result) {
  //     //   result.items.forEach(function (imgRef) {
  //     //     imgRef.getDownloadURL().then(function (url) {
  //     //       items[e].push(url)

  //     //       that.setState(items)
  //     //     });
  //     //   })
  //     // }).finally(() => {
  //     //   console.log(this.state.items["Муша"]);
  //     // })
  //   })
  // }
  render() {
    return (
    
      <div className="App">
        			<Redirect to="/main" />
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <div className="navbar">
            <ul className="Header_links">
              <li className="Header_link"><NavLink to="/main">Наши хвостики</NavLink></li>
              <li className="Header_link"><NavLink to="/support">Поддержка</NavLink></li>
              <li className="Header_link"><NavLink to="/about">О нас</NavLink></li>
            </ul>
          </div>
        </header>
        <div className="tab_content">
          
          <div className="content">
            <h1>
              Мы команда волонтёров: Аня и Алиса.
            </h1>
            <h3>
              <p></p>Вместе мы не первый год подбираем и находим дом собакам и кошкам.
            <p></p> На этом сайте актуальный каталог наших подопечных
            <p></p>Все животные здоровы, привиты и готовы стать домашними. Звоните и приезжайте знакомиться!
            </h3>
          </div>
          <div class="animal_list_container">
            <InstagramFeed token={token} />
            {/* <ul>
              {
                Object.keys(this.state.items).map(el =>
                  <li>
                    <ImgMediaCard avatar={this.state.items[el][0]} name={el} disc=":3" images={this.state.items[el]} />
                  </li>
                )}
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
