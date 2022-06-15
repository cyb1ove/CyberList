import { TaskAction, TaskState, TaskActionTypes } from '../../types/task';

const initialState: TaskState = {
  activeTasks: [],
  trashTasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  console.log(action.payload);
  switch (action.type) {
    case TaskActionTypes.SET_TASK_DATA:
      return {
        ...state,
        activeTasks: action.payload.filter((task) => !task._trash),
        trashTasks: action.payload.filter((task) => task._trash),
      };
    case TaskActionTypes.SET_TASK_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
