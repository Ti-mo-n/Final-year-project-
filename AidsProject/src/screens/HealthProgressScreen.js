// screens/HealthProgressScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import { LineChart, ProgressCircle } from 'react-native-svg-charts';
import { useSpring, animated } from 'react-spring/native';
import * as shape from 'd3-shape';
import { initializeHealthConnect, getHealthConnectData } from '../services/healthconnect';
import { initializeHealthKit, getHealthKitData } from '../services/healthKitService';

const screenWidth = Dimensions.get('window').width;

const colorByStressLevel = (level) => {
  if (level < 25) return '#00e676';  // Green
  if (level < 50) return '#ffeb3b';  // Yellow
  if (level < 75) return '#ff9800';  // Orange
  return '#f44336';  // Red
};

export default function HealthProgressScreen() {
  const [healthData, setHealthData] = useState({
    height: '',
    weight: '',
    waterIntake: '',
    caloriesIntake: '',
    heartRate: null,
    bloodPressure: null,
    stressLevel: null,
    caloriesBurnt: null,
    steps: [],
    hydrationLevel: null,
    feverLikelihood: null,
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (Platform.OS === 'android') {
        const success = await initializeHealthConnect();
        if (success) {
          const data = await getHealthConnectData();
          if (data) {
            setHealthData((prevData) => ({
              ...prevData,
              ...data,
            }));
          }
        }
      } else if (Platform.OS === 'ios') {
        await initializeHealthKit();
        const data = await getHealthKitData();
        if (data) {
          setHealthData((prevData) => ({
            ...prevData,
            ...data,
          }));
        }
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (name, value) => {
    setHealthData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    Alert.alert('Data Saved', 'Your data has been saved successfully.');
  };

  const animationProps = useSpring({
    opacity: editMode ? 1 : 0,
    height: editMode ? 200 : 0,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Health Progress</Text>

      {!editMode && (
        <TouchableOpacity onPress={() => setEditMode(true)} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      )}

      <animated.View style={[styles.inputContainer, animationProps]}>
        <View style={styles.inputCard}>
          <Text style={styles.label}>Height (cm)</Text>
          <TextInput
            style={styles.input}
            value={healthData.height}
            onChangeText={(text) => handleInputChange('height', text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.label}>Weight (kg)</Text>
          <TextInput
            style={styles.input}
            value={healthData.weight}
            onChangeText={(text) => handleInputChange('weight', text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.label}>Water Intake (liters)</Text>
          <TextInput
            style={styles.input}
            value={healthData.waterIntake}
            onChangeText={(text) => handleInputChange('waterIntake', text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.label}>Calories Intake (kcal)</Text>
          <TextInput
            style={styles.input}
            value={healthData.caloriesIntake}
            onChangeText={(text) => handleInputChange('caloriesIntake', text)}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </animated.View>

      {!editMode && (
        <>
          {healthData.heartRate !== null && (
            <View style={styles.card}>
              <Text style={styles.label}>Heart Rate</Text>
              <Text style={styles.value}>{healthData.heartRate} bpm</Text>
              <ProgressCircle
                style={styles.progressCircle}
                progress={healthData.heartRate / 200}
                progressColor={'#f44336'}
              />
            </View>
          )}

          {healthData.bloodPressure !== null && (
            <View style={styles.card}>
              <Text style={styles.label}>Blood Pressure</Text>
              <Text style={styles.value}>{healthData.bloodPressure}</Text>
              <ProgressCircle
                style={styles.progressCircle}
                progress={parseInt(healthData.bloodPressure.split('/')[0]) / 200}
                progressColor={'#ff5722'}
              />
            </View>
          )}

          {healthData.caloriesBurnt !== null && (
            <View style={styles.card}>
              <Text style={styles.label}>Calories Burnt</Text>
              <Text style={styles.value}>{healthData.caloriesBurnt} kcal</Text>
              <ProgressCircle
                style={styles.progressCircle}
                progress={healthData.caloriesBurnt / 5000}
                progressColor={'#ff9800'}
              />
            </View>
          )}

          {healthData.steps.length > 0 && (
            <View style={styles.card}>
              <Text style={styles.label}>Steps</Text>
              <LineChart
                style={styles.chart}
                data={healthData.steps}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
                curve={shape.curveLinear}
              />
            </View>
          )}

          <View style={styles.card}>
            <Text style={styles.label}>Stress Level</Text>
            <ProgressCircle
              style={styles.progressCircle}
              progress={healthData.stressLevel ? healthData.stressLevel / 100 : 0}
              progressColor={colorByStressLevel(healthData.stressLevel)}
            />
          </View>

          {healthData.hydrationLevel !== null && (
            <View style={styles.card}>
              <Text style={styles.label}>Hydration Level</Text>
              <ProgressCircle
                style={styles.progressCircle}
                progress={healthData.hydrationLevel / 100}
                progressColor={'#2196f3'}
              />
            </View>
          )}

          {healthData.feverLikelihood !== null && (
            <View style={styles.card}>
              <Text style={styles.label}>Fever Likelihood</Text>
              <ProgressCircle
                style={styles.progressCircle}
                progress={healthData.feverLikelihood / 100}
                progressColor={'#e91e63'}
              />
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    overflow: 'hidden',
  },
  inputCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: '#d3d3d3',  // Light gray color
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chart: {
    height: 200,
    width: screenWidth - 32,
  },
  progressCircle: {
    height: 200,
  },
  editButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 20,
    marginBottom: 16,
  },
  editButtonText: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 20,
    marginTop: 16,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
