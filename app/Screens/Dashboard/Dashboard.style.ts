import { StyleSheet, Platform } from 'react-native';

import { colors, dimens, fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...dimens.window
  },
  mapContainer: {
    marginBottom: 80,
  },
  overview: {
    marginTop: 210,
  },
  detail: {
    flex: 1,
    backgroundColor: colors.white
  },
})