export interface PostsUserParams {
  title: string;
  userId: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignUp: undefined;
      SignIn: undefined;

      NewPost: undefined;
      PostsUser: PostsUserParams;

      UpdateUser: undefined;
    }
  }
}
