import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  block: {
    // flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
<<<<<<< HEAD:components/Block.jsx
    const {
      flex, row, column, center, middle, right, space, style, children, ...props
    } = this.props;
=======
    const { flex, row, column, center, middle, right, space, spacebetween, style, children, ...props } = this.props;
>>>>>>> 726faef (update tabbar UI):components/Block.js
    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === 'disabled' && { flex: 0 },
      center && styles.center,
      middle && styles.middle,
      right && styles.right,
      space && { justifyContent: `space-${space}` },
      row && styles.row,
      column && styles.column,
      spacebetween && styles.spacebetween,
      style,
    ];

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}
<<<<<<< HEAD:components/Block.jsx
=======

const styles = StyleSheet.create({
  block: {
    // flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
});
>>>>>>> 726faef (update tabbar UI):components/Block.js
