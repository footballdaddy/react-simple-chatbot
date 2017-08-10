import styled from 'styled-components';
import { scale } from '../../common/animations';
import defaultTheme from '../../theme';

const Bubble = styled.div`
  animation: ${scale} .3s ease forwards;
  background: ${props => (props.user || props.userchat ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
  border-radius: ${(props) => {
    const { isFirst, isLast, user, userchat } = props;
    if (!isFirst && !isLast) {
      return user || userchat ? '18px 0 0 18px' : '0 18px 18px 0px';
    } else if (!isFirst && isLast) {
      return user || userchat ? '18px 0 18px 18px' : '0 18px 18px 18px';
    }
    return props.user || props.userchat ? '18px 18px 0 18px' : '18px 18px 18px 0';
  }};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: ${props => (props.user || props.userchat ? props.theme.userFontColor : props.theme.botFontColor)};
  display: inline-block;
  font-size: 14px;
  max-width: 50%;
  margin: ${(props) => {
    const { isFirst, showAvatar, user, userchat } = props;
    if (!isFirst && showAvatar) {
      return user || userchat ? '-8px 46px 10px 0' : '-8px 0 10px 46px';
    } else if (!isFirst && !showAvatar) {
      return user || userchat ? '-8px 0px 10px 0' : '-8px 0 10px 0px';
    }

    return '0 0 10px 0';
  }};
  overflow: hidden;
  position: relative;
  padding: 12px;
  transform: scale(0);
  transform-origin: ${(props) => {
    const { isFirst, user, userchat } = props;
    if (isFirst) {
      return user || userchat ? 'bottom right' : 'bottom left';
    }

    return user || userchat ? 'top right' : 'top left';
  }};
`;

Bubble.defaultProps = {
  theme: defaultTheme,
};

export default Bubble;
