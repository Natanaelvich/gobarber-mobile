import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropsTypes from 'prop-types';
import { Container, Text } from './styles';

function Button({ loading, children, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropsTypes.string.isRequired,
  loading: PropsTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
