import { Dog } from '../interfaces/dog.model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { DogsLoaded, EmptyStore, FavouriteDogsLoaded, SetLocalStorage, AddToFavourites, RemoveFromFavourites} from './root.actions';
import { DogsService } from '../services/dogs.service';

export interface DogStateModel {
  dogs: {[key: string]: Dog};
  favouriteDogs: Dog[];
  currentIndex: number
}

@State<DogStateModel>({
  name: 'dogs',
  defaults: {
    dogs: {},
    favouriteDogs: [],
    currentIndex: 1,
  },
})
export class DogState {
  constructor(private store : Store) {
  }

  @Selector()
  static getDogs(state: DogStateModel): Dog[] {
    return Object.values(state.dogs);
  }

  @Selector()
  static getFavouriteDogs(state: DogStateModel): Dog[] {
    return Object.values(state.favouriteDogs);
  }


  @Action(DogsLoaded)
  dogLoaded(ctx: StateContext<DogStateModel>, { dog }: DogsLoaded) {
    const state = ctx.getState();
    ctx.patchState({
      dogs: {...state.dogs, 
      [state.currentIndex]: {
        ...dog,
        id: state.currentIndex
      } },
      currentIndex: state.currentIndex + 1 
    });
  }

  @Action(EmptyStore)
  emptyStore(ctx: StateContext<DogStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      dogs: {} ,
      currentIndex: 1
    });
  }

//ctx.patchState() {
  //const dogsCopy = {...State.dogs};
  //delete dogsCopy[id]

  //ctx.patchState({
    //dogs
  //})
//}

@Action(AddToFavourites)
addToFavourites(ctx: StateContext<DogStateModel>, { favouriteDog }: AddToFavourites) {
  const state = ctx.getState();
  const dogsCopy = {...state.dogs};
  delete dogsCopy[favouriteDog.id];
  // favouriteDog.id = state.favouriteDogs.length;
  ctx.patchState({
    dogs : dogsCopy,
    favouriteDogs: [...state.favouriteDogs,favouriteDog]
  });
  this.store.dispatch( new SetLocalStorage());
  
}



  @Action(FavouriteDogsLoaded)
  favdogLoaded(ctx: StateContext<DogStateModel>, { favouriteDogs }:FavouriteDogsLoaded) {
    const state = ctx.getState();
    ctx.patchState({
      favouriteDogs: favouriteDogs
    });
  }

  @Action(SetLocalStorage)
  setLocalStorage(ctx: StateContext<DogStateModel>) {
    const state = ctx.getState();
    
    localStorage.setItem(
             'favourite-dogs',
             JSON.stringify(state.favouriteDogs)
           );
  }

  @Action(RemoveFromFavourites)
  removeFromFavourites(ctx: StateContext<DogStateModel> , { favouriteDog }:RemoveFromFavourites) {
    const state = ctx.getState();
    const favdogsCopy = [...state.favouriteDogs];
    favdogsCopy.forEach((current, index) => {
      if (favouriteDog.name === current.name) {
        favdogsCopy.splice(index, 1);
      }
    });

      
    ctx.patchState({
      favouriteDogs : favdogsCopy,
    });

    this.store.dispatch( new SetLocalStorage());
  }

}
