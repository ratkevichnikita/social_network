import classes from './Post.module.css'

const Post = (props) => {
  return (
      <div className={classes.postItem}>
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/01/08/avatar-sigourney-weaver.jpg" alt="avatar"/>
        <p>{props.message}</p>
        <span>likes {props.likes}</span>
      </div>
  )
}

export  default Post;