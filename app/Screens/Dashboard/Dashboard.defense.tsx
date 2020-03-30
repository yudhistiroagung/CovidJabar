import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { colors, fonts, dimens } from '../../Themes';
import { DashboardDefenseProps } from './Dashboard.props';

const renderRetry = (retry: () => void) => (
  <TouchableOpacity style={s.button} onPress={retry}>
    <Text style={s.buttonText}>Retry</Text>
  </TouchableOpacity>
)

const renderError = (retry: () => void) => (
  <>
    <Text style={s.message}>Something went wrong with our end!</Text>
    {renderRetry(retry)}
  </>
)

const DashboardDefense: React.FC<DashboardDefenseProps> = ({ retry, loading }) => (
  <View style={s.container}>
    { !loading && renderError(retry) }
    { loading && <ActivityIndicator size="large" color={colors.white} />}
  </View>
);

const s = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    ...dimens.window,
  },
  message: {
    fontSize: fonts.size.huge,
    color: colors.white,
    marginHorizontal: 32,
    textAlign: 'center'
  },
  button: {
    marginTop: 24,
    padding: dimens.padding.p1,
    backgroundColor: colors.white
  },
  buttonText: {
    color: colors.black
  },
});

export default DashboardDefense;
