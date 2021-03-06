import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Status from '../Status/Status';

const Info = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className="profile__info">
      <div className="profile__bg">
        <img src="https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/alfa-romeo-giulia67-1_0.jpg?itok=cM6fGydG" alt="bg-profile"/>
      </div>
      <div className="profile__avatar">
        <img src={props.profile.photos.small} alt="hot-girl"/>
      </div>
      <Status status={props.status}
              updateStatus={props.updateStatus}/>
    </div>
  )
}

export default Info;