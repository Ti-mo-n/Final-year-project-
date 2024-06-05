// services/healthKitService.js

import AppleHealthKit from 'react-native-health';

export const initializeHealthKit = async () => {
  const permissions = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.HeartRate,
        AppleHealthKit.Constants.Permissions.BloodPressureDiastolic,
        AppleHealthKit.Constants.Permissions.BloodPressureSystolic,
        AppleHealthKit.Constants.Permissions.StepCount,
        AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
        AppleHealthKit.Constants.Permissions.Weight
      ],
    },
  };

  AppleHealthKit.initHealthKit(permissions, (err) => {
    if (err) {
      console.log('HealthKit initialization failed:', err);
    } else {
      console.log('HealthKit successfully initialized');
    }
  });
};

export const getHealthKitData = async () => {
  const heartRateData = await new Promise((resolve, reject) => {
    AppleHealthKit.getHeartRateSamples({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  const bloodPressureData = await new Promise((resolve, reject) => {
    AppleHealthKit.getBloodPressureSamples({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  const stepData = await new Promise((resolve, reject) => {
    AppleHealthKit.getStepCount({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  const caloriesBurntData = await new Promise((resolve, reject) => {
    AppleHealthKit.getActiveEnergyBurned({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  const weightData = await new Promise((resolve, reject) => {
    AppleHealthKit.getLatestWeight({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  return {
    heartRate: heartRateData.length > 0 ? heartRateData[0].value : null,
    bloodPressure: bloodPressureData.length > 0 
      ? `${bloodPressureData[0].bloodPressureSystolic}/${bloodPressureData[0].bloodPressureDiastolic}` 
      : null,
    steps: stepData.length > 0 ? stepData.map(step => step.steps) : [],
    caloriesBurnt: caloriesBurntData.length > 0 ? caloriesBurntData[0].value : null,
    weight: weightData ? weightData.value : null,
  };
};
