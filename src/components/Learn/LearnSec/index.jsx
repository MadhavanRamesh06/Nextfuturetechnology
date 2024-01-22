import React from 'react'
import { Button } from '../../ButtonElements'
import { LTypeContainer, LTypeWrapper, LTypeRow, Column1, Column2, TextWrapper, TopLine, Heading, Lubtitle, BtnWrap, ImgWrap, Img } from './LearnTypeElements'

const LType = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description1, buttonLabel, alt, img, primary, dark, dark2 ,description2}) => {
  return (
    <>
      <LTypeContainer lightBg={lightBg} id={id}>
        <LTypeWrapper>
          <LTypeRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Lubtitle darkText={darkText}>{description}</Lubtitle>
                <Lubtitle darkText={darkText}>{description1}</Lubtitle>
                <Lubtitle darkText={darkText}>{description2}</Lubtitle>
                <BtnWrap>
                  <Button to='contact'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </LTypeRow>
        </LTypeWrapper>
      </LTypeContainer>
    </>
  )
}

export default LType
