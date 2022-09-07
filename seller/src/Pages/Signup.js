import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Register() {
  const [categories, getData] = useState([])
  const URL = '/categories/'

  useEffect(() => {
    getAllData()
  }, [])
  const getAllData = () => {
    axios
      .get(`${URL}`)
      .then((res) => {
        const sell = res.data
        getData(sell)
      })
      .catch((error) => console.log(`${error}`))
  }

  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [country, setCountry] = useState('IN')
  const [password, setPassword] = useState('')
  const [whatRecommends, setwhatRecommends] = useState('')
  const [type, setType] = useState('')
  const [RegID, setRegID] = useState('')
  const [about, setAbout] = useState('')
  const navigation = useNavigate()

  const onSignup = () => {
    if (!name) return alert('Please enter fullname')
    if (!password) return alert('Please enter password')
    axios
      .post('/sellers', {
        name,
        email: params.get('email'),
        country,
        whatRecommends,
        type,
        RegID,
        about,
        password,
        token: params.get('token'),
      })
      .then((res) => {
        alert('Signed up successfully, please login to continue')
        navigation('/')
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <section className='login-main-wrapper'>
        <div className='container-fluid pl-0 pr-0'>
          <div className='row no-gutters'>
            <div className='col-md-5 p-5 bg-white full-height'>
              <div className='login-main-left'>
                <div className='text-center mb-5 login-main-left-header pt-4'>
                  <img
                    src='/recommender/assets/img/logo.svg'
                    className='img-fluid'
                    alt='LOGO'
                  />
                  <h5 className='mt-3 mb-3'>Welcome to Boominance</h5>
                  <p>
                    It is a long established fact that a reader <br /> will be
                    distracted by the readable.
                  </p>
                </div>

                <div className='form-group'>
                  <label>Full Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Email'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className='form-control'
                  >
                    <option value={'IN'}>India</option>
                    <option value={'US'}>United States of America</option>
                    <option value={'UK'}>United Kingdom</option>
                    <option value={'HK'}>Hong Kong</option>
                  </select>
                </div>

                <div className='form-group'>
                  <label className='form-label'>What Recommends</label>
                  <input
                    type='text'
                    className='form-control'
                    value={whatRecommends}
                    placeholder='What does he recommends'
                    required
                    onChange={(e) => setwhatRecommends(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <label className='form-label'>Type</label>
                  <select
                    className='form-control'
                    value={type}
                    required
                    name={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {categories.map((cat) => (
                      <option value={cat._id} key={cat._id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='form-group'>
                  <label className='form-label'>Registration ID</label>
                  <input
                    type='text'
                    className='form-control'
                    value={RegID}
                    placeholder='Registration ID (optional)'
                    onChange={(e) => setRegID(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label className='form-label'>About Me</label>
                  <input
                    type='text'
                    className='form-control'
                    value={about}
                    placeholder='About yourself'
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>

                <div className='mt-4'>
                  <div className='row'>
                    <div className='col-12'>
                      <button
                        type='button'
                        className='btn btn-outline-primary btn-block btn-lg'
                        onClick={onSignup}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>

                <div className='text-center mt-5'>
                  <p className='light-gray'>
                    Already have an account? <a href='/recommender/login'>Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
