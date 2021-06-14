import logo from './BALOO.png';

import  './App.css';
import React, { useContext } from 'react';


import InstagramFeed from './components/Feed/InstagramFeed'

const token = "IGQVJYWEJFTC1xZAnRBOFpHWTZAXaDNXZAHhuckxWMTB2TndOUWh0TkNiNWV4MjRWYmNUZAUpXQl90TXN3VDBLdVRzWlhhcTBqX2wwQWVpTXZALWm9WSGdFYVdNWlVnNkxmYTFKd0lDRVd3"


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      animals: true,
      support: false,
      about: false,
      items: [

      ],
    };

   this.isShowAbout = this.isShowAbout.bind(this)
   this.isAnimals = this.isAnimals.bind(this)
   this.isSupport = this.isSupport.bind(this)
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

  isShowAbout(){
    this.setState({about: !this.state.about})
    console.log(this.state.about);
  }
  isSupport() {
    this.setState({support: !this.state.support})

  }
  isAnimals() {
    this.setState({animals: !this.state.animals})

  }
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <div className="navbar">
            <div className="Header_links">
              {/* <div className="Header_link" onClick={this.isAnimals}>Наши хвостики</div> */}
              <div className="Header_link" onClick={this.isSupport}>Поддержка</div>
              <div className="Header_link" onClick={this.isShowAbout}>О нас</div>
            </div>
          </div>
        </header>
        <div className="tab_content">
          <div className={this.state.support ? "support" : "support_hide"}>
            <h2>
            Если Вы хотите помочь животным, представленным на сайте, Вы можете это сделать переводом на карту:
            </h2>
            <h1>
            Карта сб 4274 3200 3107 5230 на Алиса Сергеевна К.
            </h1>
            <p>
            Также всегда будем рады помощи кормом!
            Связываться для передачи:
            </p>
            <p>
            8 (926)600-20-70 Анна <br/>
            8 (999)968-07-82 Алиса
            </p>
          </div>
          <div className={this.state.about ?"about_show": "about_hide"}>
            <h1>
              Мы команда волонтёров: Аня и Алиса.
            </h1>
            <h3>
              <p></p>Вместе мы не первый год подбираем и находим дом собакам и кошкам.
            <p></p> На этом сайте актуальный каталог наших подопечных
            <p></p>Все животные здоровы, привиты и готовы стать домашними. Звоните и приезжайте знакомиться!
            </h3>
          </div>
          <div className="animals_list">
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
