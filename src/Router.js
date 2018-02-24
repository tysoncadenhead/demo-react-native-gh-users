import { StackNavigator } from 'react-navigation';
import User from './screens/User';
import Users from './screens/Users';

export default StackNavigator({
    Home: {
        screen: Users
    },
    User: {
        screen: User
    }
}, {
    initialRouteName: 'Home'
});