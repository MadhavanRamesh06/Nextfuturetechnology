import React from 'react';
import { SectionContainer, SectionTextDiv, SectionHeading, SectionPara, SectionImageDiv, SectionImage } from './sectionElements';

const Section = ({ data }) => {
    return ( 
        <SectionContainer> 
            <SectionTextDiv>
                <SectionHeading> {data.heading} </SectionHeading>
                <SectionPara> 
                    {data.para1}
                </SectionPara>

                <SectionPara> 
                    {data.para2}
                </SectionPara>
            </SectionTextDiv>

            <SectionImageDiv>
                <SectionImage src={data.img} />
            </SectionImageDiv>
        </SectionContainer>
     );
}
 
export default Section;