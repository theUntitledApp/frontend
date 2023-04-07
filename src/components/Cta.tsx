import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";

import { Icon } from './index';

type CtaProps = {
  external?: boolean,
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    border: "1px solid #000",
    borderRadius: 4,
    shadowColor: '#fff',
    flexDirection: 'row',
  }
})
// Not sure if needed so leaving it empty and might remove later or we make it a wrapper
// for Icons etc and give a function with it like navigate or event trigger 
