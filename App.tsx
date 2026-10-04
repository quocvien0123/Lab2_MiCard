import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Main Profile Card Content */}
      <View style={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>

        {/* Name */}
        <Text style={styles.name}>Nguyễn Anh Tuấn</Text>

        {/* Role & Title */}
        <Text style={styles.role}>VKU STUDENT • MOBILE DEVELOPER</Text>

        {/* Student ID & Class Badge */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>MSSV: 23IT297</Text>
          <Text style={styles.badgeDot}>•</Text>
          <Text style={styles.badgeText}>Lớp: 23SE2</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Phone Card */}
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.iconWrapper}>
            <Image
              source={require('./assets/phone.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.cardText}>+84 984 293 401</Text>
        </Pressable>

        {/* Email Card */}
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.iconWrapper}>
            <Image
              source={require('./assets/email.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.cardText}>tuanna.23it@vku.udn.vn</Text>
        </Pressable>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Lab 02 - MiCard • React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00695C',
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  avatarContainer: {
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#E0F2F1',
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  role: {
    fontSize: 14,
    fontWeight: '700',
    color: '#B2DFDB',
    letterSpacing: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#E0F2F1',
    letterSpacing: 0.5,
  },
  badgeDot: {
    color: '#80CBC4',
    marginHorizontal: 8,
    fontSize: 12,
  },
  divider: {
    width: 160,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginVertical: 18,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 340,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
    backgroundColor: '#F0FDFA',
  },
  iconWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00695C',
    letterSpacing: 0.3,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    letterSpacing: 0.5,
  },
});
