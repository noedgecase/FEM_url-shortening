import React from 'react'
import styled from 'styled-components'
import URLInputBox from './URLInputBox'
import sprite from '../../sprite.svg'

const StyledAdvancedSection = styled.section`
  background-color: #f0f1f6;
  display: flex;
  flex-direction: column;
  margin: 10em 0 0 0;
  padding: 0 0 10em 0;
  @media screen and (min-width: 960px) {
    margin: 5em 0 0 0;
  }
`

const StyledTopSection = styled.div`
  width: clamp(10em, 90%, 30em);
  margin: 3em auto 0 auto;
  h2 {
    color: hsl(257, 27%, 26%);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 1em auto;
  }
  p {
    color: hsl(257, 7%, 63%);
    text-align: center;
    font-weight: 500;
  }
  @media screen and (min-width: 960px) {
    width: clamp(10em, 90%, 50em);
    h2 {
      margin: 0.5em auto;
      font-size: 2rem;
    }
    p {
      line-height: 1.5;
      width: clamp(5ch, 60%, 60ch);
      margin: 0 auto;
    }
  }
`
const StyledBottomSection = styled.div`
  position: relative;
  width: clamp(10em, 90%, 30em);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    padding: 0 0 1em 0;
    position: relative;
    border-radius: 0.4em;
    background-color: white;
    width: 90%;
    margin: 5em auto 0 auto;
    h2 {
      color: hsl(257, 27%, 26%);
      text-align: center;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 auto 1em auto;
    }
    p {
      padding: 0 1em 1em 1em;
      color: hsl(257, 7%, 63%);
      text-align: center;
      font-weight: 500;
    }
    .card__icon--frame {
      position: relative;
      top: -2.5em;
      height: 5em;
      width: 5em;
      margin: 0 auto;
      border-radius: 50%;
      background-color: hsl(257, 27%, 26%);
    }
    .card__icon {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 50%;
    }
  }
  @media screen and (min-width: 960px) {
    width: clamp(50em, 80%, 80em);
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    .card {
      margin: 5em 1vw;
      width: clamp(10em, 50%, 25em);
      min-height: 17em;
      padding: 1vw;
      &:nth-of-type(4) {
        top: 2em;
      }
      &:nth-of-type(5) {
        top: 4em;
      }
      h2 {
        text-align: left;
        padding: 0 1rem;
      }
      p {
        text-align: left;
      }
    }
    .card__icon--frame {
      position: relative;
      top: -2.5em;
      right: 30%;
    }
  }
`
const StyledBackgroundLine = styled.div`
  position: absolute;
  top: 10em;
  height: 80%;
  width: 10px;
  background-color: hsl(180, 66%, 49%);
  @media screen and (min-width: 960px) {
    top: 50%;
    width: 80%;
    height: 10px;
  }
`

const AdvancedSection = () => {
  return (
    <StyledAdvancedSection>
      <URLInputBox />
      <StyledTopSection>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </StyledTopSection>
      <StyledBottomSection>
        <StyledBackgroundLine />
        <div className='background-line'></div>
        <div className='card'>
          <div className='card__icon--frame'>
            <svg className='card__icon'>
              <use href={sprite + '#icon-brand-recognition'} />
            </svg>
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className='card'>
          <div className='card__icon--frame'>
            <svg className='card__icon'>
              <use href={sprite + '#icon-detailed-records'} />
            </svg>
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className='card'>
          <div className='card__icon--frame'>
            <svg className='card__icon'>
              <use href={sprite + '#icon-fully-customizable'} />
            </svg>
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </StyledBottomSection>
    </StyledAdvancedSection>
  )
}

export default AdvancedSection
