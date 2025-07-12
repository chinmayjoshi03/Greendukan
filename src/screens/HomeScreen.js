import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { addToCart } from '../store/slices/cartSlice';
import { colors } from '../utils/colors';
import { MOCK_PRODUCTS, DEALS_PRODUCTS } from '../utils/constants';
import SearchBar from '../components/home/SearchBar';
import EcoScore from '../components/home/EcoScore';
import ProductCard from '../components/home/ProductCard';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { ecoScore, profile } = useSelector(state => state.user);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderProductCard = ({ item }) => (
    <ProductCard product={item} onAddToCart={handleAddToCart} />
  );

  const renderDealsCard = ({ item }) => (
    <ProductCard product={item} onAddToCart={handleAddToCart} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.homeIcon}>
              <Icon name="home" size={24} color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText} numberOfLines={1}>
                {profile.address}
              </Text>
              <Icon name="keyboard-arrow-down" size={20} color={colors.textSecondary} />
            </View>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="account-circle" size={32} color={colors.gray} />
          </TouchableOpacity>
        </View>

        <SearchBar
          placeholder="What's your daily needs?"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <EcoScore
          grade={ecoScore.grade}
          streak={ecoScore.streak}
          plasticSaved={ecoScore.plasticSaved}
          co2Saved={ecoScore.co2Saved}
          weeklyGoal={ecoScore.weeklyGoal}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Products</Text>
          <FlatList
            data={MOCK_PRODUCTS}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deals of the Day!</Text>
          <FlatList
            data={DEALS_PRODUCTS}
            renderItem={renderDealsCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  homeIcon: {
    marginRight: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    fontSize: 12,
    color: colors.textSecondary,
    flex: 1,
    marginRight: 4,
  },
  profileButton: {
    marginLeft: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  productList: {
    paddingHorizontal: 8,
  },
  bottomSpacing: {
    height: 80,
  },
});

export default HomeScreen;