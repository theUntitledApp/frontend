import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import Icon, { ICONS } from '@components/Icon';

type IconType = keyof typeof ICONS;

interface IconDropDownSelectorProps {
  initialIcon: IconType;
  icons: IconType[];
  onSelectIcon: (icon: string) => void;
}

const IconDropDownSelector = ({ initialIcon, icons, onSelectIcon }: IconDropDownSelectorProps) => {
  const [expanded, setExpanded] = useState(false);
  const [newIcon, setNewIcon] = useState<IconType>(initialIcon);

  const handleSelectIcon = (icon: IconType) => {
    setExpanded(false);
    onSelectIcon(icon);
    setNewIcon(icon);
    toggleExpand();
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: expanded ? 100 : 0 }}>
        {expanded &&
          <View >
            {icons.map((icon) => (
              <TouchableOpacity key={icon} onPress={() => handleSelectIcon(icon)}>
                <Icon icon={icon} size={32} color="#fff" />
              </TouchableOpacity>
            ))}
          </View>
        }
        <TouchableOpacity onPress={toggleExpand}>
          <Icon icon={newIcon} size={32} color="#fff" />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconList: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 20,
  },
});

export default IconDropDownSelector;

