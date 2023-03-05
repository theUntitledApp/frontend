import React, { FunctionComponent, ReactNode, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type TabProps = {
  tabs: Array<{ title: string, content: React.ReactNode }>
}

const styles = StyleSheet.create({
  tab: {
    width: '100%',
    paddingHorizontal: 10,
  },
  tabContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
})

const Tab: FunctionComponent<TabProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = (index: number) => {
    setActiveIndex(index);
  };
  const tabs = props.tabs;

  return (
    <View style={styles.tab}>
      <View style={{ flexDirection: 'row' }}>
        {tabs.map((tab, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => handlePress(idx)}
            style={{
              flex: 1,
              paddingVertical: 10,
              alignItems: 'center',
              borderBottomWidth: activeIndex === idx ? 2 : 0,
              borderBottomColor: 'black',
            }}
          >
            <Text>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tabContent}>
        {tabs[activeIndex].content}
      </View>
    </View>
  )
}

export default Tab;
