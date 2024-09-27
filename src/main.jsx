import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Navbar/MyNavbar.css'
import './components/Loader/Loader.css'
import './components/Footer/MyFooter.css'
import { ThemeProvider } from '@material-tailwind/react'
import 'animate.css'
import { Provider } from 'react-redux'
import store from './redux/state/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
)
