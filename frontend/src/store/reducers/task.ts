import { TaskAction, TaskState, TaskActionTypes } from '../../types/task';

const initialState: TaskState = {
  mode: 'main',
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.SET_TASK_DATA:
      return {
        ...state,
        tasks: action.payload,
      };
    case TaskActionTypes.SET_TASK_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TaskActionTypes.SET_TASK_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
