import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../utils/colors";

const SearchBar = ({ placeholder, value, onChangeText }) => {
    return (
        <View style={styles.searchBarContainer}>
            <Icon name="search" size={24} color={colors.gray} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={colors.gray}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        backgroundColor: "#E9ECEF",
        borderRadius: 8,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 8,
        color: colors.TextPrimary,
    },
});

export default SearchBar;
