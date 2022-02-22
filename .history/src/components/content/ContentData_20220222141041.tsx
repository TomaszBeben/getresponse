import React from 'react'

const ContentData = () => {
  return (
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
  )
}

export default ContentData