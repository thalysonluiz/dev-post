export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignUp: undefined;
      SignIn: undefined;

      NewPost: undefined;
      PostsUser: undefined;

      UpdateUser: undefined;
    }
  }
}
