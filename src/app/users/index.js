// only export modules
// only pages are visibles
import UsersListPage from './pages/UsersListPage'
import UserAddPage from './pages/UserAddPage'

// multiple pages export
const UserModule = {
  UsersListPage,
  UserAddPage,
}

export default UserModule
