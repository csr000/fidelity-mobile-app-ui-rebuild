import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
  light: { fontWeight: '200' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});
export default class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      center, right, color, size, height, weight, spacing, h1, welcome, name, caption, medium, bold, light, italic, button, style, children, ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      welcome && styles.welcome,
      name && styles.name,
      button && styles.button,
      center && styles.center,
      right && styles.right,
      color && { color },
      color && color === 'accent' && styles.accent,
      color && color === 'black' && styles.black,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      size && { fontSize: size },
      bold && styles.bold,
      light && styles.light,
      caption && styles.caption,
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      spacing && { letterSpacing: spacing },
      style,
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}
