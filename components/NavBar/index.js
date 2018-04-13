import { TabNavigator } from 'react-navigation';

import Search from '~/scenes/Search';
import MyEvents from '~/scenes/MyEvents';
import Profile from '~/scenes/Profile';
import Login from '~/scenes/Login';

export default TabNavigator({
  Search: { screen: Search },
  'My Events': { screen: MyEvents },
  Profile: { screen: Profile },
  Login: { screen: Login },
});
