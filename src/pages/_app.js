import '../../styles/globals.css'
// import "tailwindcss/tailwind.css";
import store from '../store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/src/styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {
        <Provider store={store} >
          <Component {...pageProps} />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
        </Provider>
      }
    </>
  )
  // 
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
