import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import axios from 'axios'

const AuthContext = createContext()

axios.defaults.baseURL = `https://boominance.com/api`

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response) {
      return Promise.reject({
        message: err.message,
        ...err.response.data,
      })
    } else {
      return Promise.reject({
        message: 'Server is down',
      })
    }
  }
)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = useCallback(
    (data) => {
      return axios.post('/sellers/login', data).then((res) => {
        localStorage.setItem('token', res.data.accessToken)
        setUser(res.data)
      })
    },
    [setUser]
  )

  const logout = useCallback(() => {
    localStorage.clear()
    axios.defaults.headers.common['authorization'] = null
    setUser(null)
    window.location.href = '/'
  }, [setUser])

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user, loading, login, logout]
  )

  const loadUser = async () => {
    const token = localStorage.getItem('token')
    if (!token) return setLoading(false)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios
      .get('/sellers/@me')
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadUser()
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used in AuthProvider')

  return context
}
