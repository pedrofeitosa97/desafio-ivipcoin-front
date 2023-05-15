export interface iUserToken {
    uid: string,
    name: string,
    photoURL: string
}

export interface iUserLogin {
    email: string, 
    password: string
}

export interface iRegisterFormValues {
    name: string;
    email: string;
    password: string;
    photoURL: string
}

type SetTaskListUpdate = (updatedTaskList: any) => void;

export interface ICardProps {
    task: {
        description: string,
        id: string,
        title: string,
        owner: {
            user_id: string,
            username: string
        },
        picture: string
    },
    setTaskListUpdate: SetTaskListUpdate;
    getMyTasks: any,
    taskList: any
}

export interface LoginFormValues {
    email: string;
    password: string;
  }