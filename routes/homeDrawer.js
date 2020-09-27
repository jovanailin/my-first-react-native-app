import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from "../screens/Home"
import Stats from "../screens/Stats"
import Settings from "../screens/Settings"

const screens = {
  Home: {
    screen: Home,
  },
  Stats: {
    screen: Stats,
  },
  Settings: {
    screen: Settings
  },
};
const HomeDrawer = createDrawerNavigator(screens);
export default createAppContainer(HomeDrawer);
