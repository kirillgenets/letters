import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import PropTypes from "prop-types";
import './App.css';

class Post extends React.Component {
  
  render() {
    return React.createElement(
      'div',
      {
        className: 'post'
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody',
          },
          this.props.content
        )
      )
    );
  }

}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

const App = React.createElement(Post, {
  id: 1,
  content: ' said: This is a post!',
  user: 'mark'
})

ReactDOM.render(App, document.getElementById('root'));

//export default Post;
