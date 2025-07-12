import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors"; // Adjust the import path as necessary
import Icon from "react-native-vector-icons/MaterialIcons"; 

const ProductCard = ({ product, onAddToCart }) => {
    const discountPercentage = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    return (
       <View style={styles.container}>
        {product.discount && (
            <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{discountPercentage}% OFF</Text>
            </View>
        )}
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.content}>
            <Text
                numberOfLines={2}
                style={styles.name}
            >
                {product.name}
            </Text>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                {product.originalPrice && (
                    <Text style={styles.originalPrice}>${product.originalPrice.toFixed(2)}</Text>
                )}
            </View>

            <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product)}>
                <Icon name="add-shopping-cart" size={24} color={colors.white} />
            </TouchableOpacity>
        </View>
       </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        margin: 8,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    discountBadge: {
        backgroundColor: colors.secondary,
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
        position: "absolute",
        top: 8,
        left: 8,
    },
    discountText: {
        color: colors.white,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    content: {
        flex: 1,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
    },
    price: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.primary,
    },
    originalPrice: {
        textDecorationLine: "line-through",
        marginLeft: 8,
        color: colors.gray,
    },
    addButton: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default ProductCard;