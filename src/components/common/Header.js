import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {colors} from "../../utils/colors";

const Header = ({ title, onBackPress, showBack, showProfile  }) => {
    return (
        <View style={styles.headerContainer}>
        {showBack && (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {showProfile && (
            <TouchableOpacity style={styles.profileButton}>
            <Icon name="account-circle" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    backButton: {
        padding: 8,
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.textPrimary,
    },
    profileButton: {
        padding: 8,
    },
});

export default Header;