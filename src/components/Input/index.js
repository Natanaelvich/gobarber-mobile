import React, { forwardRef } from 'react';
import PropsType from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style} ref={ref}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropsType.string,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
