// app/examples-hooks.tsx
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useAuth, usePlant, useProfile, useWeather } from '../hooks'

export default function ExamplesHooksScreen() {
  // ============ HOOKS ============
  const auth = useAuth()
  const profile = useProfile(true) // autoFetch = true
  const weather = useWeather()
  const plant = usePlant()

  // ============ AUTH HANDLERS ============
  const handleLogin = async () => {
    const result = await auth.login({
      email: 'abdamadhafiz13@gmail.com',
      password: 'GusinerT022',
      is_lifetime: true,
    })

    if (result.success) {
      Alert.alert('Berhasil', 'Login berhasil!')
    } else {
      Alert.alert('Error', result.error || 'Login gagal')
    }
  }

  const handleRegister = async () => {
    const result = await auth.register({
      email: 'user@example.com',
      password: 'Password123',
      front_name: 'John',
      back_name: 'Doe',
      address: 'Jakarta',
      phone_number: '08123456789',
      birth_date: '2000-01-01T00:00:00.000Z',
    })

    if (result.success) {
      Alert.alert('Berhasil', 'Registrasi berhasil!')
    } else {
      Alert.alert('Error', result.error || 'Registrasi gagal')
    }
  }

  const handleLogout = async () => {
    await auth.logout()
    Alert.alert('Berhasil', 'Logout berhasil!')
  }

  // ============ PROFILE HANDLERS ============
  const handleUpdateProfile = async () => {
    const result = await profile.updateProfile({
      front_name: 'Updated',
      back_name: 'Name',
      phone_number: '08987654321',
    })

    if (result.success) {
      Alert.alert('Berhasil', 'Profile berhasil diupdate!')
    } else {
      Alert.alert('Error', result.error || 'Update gagal')
    }
  }

  // ============ WEATHER HANDLERS ============
  const handleGetCurrentWeather = async () => {
    const result = await weather.fetchWeatherByCurrentLocation()

    if (result.success) {
      Alert.alert('Berhasil', 'Data cuaca berhasil diambil!')
    } else {
      Alert.alert('Error', result.error || 'Gagal mengambil cuaca')
    }
  }

  const handleGetWeatherJakarta = async () => {
    const result = await weather.fetchWeather('-6.2088', '106.8456')

    if (result.success) {
      Alert.alert('Berhasil', 'Data cuaca Jakarta diambil!')
    }
  }

  // ============ PLANT HANDLERS ============
  const handlePickAndAnalyze = async () => {
    const result = await plant.pickAndAnalyze()

    if (result.success) {
      Alert.alert('Berhasil', `Tanaman terdeteksi: ${result?.data?.plant_name}`)
    } else if (result.error !== 'Dibatalkan oleh user') {
      Alert.alert('Error', result.error || 'Analisis gagal')
    }
  }

  const handleCaptureAndAnalyze = async () => {
    const result = await plant.captureAndAnalyze()

    if (result.success) {
      Alert.alert('Berhasil', `Tanaman terdeteksi: ${result?.data?.plant_name}`)
    } else if (result.error !== 'Dibatalkan oleh user') {
      Alert.alert('Error', result.error || 'Analisis gagal')
    }
  }

  const handleGetPlantLogs = async () => {
    const result = await plant.fetchLogs()

    if (result.success) {
      Alert.alert('Berhasil', `Total ${plant.logs.length} log ditemukan`)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Custom Hooks Examples</Text>

      {/* AUTH SECTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔐 Authentication</Text>

        {auth.isAuthenticated ? (
          <View>
            <Text style={styles.statusText}>✅ Logged In</Text>
            <Text style={styles.infoText}>User ID: {auth.userId}</Text>
            <Text style={styles.infoText}>Email: {auth.email}</Text>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        ) : (
          <View style={styles.buttonGroup}>
            <Button
              title="Login"
              onPress={handleLogin}
              disabled={auth.loading}
            />
            <Button
              title="Register"
              onPress={handleRegister}
              disabled={auth.loading}
            />
          </View>
        )}

        {auth.error && <Text style={styles.errorText}>{auth.error}</Text>}
      </View>

      {/* PROFILE SECTION */}
      {auth.isAuthenticated && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👤 Profile</Text>

          {profile.profile ? (
            <View style={styles.dataBox}>
              <Text style={styles.dataText}>Nama: {profile.fullName}</Text>
              <Text style={styles.dataText}>
                Email: {profile.profile.email}
              </Text>
              <Text style={styles.dataText}>
                Phone: {profile.profile.phone_number}
              </Text>
              <Text style={styles.dataText}>
                Address: {profile.profile.address}
              </Text>
            </View>
          ) : (
            <Text style={styles.infoText}>Loading profile...</Text>
          )}

          <View style={styles.buttonGroup}>
            <Button
              title="Refresh Profile"
              onPress={profile.refreshProfile}
              disabled={profile.loading}
            />
            <Button
              title="Update Profile"
              onPress={handleUpdateProfile}
              disabled={profile.loading}
            />
          </View>

          {profile.error && (
            <Text style={styles.errorText}>{profile.error}</Text>
          )}
        </View>
      )}

      {/* WEATHER SECTION */}
      {auth.isAuthenticated && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌤️ Weather</Text>

          {weather.weather ? (
            <View style={styles.dataBox}>
              <View style={styles.weatherHeader}>
                <Image
                  source={{ uri: weather.weather.icon }}
                  style={styles.weatherIcon}
                />
                <View>
                  <Text style={styles.weatherLocation}>
                    {weather.weather.name}
                  </Text>
                  <Text style={styles.weatherTemp}>
                    {weather.weather.temperature.toFixed(1)}°C
                  </Text>
                </View>
              </View>

              <Text style={styles.dataText}>
                Range: {weather.temperatureRange}
              </Text>
              <Text style={styles.dataText}>
                Humidity: {weather.weather.humidity}%
              </Text>
              <Text style={styles.dataText}>
                Wind: {weather.weather.wind_speed} m/s
              </Text>
              <Text style={styles.dataText}>
                Curah Hujan: {weather.weather.curah_hujan}mm
              </Text>

              {weather.lastUpdated && (
                <Text style={styles.timestampText}>
                  Updated: {new Date(weather.lastUpdated).toLocaleTimeString()}
                  {weather.isStale && ' (Stale)'}
                </Text>
              )}
            </View>
          ) : (
            <Text style={styles.infoText}>Belum ada data cuaca</Text>
          )}

          <View style={styles.buttonGroup}>
            <Button
              title="Current Location"
              onPress={handleGetCurrentWeather}
              disabled={weather.loading}
            />
            <Button
              title="Jakarta Weather"
              onPress={handleGetWeatherJakarta}
              disabled={weather.loading}
            />
          </View>

          {weather.error && (
            <Text style={styles.errorText}>{weather.error}</Text>
          )}
        </View>
      )}

      {/* PLANT SECTION */}
      {auth.isAuthenticated && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌱 Plant Analysis</Text>

          <View style={styles.statsBox}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{plant.stats.total}</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, styles.healthyColor]}>
                {plant.stats.healthy}
              </Text>
              <Text style={styles.statLabel}>Sehat</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, styles.sickColor]}>
                {plant.stats.sick}
              </Text>
              <Text style={styles.statLabel}>Sakit</Text>
            </View>
          </View>

          <View style={styles.buttonGroup}>
            <Button
              title="Pick from Gallery"
              onPress={handlePickAndAnalyze}
              disabled={plant.analyzing}
            />
            <Button
              title="Take Photo"
              onPress={handleCaptureAndAnalyze}
              disabled={plant.analyzing}
            />
            <Button
              title="View Logs"
              onPress={handleGetPlantLogs}
              disabled={plant.loading}
            />
          </View>

          {plant.currentLog && (
            <View style={styles.dataBox}>
              <Text style={styles.plantName}>
                {plant.currentLog.plant_name}
              </Text>
              <Text style={styles.plantCondition}>
                Kondisi: {plant.currentLog.condition}
              </Text>
              <Text style={styles.plantDiagnosis}>
                {plant.currentLog.diagnosis}
              </Text>
              {plant.currentLog.detail.confidence && (
                <Text style={styles.confidence}>
                  Confidence: {plant.currentLog.detail.confidence}%
                </Text>
              )}
            </View>
          )}

          {plant.analyzing && (
            <Text style={styles.analyzingText}>Menganalisis...</Text>
          )}
          {plant.error && <Text style={styles.errorText}>{plant.error}</Text>}
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  buttonGroup: {
    gap: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#4CAF50',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 6,
    color: '#666',
  },
  dataBox: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  dataText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  errorText: {
    color: '#f44336',
    fontSize: 14,
    marginTop: 8,
  },
  weatherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  weatherIcon: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  weatherLocation: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  weatherTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  timestampText: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    fontStyle: 'italic',
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  healthyColor: {
    color: '#4CAF50',
  },
  sickColor: {
    color: '#f44336',
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  plantCondition: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
  },
  plantDiagnosis: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  confidence: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '500',
  },
  analyzingText: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 8,
    fontStyle: 'italic',
  },
})
