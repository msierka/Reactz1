class App extends React.Component {
  state = {
    options: ["1","2","3"],
    option: null,
    
  }

  handleWrozba =()=>{
    const los = Math.floor(Math.random()*this.state.options.length);
    this.setState({
      option: this.state.options[los] 
    })
  }

  render() {
    return ( 
      <div>
        <button onClick={this.handleWrozba}>Zobacz wróżbę</button>
        <br></br>
        <input></input>
        <button>Dodaj wróżbę</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}


ReactDOM.render( < App / > , document.getElementById('root'))