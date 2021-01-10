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

  zeroOr(variable, event_value){
    variable.current.value ==="0" ? variable.current.value = event_value : variable.current.value += event_value;
  }

  writeDigit = event => {
    if (this.state.var2focus){
      this.zeroOr(this.var2ref, event.target.value)
    } else  {
      this.zeroOr(this.var1ref, event.target.value)
    }

  }

  handleValidation(var1, var2){
    let isValid = true;

    if (var1.current.value === "" || var2.current.value === ""){
      if (var1.current.value === ""){
        var1.current.placeholder ='Field must be filed';
      }
      if (var2.current.value === ""){
          var2.current.placeholder ='Field must be filed';
      }
      isValid = false;
    } else {
      if (isNaN(var1.current.value)){
        var1.current.value = ""
        var1.current.placeholder ='Must be number';
        isValid = false;
      }
      if (isNaN(var2.current.value)){
        var2.current.value = ""
        var2.current.placeholder ='Must be number';
        isValid = false;
      }

    }
    return isValid;
  }

  caclAnswer = event => {
    if (this.handleValidation(this.var1ref, this.var2ref)){
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

  prevLett = event => {
    if (event.which < 48 || event.which > 57 ) {
      event.target.placeholder ='Must be number'
      event.preventDefault();
    } else if (event.target.value === '0') {
      event.target.value = event.key
      event.preventDefault()
    }
  }

  render() {
    return (
        <div class='main-area'>

          <div class='input-area'>
            <input type="text" id="var1" ref={this.var1ref} onKeyPress={this.prevLett} onFocus={this.changeState}/>
            <input type="text" id='var2' ref={this.var2ref} onKeyPress={this.prevLett} onFocus={this.changeState}/>
            <div class='output-area'>
              <input  type="text" ref={this.answerRef} readOnly/><button onClick={this.caclAnswer}>Сalculate</button>
            </div>
          </div>

          <div class='calc-area fix'>
            <table class='calculator'>
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

            <div class='opr-area'>
              <fieldset class='operations' onChange={this.setOperation}>
                <legend>Operation</legend>
                <input type="radio" name='opr' value='+' id="add" /><label for='add' > add </label><br />
                <input type="radio" name='opr' value='-' id="sub" /><label for='sub' > sub </label><br />
                <input type="radio" name='opr' value='*' id="mult"/><label for='mult'> mult</label><br />
                <input type="radio" name='opr' value='/' id="div" /><label for='div' > div </label>
              </fieldset>
            </div>

          </div>


        </div>
    )
  }
}


export {Calculator};
