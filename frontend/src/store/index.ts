import { applyMiddleware, createStore, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
