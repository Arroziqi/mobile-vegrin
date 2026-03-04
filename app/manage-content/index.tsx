import ManageContentScreen from '@/libs/submodules/manageContent/screen/ManageContentScreen'
import { Redirect } from 'expo-router'
import { useAuth } from '@/libs/hooks'

function ManageContentPage() {
  const { roleName } = useAuth()
  if (roleName !== 'Admin') {
    return <Redirect href="/" />
  }

  return <ManageContentScreen />
}

export default ManageContentPage
