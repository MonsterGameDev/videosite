import { User } from '../user/models/user.interface';
import { UserState } from '../user/+state/user.reducer';

export interface AppState {
    user: UserState;
}
