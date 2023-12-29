import React from 'react'
import { Button } from '../ButtonElements'
import { STypeContainer, STypeWrapper, STypeRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './ServiceTypeElements'

const SType = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description1, buttonLabel, alt, img, primary, dark, dark2 ,description2}) => {
  return (
    <>
      <STypeContainer lightBg={lightBg} id={id}>
        <STypeWrapper>
          <STypeRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
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
          </STypeRow>
        </STypeWrapper>
      </STypeContainer>
    </>
  )
}

export default SType
