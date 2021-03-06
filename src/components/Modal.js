import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { rem } from '../utils/rem'
import ModalCloseBtn from './ModalCloseBtn'
import Rate from '../containers/Rate'

class Modal extends Component {
  static propTypes = {
    ratingDisabled: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown, false)
  }

  render() {
    const { ratingDisabled, onClose } = this.props

    return (
      <Overlay>
        <Wrapper aria-modal="true" aria-label="Rate us">
          <CloseWrapper onClick={onClose}>
            <ModalCloseBtn />
          </CloseWrapper>
          <TopBar id="rate-modal-question">
            How likely are you to recommend <strong>TherePM</strong> to a friend
            or colleague?
          </TopBar>
          <Content>
            <Rate disabled={ratingDisabled} />
          </Content>
        </Wrapper>
      </Overlay>
    )
  }

  onKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }
}

export default Modal

const radius = '8px'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.03);
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  max-width: ${rem(550)};
  height: auto;
  margin: 0 10px;

  border-radius: ${radius};
  background: #fff;
`

const TopBar = styled.div`
  width: 100%;
  padding: 20px 30px;

  text-align: center;
  font-size: ${rem(15)};
  line-height: 1.4;

  border-radius: ${radius} ${radius} 0 0;
  background: rgb(253, 214, 224);
  color: rgb(66, 38, 95);
`

const Content = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: center;
`

const CloseWrapper = styled.span`
  position: absolute;
  top: ${rem(5)};
  right: ${rem(5)};
`
