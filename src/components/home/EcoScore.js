import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const EcoScore = ({ grade, streak, plasticSaved, co2Saved, weeklyGoal }) => {
    const progressPercentage = (weeklyGoal / 100) * 100;
    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Eco Score Today</Text>
        <Icon name="eco" size={24} color={colors.white} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.gradeContainer}>
          <Text style={styles.grade}>{grade}</Text>
          <View style={styles.streakContainer}>
            <Text style={styles.streakText}>{streak} day streak!</Text>
            <Text style={styles.streakIcon}>🔥</Text>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <Text style={styles.savedText}>You've saved today:</Text>
          <View style={styles.statRow}>
            <Icon name="recycling" size={16} color={colors.white} />
            <Text style={styles.statText}>{plasticSaved}kg plastic</Text>
            <Icon name="cloud" size={16} color={colors.white} />
            <Text style={styles.statText}>{co2Saved}kg CO₂</Text>
          </View>
        </View>
        
        <View style={styles.progressContainer}>
          <Text style={styles.goalText}>Weekly Goal</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progressPercentage}%` }]} />
          </View>
        </View>
      </View>
    </View>
    );  

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: 16,
        margin: 16,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
    },
    content: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    gradeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    grade: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.white,
    },
    streakContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 8,
    },
    streakText: {
        fontSize: 14,
        color: colors.white,
    },
    streakIcon: {
        fontSize: 16,
        color: colors.white,
        marginLeft: 4,  
    },
    statsContainer: {
        marginBottom: 16,
    },
    savedText: {
        fontSize: 14,
        color: colors.white,
        marginBottom: 8,
    },
    statRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    statText: {
        fontSize: 14,
        color: colors.white,
        marginLeft: 8,
    },
    progressContainer: {
        width: "100%",
    },
    goalText: {
        fontSize: 14,
        color: colors.white,
        marginBottom: 8,
    },
    progressBar: {
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.lightGray,
        overflow: "hidden",
    },
    progress: {
        height: "100%",
        backgroundColor: colors.secondary,
    },
});

export default EcoScore;