import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER, 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAIL,
  LOGOUT_USER 
} from '../actions/type';

const INITIAL_STATE = { 
  email: '', 
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        loading: false,
        error: '', 
        user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state,
        loading: false, 
        error: 'Authentication Failed.' 
      };
    case LOGIN_USER:
      return { ...state,
        loading: true,
        error: ''
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
