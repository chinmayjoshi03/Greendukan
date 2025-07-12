import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { clearCart } from '../store/slices/cartSlice';
import { colors } from '../utils/colors';
import Header from '../components/common/Header';

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            dispatch(clearCart());
            Alert.alert('Logged Out', 'You have been logged out successfully.');
          },
        },
      ],
    );
  };

  const SettingsItem = ({ icon, title, onPress, showArrow = true, isDestructive = false }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <Icon
          name={icon}
          size={24}
          color={isDestructive ? colors.red : colors.textPrimary}
        />
        <Text style={[styles.settingTitle, isDestructive && styles.destructiveText]}>
          {title}
        </Text>
      </View>
      {showArrow && !isDestructive && (
        <Icon name="chevron-right" size={24} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );

  const showComingSoon = (feature) => {
    Alert.alert('Coming Soon', `${feature} feature will be available soon!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Settings"
        showBack
        onBackPress={() => navigation.goBack()}
        showProfile
      />
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.section}>
          <SettingsItem
            icon="inventory-2"
            title="My Orders"
            onPress={() => showComingSoon('My Orders')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="person"
            title="My Details"
            onPress={() => showComingSoon('My Details')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="home"
            title="Address Book"
            onPress={() => showComingSoon('Address Book')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="credit-card"
            title="Payment Methods"
            onPress={() => showComingSoon('Payment Methods')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="notifications"
            title="Notifications"
            onPress={() => showComingSoon('Notifications')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="help"
            title="FAQs"
            onPress={() => showComingSoon('FAQs')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="headset-mic"
            title="Help Center"
            onPress={() => showComingSoon('Help Center')}
          />
        </View>

        <View style={[styles.section, styles.logoutSection]}>
          <SettingsItem
            icon="logout"
            title="Logout"
            onPress={handleLogout}
            showArrow={false}
            isDestructive={true}
          />
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginLeft: 16,
  },
  destructiveText: {
    color: colors.red,
  },
  logoutSection: {
    marginTop: 24,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default SettingsScreen;