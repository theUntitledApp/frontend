import React, { FunctionComponent, useState } from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import colors from '@components/colors'

interface FriendProfilesProps {
  imageUrl: string;
  username: string;
}

const FriendProfiles: FunctionComponent<FriendProfilesProps> = ({ imageUrl, username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelected = (option: string) => {
    console.log(`Option selected: ${option}`);
    setIsDropdownOpen(false);
  };

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <TouchableOpacity style={styles.dropdownButton} onPress={handleDropdownToggle}>
        <Text style={styles.dropdownButtonText}>...</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownContainer}>
          {dropdownOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.dropdownOption}
              onPress={() => handleOptionSelected(option.value)}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.beigeDark,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    padding: 12,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdownButton: {
    padding: 10,
  },
  dropdownButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 60,
    right: 0,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownOption: {
    padding: 10,
  },
});

export default FriendProfiles;
