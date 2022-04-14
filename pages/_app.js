import '/main.css'
import {Provider} from "react-redux";
import {store} from '../redux/configureStore';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
