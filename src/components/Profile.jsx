import React from "react"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styled from 'styled-components'

const Card = styled.div`
  background: ${props => props.theme.BgCard};
  padding: 1.5rem;
  margin: 1rem 1rem 0.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
`

const ProfileWrapper = styled.div`
  margin: 0 auto 1rem;
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
`
const ProfileImg = styled.img`
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 50%);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`
const Name = styled.a`
  font-weight: 500;
  font-size: 1.3rem;
  color: ${props => props.theme.TitleColor};
`
const Description = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.SubtitleColor};
`
const SocialIcon = styled.div`
  margin-top: 1rem;
  i {
    border-radius: 50%;
		padding: 12px;
    min-width: 42px;
    min-height: 42px;
		background-color: ${props => props.theme.PrimaryColor};
    margin: 0.5rem;
    color: ${props => props.theme.IconColor};
    font-size: 1.1rem;
        &:hover {
          filter: brightness(110%)
        }
    }
`

function Profile({ data }) {
  try {
    var ProfileImage = data.fileImage.thumbnail
  } catch (e) {
      ProfileImage = ""
  }

function SplitString(props) {
    let text = props.data.toString();
    let newText = text.split('\\n').map((nstr, key) => <span key={key}>{nstr}<br/></span>);
    return newText;
  }

  return (
    <Container fluid>
      <Row className="justify-content-center" noGutters>
        <Col md="7" lg="5" className="text-center ">
          <Card>
            <ProfileWrapper>
              {ProfileImage ? <ProfileImg className="rounded-circle" src={ProfileImage} alt="profile" /> : 
              ""}
            </ProfileWrapper>
            <Name href={data.link}>{data.title}</Name>
            <Description><SplitString data={data.description}/></Description>
            <SocialIcon>
              {data.social_icons !== undefined ? <>{data.social_icons.map((key,index) => <a key={index} href={key.link} target="_blank" rel="noopener noreferrer"><i className={`${key.icon}`} aria-label="social button"></i></a>)}</>:""}
            </SocialIcon>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

Profile.defaultProps = {
  data: {
    title: "",
    description: ""
  }
}

export default Profile 