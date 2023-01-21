import React, {useState} from 'react'
import styled from 'styled-components'
import MemberCarousel from './MemberCarousel'
import { MemberNames } from './MemberNames'

function Teams() {
  const [teamName, setTeamName] = useState(MemberNames.CoreTeam);

  function handleClickTeams(teamName) {
    setTeamName(teamName);
  };

  return (
    <Container>
      <Heading>
        <div className='parent_div'>
        <span className='heading_teams'>Teams</span>
        <p className='desc_teams'>Nothing was possible without these talented folks! Check out the teams for the events and connect with them.</p>
        <ul className='member_list'>
          <li onClick={() => handleClickTeams(MemberNames.CoreTeam)}>Core Team</li>
          <li onClick={() => handleClickTeams(MemberNames.Management)}>Management</li>
          <li onClick={() => handleClickTeams("Designing")}>Designing</li>
          <li onClick={() => handleClickTeams("Development")}>Development</li>
          <li onClick={() => handleClickTeams("Hackoverflow")}>Hackoverflow</li>
          <li onClick={() => handleClickTeams("CapturePoint")}>Capture Point 5353</li>
          <li onClick={() => handleClickTeams("Swot")}>SWOT the Trends</li>
          <li onClick={() => handleClickTeams("ChoiceMatrixQuiz")}>Choice Matrix Quiz</li>
          <li onClick={() => handleClickTeams("CodeCombat")}>Code Combat</li>
          <li onClick={() => handleClickTeams("CS")}>CS: Cannon Crew</li>
          <li onClick={() => handleClickTeams("De5igne4")}>De5igne4</li>
          <li onClick={() => handleClickTeams("Igniter")}>Igniter 3.0</li>
        </ul>
        </div>
      </Heading>
      <MemberCarousel teamName={teamName}/>
    </Container>
  )
}

export default Teams

const Container = styled.div`
  color: white;
  margin-left: 75px;
  margin-right: 75px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  height: 100%;
  font-family: 'Bujji', sans-serif;
`
const Heading = styled.div`
  width: 50%;
  ${'' /* margin-right: 190px; */}
  
  .parent_div {
    max-width: 417px;
  }

  .heading_teams {
    font-size: 40px;
    line-height: 39px;
    background: linear-gradient(99.32deg, #B2016B 0%, #1E149D 119.64%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  .desc_teams {
    padding-top: 21px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #B5B0B0;
  }
  .member_list {
    padding-top: 15px;
    font-size: 16px;
    font-weight: 900;
    padding-left: 0;
  }
  .member_list li {
    list-style: none;
    padding-top: 10px;
    padding-bottom: 10px;
    
    &:hover {
      background: linear-gradient(90deg, #B2016B 26.26%, #1E149D 94.71%);
      opacity: 0.9;
    }
    
  }
`
