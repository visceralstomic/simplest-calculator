import React, {Component} from 'react';



class Calculator extends Component {

  constructor(props){
    super(props);
    this.var1ref = React.createRef();
    this.var2ref = React.createRef();
    this.answerRef = React.createRef()
    this.state = {var1focus: false, var2focus:false, opr: "+"}
  }

  changeState = event => {
    if (event.target.id==='var1') {
      this.setState({var1focus:true, var2focus:false})
    } else {
      this.setState({var1focus:false, var2focus:true})
    }
  }

  writeDigit = event => {
    if (this.state.var2focus){
      this.var2ref.current.value += event.target.value;
    } else  {
      this.var1ref.current.value += event.target.value;
    }

  }

  caclAnswer = event => {
    if (this.state.opr === '+'){
      this.answerRef.current.value = parseInt(this.var1ref.current.value) + parseInt(this.var2ref.current.value)
    } else if (this.state.opr === '-') {
      this.answerRef.current.value = parseInt(this.var1ref.current.value) - parseInt(this.var2ref.current.value)
    } else if (this.state.opr === '*'){
      this.answerRef.current.value = parseInt(this.var1ref.current.value) * parseInt(this.var2ref.current.value)
    } else if (this.state.opr === '/') {
      this.answerRef.current.value = parseInt(this.var1ref.current.value) / parseInt(this.var2ref.current.value)
    }


  }

  setOperation = event => {
    this.setState({opr: event.target.value})
  }

  backSpace = event => {
    if (this.state.var2focus) {
      this.var2ref.current.value = this.var2ref.current.value.slice(0, -1)
    } else  {
      this.var1ref.current.value = this.var1ref.current.value.slice(0, -1)
    }
  }

  clean = event => {
    this.state.var2focus ? this.var2ref.current.value = "" : this.var1ref.current.value = "";
  }

  render() {
    return (
      <React.Fragment>

        <input type="text" id="var1" ref={this.var1ref} onFocus={this.changeState}/>
        <input type="text" id='var2' ref={this.var2ref} onFocus={this.changeState}/><br />
        <input type="text" ref={this.answerRef}/><button onClick={this.caclAnswer}>Сalculate</button>
        <fieldset onChange={this.setOperation}>
          <legend>Operation</legend>
          <input type="radio" name='opr' value='+' id="add" /><label for='add' >+ </label><br />
          <input type="radio" name='opr' value='-' id="sub" /><label for='sub' > - </label><br />
          <input type="radio" name='opr' value='*' id="mult"/><label for='mult'> * </label><br />
          <input type="radio" name='opr' value='/' id="div" /><label for='div' > / </label>
        </fieldset>

        <table>
          <tr>
            <td><button value="1" onClick={this.writeDigit}>1</button></td>
            <td><button value="2" onClick={this.writeDigit}>2</button></td>
            <td><button value="3" onClick={this.writeDigit}>3</button></td>
          </tr>
          <tr>
            <td><button value="4" onClick={this.writeDigit}>4</button></td>
            <td><button value="5" onClick={this.writeDigit}>5</button></td>
            <td><button value="6" onClick={this.writeDigit}>6</button></td>
          </tr>
          <tr>
            <td><button value="7" onClick={this.writeDigit}>7</button></td>
            <td><button value="8" onClick={this.writeDigit}>8</button></td>
            <td><button value="9" onClick={this.writeDigit}>9</button></td>
          </tr>
          <tr>
            <td><button onClick={this.backSpace}>&lt;</button></td>
            <td><button value="0" onClick={this.writeDigit}>0</button></td>
            <td><button onClick={this.clean}>c</button></td>
          </tr>
        </table>
      </React.Fragment>
    )
  }
}


export {Calculator};
