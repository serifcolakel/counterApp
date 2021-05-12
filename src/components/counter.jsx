import React, { Component } from "react";

//export default class ile varsayılanı dışa aktarıyoruz
export default class Counter extends Component {
  styles = {
    //span içine yazılarakta elde edilir.
    fontSize: 20,
    padding: 20,
    color: "black",
  };
  styleButton = {
    fontsize: 20,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
      console.log("prevProps", prevProps);
    } else console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    //this.props ile counters.jsx de kaydedilen valueleri alacak tek tek
    //console.log('props', this.props);
    // let classes = this.getBadgeClasses(); span içinde tanımlandı
    return (
      //div yerine
      //this.state.count = this.formatCount() ile count değerini ekrana gönderdi yerine sabit işlemde
      //de yazılabilir  <span>{2 + 2}</span> gibi
      //this.formatCount() ile fonksiyon çağrıldı
      //m-2 margin: 2
      //ekle
      //<img src={this.state.imageUrl} alt=""/>
      //this.props.children counters.jsx dosyasında h4'ü temsil eder
      <div>
        {this.props.children}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          -
        </button>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-1"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    //kodları seç ve refactor(ctrl + shift + r) ile method oluştur
    let classes = "badge m-2 badge-";
    //classes += (this.state.count === 0) ? "warning" : "primary";
    //classes += (this.state.count % 0) ? "warning" : (this.state.count === 1) ? "danger" : (this.state.count === 2) ? "primary" : (this.state.count === 3) ? "danger" :"success";
    classes +=
      this.props.counter.value % 2 === 0
        ? "warning"
        : this.props.counter.value === 1 ||
          this.props.counter.value === 3 ||
          this.props.counter.value === 5 ||
          this.props.counter.value === 7
        ? "success"
        : "danger";
    return classes;
  }
  formatCount() {
    //const count ile this.state elemanı ile count eşitlendi
    const { value } = this.props.counter;
    //her şeyi dönderebiliriz h1,button vs.
    //count 0'sa 'Zero' dönderecek, değilse kendisini
    return value === 0 ? "Zero" : value;
  }
}
