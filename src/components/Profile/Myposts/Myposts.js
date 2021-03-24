import React from 'react';
import classes from './Myposts.module.css';

import Post from './Post/Post';

const Myposts = (props) => {

  let postsElements = props.store.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>);

  let clickOnButton = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let onNewValueForPost = () =>{
    let text = clickOnButton.current.value;
    props.newValueForPost(text)
  }

  return (
    <div className={classes.post}>
      My posts
      <div className="addPost">
        <textarea ref={clickOnButton} value={props.printNewText} onChange={onNewValueForPost}/>
        <button onClick={onAddPost} className={classes.button}>Send</button>
      </div>
      <div className="allposts">
        {postsElements}
      </div>
    </div>
  )
}

export default Myposts;