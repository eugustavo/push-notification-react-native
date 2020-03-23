import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import OneSignal from 'react-native-onesignal';


export default function App() {
  useEffect(() => {
    OneSignal.init("YOUR_ONESIGNAL_APP_ID")
  }, []);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 24, fontWeight: "bold", color: "#999"}}>Push Notification</Text>
    </View>
  );
};
