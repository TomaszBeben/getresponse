import React, { FC } from 'react'
import { TPosts } from '../types/TPosts';
import { Tdata } from '../types/Tdata';
import {
    MainContent,
    SingleContentElementText,
    SingleContentElementBottom,
    SingleContentHeaderElement ,
    SingleContentElement,
    SingleContentContainerBottom,
    UL}
  from './contentStyles';
  
const ContentData: FC<Tdata> = ({ selectedPosts }) => {
    return (
        <>
            {selectedPosts.map((elem) => {
                return (
                    <UL key={elem.id}>
                        <MainContent>
                            <SingleContentHeaderElement>{'DAY ' + elem.id}</SingleContentHeaderElement>
                            <SingleContentElement>
                                <SingleContentElementText>{elem.Column_1}</SingleContentElementText>
                            </SingleContentElement>
                            <SingleContentElement>
                                <SingleContentElementText>{elem.Column_2}</SingleContentElementText>
                            </SingleContentElement>
                            <SingleContentElement>
                                <SingleContentElementText>{elem.Column_3}</SingleContentElementText>
                            </SingleContentElement>
                            <SingleContentElement>
                                <SingleContentElementText>{elem.Column_4}</SingleContentElementText>
                            </SingleContentElement>
                            <SingleContentElement>
                                <SingleContentElementText>{elem.Column_5}</SingleContentElementText>
                            </SingleContentElement>
                            <SingleContentContainerBottom>
                                <SingleContentElementBottom>Carb</SingleContentElementBottom>
                                <SingleContentElementBottom>ICON</SingleContentElementBottom>
                            </SingleContentContainerBottom>
                        </MainContent>
                    </UL>
                )
            })
            }
        </>
    )
}

export default ContentData