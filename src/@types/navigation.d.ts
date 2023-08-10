export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      ConfirmIdentity: undefined;
      EmailRecovery: undefined;
      PassRecover: undefined;
      SignUp: undefined;
      SignIn: undefined;

      Schedule: undefined;
      ScheduleDone: undefined;
      ScheduleCanceled: undefined;
      SchedulePending: undefined;
      //game: GameParams;
      Plan: undefined;
      UserData: undefined;
      Settings: undefined;
      SettingsConfirmIdentity: undefined;
      SettingsPassRecover: undefined;
    }
  }
}
