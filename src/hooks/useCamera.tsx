import { Alert } from 'react-native';

import { UserCamera } from '../components/index';

const useCamera = (permissionState: boolean) => {


  if (permissionState) {
    return (
      <UserCamera />
    )
  } else {
    Alert.alert('Meep Meep');
  }
};

export default useCamera;
