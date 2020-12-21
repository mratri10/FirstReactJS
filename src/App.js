
import React, { Component } from 'react';
import { Cardlist } from './components/cardlist/cardlist.component';
import { SearchBox } from './components/searchbox/search-box.component';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "atri",
      data: [],
      alldata: []
    }
  }
  componentDidMount() {
    fetch("https://api.arnawa.co.id/api/category/", {
      method: 'get',
      headers: {
        "APP-ORIGIN": "marketplace",
        'Content-Type': 'application/x-www-form-urlencoded'
      },

    }).then(res => res.json())
      .then(res => this.setState({ data: res.data.category, alldata: res.data.category }));
  }
  searchApp(txt) {
    var data = this.state.alldata;
    var filter = data.filter(value => {
      return value.name.toLowerCase().includes(txt.toLowerCase())
    })
    // console.log(JSON.stringify(filter))
    this.setState({
      data: filter
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBox placeholder="Cari Category" handleChange={e => this.searchApp(e.target.value)} />

        <Cardlist data={this.state.data} />
      </div>
    );
  }
}

export default App;