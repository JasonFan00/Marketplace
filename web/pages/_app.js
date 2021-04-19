import '../components/styles.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//  Custom themes to typography
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Inter',
      'Segoe UI',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

export default function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme = {theme}>
          <Component {...pageProps} />
      </ThemeProvider>
  )
}