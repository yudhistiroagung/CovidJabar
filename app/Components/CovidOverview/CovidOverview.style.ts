import { StyleSheet,Platform } from 'react-native';

import { colors, dimens, fonts } from '../../Themes';

export default StyleSheet.create({
  overview: {
    display: 'flex',
    position: 'absolute',
    minHeight: 140,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: dimens.padding.p2,
    marginRight: dimens.padding.p2,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: colors.grey,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
      }
    })
  },
  overviewItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overviewItemTitle: {
    fontSize: fonts.size.medium
  },
  overviewItemValue: {
    fontSize: 32,
    color: colors.black,
    fontWeight: '700',
    marginTop: dimens.padding.p1
  },
  separator: {
    backgroundColor: colors.primary,
    height: 32,
    width: 1,
    opacity: 0.7
  }
})