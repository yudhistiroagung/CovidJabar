import { StyleSheet } from 'react-native';

import { dimens, fonts, colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dimens.padding.p1,
    marginBottom: dimens.padding.p0_5
  },
  statusContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: fonts.size.large,
    fontWeight: '700',
    color: colors.black,
  },
  info: {
    fontSize: fonts.size.medium,
    color: colors.grey
  },
  separator: {
    display: 'flex',
    height: 1,
    marginLeft: dimens.padding.p1,
    backgroundColor: colors.grey,
    opacity: 0.5
  },
  empty: {
    marginTop: 120,
    color: colors.primary,
    fontSize: fonts.size.huge,
    alignSelf: 'center'
  },
  selected: {
    backgroundColor: colors.lightGrey,
  }
})