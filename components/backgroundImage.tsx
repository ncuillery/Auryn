/**
 * Copyright (c) You i Labs Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from 'react';
import { View, Image, StyleSheet, ImageURISource } from 'react-native';

interface Props {
  source: ImageURISource;
  children: React.ReactChildren;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 3,
  },
  background: {
    width: 1920,
    height: 1080,
    resizeMode: 'repeat',
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 5,
  },
});

export const BackgroundImage: React.FunctionComponent<Props> = ({ source, children }) => (
  <View style={styles.container}>
    <Image style={styles.background} source={source} />
    {children}
  </View>
);
