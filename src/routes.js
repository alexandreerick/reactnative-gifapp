import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Image from "./pages/image-info";


export default createStackNavigator(
{
  Main,
  Image,
}, 
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#6c1296",
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
});
