import React, { Component } from 'react'
import axios from 'axios'
import '../IdeasContainer.css'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/ideas.json')
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <FloatingActionButton onClick={this.addNewIdea}>
          <ContentAdd />
        </FloatingActionButton>
        {this.state.ideas.map((idea) => {
          return(
            <Card className="Card" key={idea.id}>
              <CardHeader
                title={idea.title}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText className="CardText" expandable={true} key={idea.id}>{idea.body}</CardText>
            </Card>
          )       
        })}
      </div>
    );
  }
}

export default IdeasContainer;