import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

const xx = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
];
const xx1 = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
  { id: 5, value: 0 },
];

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: -1 },
    ],
  };
  constructor(){
    super();
    console.log('App - Constructor');
    // this.state = this.props.something;
}
componentDidMount(){
  console.log('App - Mounted');
}
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });//this.setState({ counters }); ile  aynı
  };
  handleDecrement = (counter) => {
    const c = [...this.state.counters];
    const index = c.indexOf(counter);
    c[index] = { ...counter };
    c[index].value--;
    this.setState({ counters: c });//this.setState({ counters }); ile  aynı
  };
  handleReset = async () => {
    //const counters = await this.state.counters.map((c) => {
     // console.log("ilk: "+c.value);
     // c.value = 0;
     // console.log("son: "+c.value);
     // return c;
    //});
    //console.log(counters);
    this.setState({ counters:  xx1 });
  }; 
  handleSet = () => {
    console.log('burada',xx,this.state.counters);
    this.setState({ counters:[...xx] });
  }
  render() {
    console.log('App - Rendered işlev yapıldı');//For Ajax Calls
    return (
      //Navbar ile sayaçların durumlarına göre Navbarda uyarı balonu oluşturdu
      <React.Fragment>
        <NavBar totalCounters ={this.state.counters.filter(c => c.value > 1).length}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onSet={this.handleSet}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
