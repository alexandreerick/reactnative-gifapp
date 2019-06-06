import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";

export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#6c1296",
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  },
});
