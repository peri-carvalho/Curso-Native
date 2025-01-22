import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import Example from "./Exemple";

//using styled component 
const TextNew = styled.Text`
color: red; 
`;

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Example />
        <Example />
        <Text>ProjectNative</Text>
        <TextNew>ProjectNative</TextNew>
      </View>
    </SafeAreaView>
  );
};

export default App;