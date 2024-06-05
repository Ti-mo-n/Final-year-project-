// services/healthConnectService.js

import HealthConnect from 'react-native-health-connect';

export const initializeHealthConnect = async () => {
  const options = {
    scopes: [
      'heart_rate.read',
      'blood_pressure.read',
      'weight.read',
      'activity.read',
      'calories_burned.read'
    ],
  };

  const authResult = await HealthConnect.authorize(options);
  if (authResult.success) {
    console.log('Health Connect authorization success');
    return true;
  } else {
    console.log('Health Connect authorization failed');
    return false;
  }
};

export const getHealthConnectData = async () => {
  const heartRateData = await HealthConnect.getHeartRateSamples();
  const bloodPressureData = await HealthConnect.getBloodPressureSamples();
  const stepData = await HealthConnect.getStepCountSamples();
  const caloriesBurntData = await HealthConnect.getCaloriesBurnedSamples();
  const weightData = await HealthConnect.getWeightSamples();

  return {
    heartRate: heartRateData.length > 0 ? heartRateData[0].value : null,
    bloodPressure: bloodPressureData.length > 0 
      ? `${bloodPressureData[0].systolic}/${bloodPressureData[0].diastolic}` 
      : null,
    steps: stepData.length > 0 ? stepData[0].steps : [],
    caloriesBurnt: caloriesBurntData.length > 0 ? caloriesBurntData[0].calories : null,
    weight: weightData.length > 0 ? weightData[0].weight : null,
  };
};
