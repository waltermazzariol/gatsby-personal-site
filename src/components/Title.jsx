import React from "react"
import styled from "styled-components"

const Header = styled.h2`
  font-size: 1.8rem;
  line-height: 1.5em;
  font-weight: 400;
  color: ${props => props.theme.TitleColor};
  text-center: center;
`
const Divider = styled.hr`
  background-color: ${props => props.theme.PrimaryColor};
  height: 2px!important;
  max-width: 3.25rem;
  opacity: 1;
  margin: auto;
`

function Title({ data }) {

    return (
        <>
        {data !== "" ? <div className="text-center w-100 pb-3">
            <Header >{data}</Header>
            <Divider />
        </div>: "" }
        </>
    )
}

Title.defaultProps = {
    data: ""
}

export default Title