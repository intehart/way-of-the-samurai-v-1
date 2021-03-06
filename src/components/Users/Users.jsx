import React from 'react';
import userPhoto from '../../assets/img/ava-default.jpg';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <section>
      <div>
        {
          pages.map(p => {
            return <button
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? "users__button-page users__button-page--active" : "users__button-page"}>
              {p}
            </button>
          })
        }
      </div>
      {
        props.users.map(u => <div className="users" key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img className="users__img"
                   src=
                     {
                       u.photos.small !== null
                         ? u.photos.small
                         : userPhoto
                     }
                   alt="ava"/>
            </NavLink>
          </div>
          <div>
            {
              u.followed
                ?
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.unfollow(u.id);}}
                >
                  Unfollow
                </button>
                :
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.follow(u.id);}}
                >
                  Follow
                </button>
            }
          </div>
        </span>
          <span>
            <div>
              {u.name}
            </div>
            <div>
              {u.status}
            </div>
          </span>
          <span>
            <div>
              {"u.location.country"}
            </div>
            <div>
              {"u.location.city"}
            </div>
          </span>
        </div>)
      }
    </section>
  )
}

export default Users;