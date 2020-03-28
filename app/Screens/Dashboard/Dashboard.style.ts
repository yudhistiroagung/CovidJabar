import { StyleSheet } from 'react-native';

import { colors, dimens } from '../../Themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
    ...dimens.window
  },
  text: {
    color: colors.primary
  }
})