import classes from "./user.module.css";
import userPhotoDefault from "./images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI as UsersAPI} from "../../api/api";

let Users = (props) => {

  let paginationNumers = Math.ceil(props.paginationTotalUsers / props.paginationTotalCount);
  let allPages = [];
  for(let i = 1; i < paginationNumers; i++) {
    allPages.push(i)
  }

  return (
    <div>

      <ul className={classes.usersList}>
        {
          props.users.map(u => (
            <li key={u.id} className={classes.usersItem}>

              <div className={classes.usersInner}>
                <div className={classes.userImgWrapper}>
                  <NavLink to={`profile/`+u.id} >
                    <div className={classes.usersImg}>
                      <img src={u.photos.small !== null ? u.photos.small : userPhotoDefault}
                           alt="изображение пользователя"/>
                    </div>
                  </NavLink>
                  {u.followed

                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                      props.isFollow(u.id)
                     //  props.isFollowingInProgressToggle(true, u.id)
                     // UsersAPI.unFollow(u.id).then(data => {
                     //    if(data.resultCode === 0)   props.unfollow(u.id)
                     //   props.isFollowingInProgressToggle(false, u.id)
                     //  })


                    }} className={classes.usersBtn}>Отписаться</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {


                      props.isUnFollow(u.id)
                      // props.isFollowingInProgressToggle(true, u.id)
                      // UsersAPI.follow(u.id).then(data => {
                      //   if(data.resultCode === 0)  props.follow(u.id)
                      //   props.isFollowingInProgressToggle(false, u.id)
                      // })

                    }} className={classes.usersBtn}>Подписаться</button>
                  }

                </div>
                <div className={classes.usersContent}>
                  <div className={classes.box1}>
                    <p className={classes.usersTitle}>{u.name}</p>
                    <p className={classes.usersStatus}>{u.status}</p>
                  </div>
                  <div className={classes.box2}>
                    <p>
                      <span className={classes.usersCountry}>{'u.location.country'}</span>
                      <span className={classes.usersTown}>{'u.location.town'}</span>
                    </p>
                  </div>
                </div>
              </div>

            </li>
          ))
        }
      </ul>

      <ul className={classes.pagination}>
        {
          allPages.map(item => {
            return  <li key={item} onClick={()=> {props.switchPagination(item)} } className={`${classes.pageItem} ${item === props.paginationCurrentPage ? classes.currentPage : ''}`}>
              {item}

            </li>
          })
        }

      </ul>
    </div>
  )
}

export default Users;