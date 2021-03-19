import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen, PostScreen } from '../screens';

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

const AppNavigation = createAppContainer(PostNavigator);

export default AppNavigation;
