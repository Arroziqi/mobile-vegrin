# Custom Hooks Documentation

## 📚 Overview

Custom hooks ini dibuat untuk mempermudah consume Redux state dan actions. Setiap hooks sudah include error handling, loading states, dan helper functions.

---

## 🔐 useAuth

Hook untuk authentication & user session management.

### Usage

```typescript
import { useAuth } from '../hooks';

function LoginScreen() {
  const auth = useAuth();

  const handleLogin = async () => {
    const result = await auth.login({
      email: 'user@example.com',
      password: 'password123',
    });

    if (result.success) {
      console.log('Login berhasil!');
    }
  };

  return (
    <Button 
      title="Login" 
      onPress={handleLogin} 
      disabled={auth.loading} 
    />
  );
}
```

### API

**State:**
- `isAuthenticated: boolean` - Status login
- `loading: boolean` - Loading state
- `error: string | null` - Error message
- `token: string | null` - Auth token
- `deviceId: string | null` - Device ID
- `userId: string | null` - User ID
- `email: string | null` - User email

**Actions:**
- `login(credentials)` - Login dengan email/password
- `register(userData)` - Register user baru
- `loginWithGoogle(credentials)` - Login dengan Google
- `logout()` - Logout user
- `verifyEmail(email)` - Verify email untuk reset password
- `resetPassword(data)` - Reset password user
- `clearError()` - Clear error message

---

## 👤 useProfile

Hook untuk user profile management.

### Usage

```typescript
import { useProfile } from '../hooks';

function ProfileScreen() {
  const profile = useProfile(true); // autoFetch = true

  const handleUpdate = async () => {
    const result = await profile.updateProfile({
      front_name: 'John',
      back_name: 'Doe',
    });

    if (result.success) {
      console.log('Profile updated!');
    }
  };

  return (
    <View>
      <Text>{profile.fullName}</Text>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}
```

### API

**State:**
- `profile: UserProfile | null` - User profile data
- `loading: boolean` - Loading state
- `error: string | null` - Error message
- `fullName: string | null` - Full name (computed)
- `isLoaded: boolean` - Profile sudah di-load atau belum

**Actions:**
- `fetchProfile()` - Fetch user profile
- `updateProfile(data)` - Update profile
- `refreshProfile()` - Refresh profile (force fetch)
- `clearError()` - Clear error

**Parameters:**
- `autoFetch?: boolean` - Auto fetch profile saat mount (default: false)

---

## 🌤️ useWeather

Hook untuk weather data dengan location support.

### Usage

```typescript
import { useWeather } from '../hooks';

function WeatherScreen() {
  const weather = useWeather();

  const handleGetWeather = async () => {
    // By current location
    const result = await weather.fetchWeatherByCurrentLocation();

    // By coordinates
    // const result = await weather.fetchWeatherByCoordinates({
    //   latitude: -6.2088,
    //   longitude: 106.8456,
    // });

    if (result.success) {
      console.log('Weather data fetched!');
    }
  };

  return (
    <View>
      {weather.weather && (
        <>
          <Text>{weather.weather.name}</Text>
          <Text>{weather.weather.temperature}°C</Text>
          <Text>{weather.temperatureRange}</Text>
        </>
      )}
      <Button title="Get Weather" onPress={handleGetWeather} />
    </View>
  );
}
```

### API

**State:**
- `weather: WeatherData | null` - Weather data
- `loading: boolean` - Loading state
- `error: string | null` - Error message
- `lastUpdated: string | null` - Last update timestamp
- `isStale: boolean` - Data older than 30 minutes

**Computed:**
- `temperatureInFahrenheit: number | null` - Temperature dalam Fahrenheit
- `temperatureRange: string | null` - Min-Max temperature range

**Actions:**
- `fetchWeather(lat, lon)` - Fetch weather by coordinates
- `fetchWeatherByCurrentLocation()` - Fetch weather by current location
- `fetchWeatherByCoordinates(coords)` - Fetch weather by coordinates object
- `refreshIfNeeded(lat, lon)` - Refresh weather jika data sudah stale
- `clearError()` - Clear error

---

## 🌱 usePlant

Hook untuk plant analysis & logs management.

