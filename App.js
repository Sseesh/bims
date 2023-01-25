import Home from './screens/Home';
import Login from './screens/Authentication/Login';
import Registration from './screens/Authentication/Registration';
import Forgotpass from './screens/Authentication/Forgotpass';
import Profile from './screens/Authentication/Profile';
import Dashboard from './screens/Dashboard';
import AddResident from './screens/AddResident';
import Resident from './screens/Resident';
import Map from './screens/Map';
import Household from './screens/Household';
import Report from './screens/Report';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation';
import styles from './Styles/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import formReducer from './plugins/formReducer';

const store = createStore(formReducer);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer style = {styles.backg}>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name ="Forgot Password" component={Forgotpass} options={{ headerShown: false }} />
        <Stack.Screen name ="Profile" component={Profile}options={{ headerShown: false }} />
        <Stack.Screen name = "AddResident" component={AddResident}options={{ headerShown: false }}/>
        <Stack.Screen name = "Resident" component={Resident}options={{ headerShown: false }}/>
        <Stack.Screen name = "Map" component={Map}options={{ headerShown: false }}/>
        <Stack.Screen name ="Household" component={Household}options={{ headerShown: false }}/>
        <Stack.Screen name = "Report" component={Report}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;

