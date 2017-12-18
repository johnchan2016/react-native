import { StackNavigator } from 'react-navigation';
import HomeScreen from 'App/screens/Home';
import LoginScreen from 'App/screens/Login';
import SignUpScreen from 'App/screens/SignUp';
import SearchCriteriaScreen from 'App/screens/SearchCriteria';
import PropertySummaryScreen from 'App/screens/PropertySummary';
import PropertyDetailScreen from 'App/screens/PropertyDetail';

const headerOptions =  {
    header: null,
    headerMode: 'none',
    navigationOptions: {
      header: null
    }
};

export const StackNavigatorConfig = StackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    SearchCriteria: { screen: SearchCriteriaScreen },
    PropertySummary: { screen: PropertySummaryScreen },
    PropertyDetail: {screen: PropertyDetailScreen}
  },
  headerOptions
);