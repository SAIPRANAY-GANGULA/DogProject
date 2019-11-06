import { Dog } from '../interfaces/dog.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DogsLoaded, EmptyStore} from './root.actions';
import { DogsService } from '../services/dogs.service';

export interface DogStateModel {
  dogs: Dog[];
}

@State<DogStateModel>({
  name: 'dogs',
  defaults: {
    dogs: [],
  },
})
export class DogState {
  constructor() {
  }

  @Selector()
  static getDogs(state: DogStateModel): Dog[] {
    return state.dogs;
  }


  @Action(DogsLoaded)
  dogLoaded(ctx: StateContext<DogStateModel>, { dog }: DogsLoaded) {
    const state = ctx.getState();
    ctx.patchState({
      dogs: [ ...state.dogs, dog ],
    });
  }

  @Action(EmptyStore)
  emptyStore(ctx: StateContext<DogStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      dogs: [] ,
    });
  }


}