### Usage

```typescript
import { usePlant } from '../hooks';

function PlantScreen() {
  const plant = usePlant();

  const handleAnalyze = async () => {
    // Pick from gallery
    const result = await plant.pickAndAnalyze();

    // Or capture with camera
    // const result = await plant.captureAndAnalyze();

    if (result.success) {
      console.log('Plant analyzed:', result.data.plant_name);
    }
  };

  return (
    <View>
      <Text>Total: {plant.stats.total}</Text>
      <Text>Sehat: {plant.stats.healthy}</Text>
      <Text>Sakit: {plant.stats.sick}</Text>

      <Button 
        title="Analyze Plant" 
        onPress={handleAnalyze}
        disabled={plant.analyzing}
      />

      {plant.currentLog && (
        <View>
          <Text>{plant.currentLog.plant_name}</Text>
          <Text>{plant.currentLog.diagnosis}</Text>
        </View>
      )}
    </View>
  );
}
```

### API

**State:**
- `logs: PlantLogData[]` - Array of plant logs
- `currentLog: PlantLogData | null` - Current selected log
- `loading: boolean` - Loading state
- `analyzing: boolean` - Analyzing state
- `error: string | null` - Error message

**Computed:**
- `healthyPlants: PlantLogData[]` - Filtered healthy plants
- `sickPlants: PlantLogData[]` - Filtered sick plants
- `stats: { total, healthy, sick }` - Plant statistics

**Actions:**
- `analyze(imageFile)` - Analyze plant dari file/blob
- `pickAndAnalyze()` - Pick image dari galeri dan analyze
- `captureAndAnalyze()` - Take photo dengan kamera dan analyze
- `fetchLogs()` - Fetch all plant logs
- `fetchDetail(plantId)` - Fetch detail log by ID
- `getLogsByCondition(condition)` - Filter logs by condition
- `clearError()` - Clear error

---

## 🎯 Best Practices

### 1. Error Handling

```typescript
const handleAction = async () => {
  const result = await hook.someAction();
  
  if (result.success) {
    // Success handling
    Alert.alert('Success', 'Action completed!');
  } else {
    // Error handling
    Alert.alert('Error', result.error || 'Something went wrong');
  }
};
```

### 2. Loading States

```typescript
<Button 
  title="Submit" 
  onPress={handleSubmit} 
  disabled={hook.loading} 
/>

{hook.loading && <ActivityIndicator />}
```

### 3. Auto Fetch

```typescript
// Profile akan auto fetch saat component mount
const profile = useProfile(true);

// Manual fetch
const profile = useProfile();
useEffect(() => {
  profile.fetchProfile();
}, []);
```

### 4. Conditional Rendering

```typescript
const auth = useAuth();

return (
  <View>
    {auth.isAuthenticated ? (
      <LoggedInView />
    ) : (
      <LoginView />
    )}
  </View>
);
```

### 5. Error Display

```typescript
{hook.error && (
  <Text style={styles.error}>{hook.error}</Text>
)}

// Or clear error after showing
useEffect(() => {
  if (hook.error) {
    Alert.alert('Error', hook.error);
    hook.clearError();
  }
}, [hook.error]);
```

---

## 🔄 Return Types

Semua action functions return object dengan format:

```typescript
{
  success: boolean;
  data?: any;        // Jika success
  error?: string;    // Jika failed
}
```

Contoh:

```typescript
const result = await auth.login({ email, password });

if (result.success) {
  console.log('Data:', result.data);
} else {
  console.error('Error:', result.error);
}
```

---

## 📦 Dependencies

Pastikan package berikut sudah terinstall:

```bash
npm install expo-image-picker expo-location
# atau
yarn add expo-image-picker expo-location
```

---

## 🚀 Quick Start

```typescript
// Import hooks
import { useAuth, useProfile, useWeather, usePlant } from '../hooks';

function MyScreen() {
  // Initialize hooks
  const auth = useAuth();
  const profile = useProfile(true);
  const weather = useWeather();
  const plant = usePlant();

  // Use them!
  return <View>...</View>;
}
```

Semua hooks sudah production-ready dan siap dipakai! 🎉
