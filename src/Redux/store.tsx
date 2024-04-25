import { createStore } from 'redux'
import Reducer from './Reducer'
declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		__REDUX_DEVTOOLS_EXTENSION__?: () => any
	}
}

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(Reducer, composeEnhancers)
