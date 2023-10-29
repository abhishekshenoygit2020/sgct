import React from "react"
import { mainTeam } from "../../dummydata"

const MainTeamCard = () => {
  return (
    <>
      {mainTeam.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img className="teamImg" src={val.cover} alt=''  />
            {/* <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div> */}
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            {/* <p>{val.work}</p> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default MainTeamCard
