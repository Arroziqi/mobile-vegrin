import React from 'react'
import Container from '@/components/container/Container'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import Hr from '@/components/Hr'
import privacyPolicy from '@/libs/markdowns/privacy-policy'
import Markdown from 'react-native-markdown-display'

function PrivacyPolicyScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title={'Privacy Policy'} />
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Kebijakan Privasi</Text>
          <Text style={styles.subTitle}>Aplikasi Vegrin</Text>
          <Text style={styles.updated}>
            Terakhir Diperbarui 2 Februari 2026
          </Text>
          <Hr color={'rgba(43, 152, 70, 1)'} thickness={1.18} />

          {/*TODO: privacy-policy.md content*/}
          <View style={styles.markdownWrapper}>
            <Markdown style={markdownStyles}>{privacyPolicy}</Markdown>
          </View>

          <View style={styles.agreementWrapper}>
            <Text style={styles.agreementTitle}>Persetujuan</Text>
            <Text style={styles.agreementBody}>
              Dengan menggunakan Aplikasi Vegrin, Anda mengakui telah membaca
              dan memahami Kebijakan Privasi ini.
            </Text>
          </View>

          <Hr />
          <Text style={styles.copyright}>
            © 2026 PT Mora Telematika Indonesia, Tbk
          </Text>
        </ScrollView>
      </View>
    </Container>
  )
}

export default PrivacyPolicyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    padding: 21,
    height: '100%',
  },
  updated: {
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(135, 135, 135, 1)',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 21,
    color: 'rgba(43, 152, 70, 1)',
    textAlign: 'center',
  },
  agreementWrapper: {
    borderRadius: 10,
    padding: 21,
    borderWidth: 1.18,
    borderColor: 'rgba(43, 152, 70, 1)',
    gap: 8,
  },
  agreementTitle: {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 19.5,
    color: 'rgba(44, 46, 53, 1)',
    textAlign: 'center',
  },
  agreementBody: {
    fontSize: 12,
    lineHeight: 20.4,
    color: 'rgba(66, 66, 66, 1)',
    textAlign: 'center',
  },
  copyright: {
    fontSize: 11,
    lineHeight: 16.4,
    color: 'rgba(135, 135, 135, 1)',
    textAlign: 'center',
    marginBottom: 40,
  },
  markdownWrapper: {
    marginVertical: 16,
  },
})

const markdownStyles = {
  body: {
    fontSize: 13,
    lineHeight: 21,
    color: 'rgba(66, 66, 66, 1)',
  },
  heading1: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 12,
    color: 'rgba(44, 46, 53, 1)',
  },
  heading2: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22.5,
    marginTop: 18,
    marginBottom: 8,
    color: 'rgba(44, 46, 53, 1)',
  },
  heading3: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },
  paragraph: {
    marginBottom: 10,
  },
  bullet_list: {
    marginLeft: 10,
  },
  list_item: {
    marginBottom: 6,
  },
  strong: {
    fontWeight: '700',
  },
  hr: {
    backgroundColor: 'rgba(43, 152, 70, 0.2)',
    height: 1,
    marginVertical: 16,
  },
} as const
