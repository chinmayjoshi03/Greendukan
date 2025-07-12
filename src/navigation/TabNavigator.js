import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { colors } from '../utils/colors';
import { SCREEN_NAMES } from '../utils/constants';

const Tab = createBottomTabNavigator();


const ScanScreen = () => (
  <View style={styles.placeholder}>
    <Icon name="qr-code-scanner" size={64} color={colors.textSecondary} />
    <Text style={styles.placeholderText}>Scan Screen</Text>
    <Text style={styles.placeholderSubtext}>Coming Soon</Text>
  </View>
);

const InsightsScreen = () => (
  <View style={styles.placeholder}>
    <Icon name="insights" size={64} color={colors.textSecondary} />
    <Text style={styles.placeholderText}>Insights Screen</Text>
    <Text style={styles.placeholderSubtext}>Coming Soon</Text>
  </View>
);

const TabNavigator = () => {
  const { totalItems } = useSelector(state => state.cart);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let iconColor = focused ? colors.primary : colors.textSecondary;

          switch (route.name) {
            case SCREEN_NAMES.HOME:
              iconName = 'home';
              break;
            case SCREEN_NAMES.SCAN:
              iconName = 'qr-code-scanner';
              break;
            case SCREEN_NAMES.INSIGHTS:
              iconName = 'insights';
              break;
            case SCREEN_NAMES.CART:
              iconName = 'shopping-cart';
              break;
            case SCREEN_NAMES.SETTINGS:
              iconName = 'settings';
              break;
            default:
              iconName = 'home';
          }

          return (
            <View style={styles.tabIconContainer}>
              <Icon name={iconName} size={size} color={iconColor} />
              {route.name === SCREEN_NAMES.CART && totalItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {totalItems > 99 ? '99+' : totalItems}
                  </Text>
                </View>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SCAN}
        component={ScanScreen}
        options={{ tabBarLabel: 'Scan' }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.INSIGHTS}
        component={InsightsScreen}
        options={{ tabBarLabel: 'Insights' }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.CART}
        component={CartScreen}
        options={{ tabBarLabel: 'Cart' }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SETTINGS}
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: 16,
  },
  placeholderSubtext: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 8,
  },
  tabIconContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: colors.red,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default TabNavigator;



