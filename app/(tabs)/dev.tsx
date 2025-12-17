import React from "react";
import { Text, View } from "react-native";
import ButtonCustome from "@/components/buttons/ButtonCustome";

function Dev() {
  return (
    <View>
      <Text>Ini page dev</Text>
      <ButtonCustome title="Submit" variant="submitButton" />

      <ButtonCustome title="Danger" variant="danger" />

      <ButtonCustome title="Outline" variant="submitButtonOutline" />

      <ButtonCustome title="Scan" variant="scan" />
      <ButtonCustome title="Primary" />
    </View>
  );
}

export default Dev;
