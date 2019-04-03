import React, {Component} from 'react'


//parent obj this.state.name = {name: Jacob}

// this.props.name


export default class Student extends Component {

  constructor(props) {
    super(props)
    this.state= {
      questionsAsked: 0,
      questionHolder: [],
      name: this.props.name
    }
  }

 




  render() {
    let tracker=this.state.questionsAsked
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.jacobAge}</h1>
      <h3>{tracker}</h3>
      <button onClick={()=> {
        this.setState({
          questionsAsked: tracker+=1
        })
      }}>Add answer!</button>

      <div>
      <input placeholder="type a question!" onChange={(e)=> {
        this.state.questionHolder.push(e.target.value)}}
      />
      <button onClick>Add question</button>
      <p>{this.state.questionHolder}</p>
      
      
      </div>

      </div>
    )
  }
}