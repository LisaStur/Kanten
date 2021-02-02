import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export const Header = () => {

  return (
    <HeaderSection>
      <ImageContainer>
        <Image src={logo} alt='Strandkanten logo'/>
      </ImageContainer>
      <HeaderHeading>Strandkanten</HeaderHeading>
    </HeaderSection>

  )
}

const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 668px) {
    margin: 12px 0 0 0;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`
const ImageContainer = styled.div`
  display: flex;
  padding: 5%;

  @media (min-width: 668px) {
    padding: 2%;
  }  
`
const Image = styled.img`
  height: auto;
  width: 100%;
`
const HeaderHeading = styled.h1`
  display: none;
  color: white;
  padding: 0 0 12px 0;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  font-size: 60px;
  text-shadow: 2px 2px black;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    display: flex;
  }
`