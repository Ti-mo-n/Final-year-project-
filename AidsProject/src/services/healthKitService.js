import * as HealthKit from 'expo-healthkit';

export const initializeHealthKit = async () => {
  const result = await HealthKit.requestPermissionsAsync({
    read: [
      HealthKit.PermissionType.StepCount,
      HealthKit.PermissionType.Weight,
    ],
  });

  if (result.granted) {
    console.log('HealthKit permissions granted');
  } else {
    console.log('HealthKit permissions denied');
  }
};

export const getHealthKitData = async () => {
  const steps = await HealthKit.getStepCountAsync({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date().toISOString(),
  });

  const weight = await HealthKit.getWeightAsync({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date().toISOString(),
  });

  return { steps, weight };
};