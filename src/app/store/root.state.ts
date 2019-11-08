import { Dog } from '../interfaces/dog.model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { DogsLoaded, EmptyStore, FavouriteDogsLoaded, SetLocalStorage, AddToFavourites
        , RemoveFromFavourites, EditDogDetails, EditFavDogDetails} from './root.actions';


export interface DogStateModel {
  dogs: {[key: string]: Dog};
  favouriteDogs: {[key: string]: Dog};
}

@State<DogStateModel>({
  name: 'dogs',
  defaults: {
    dogs: {},
    favouriteDogs: {},
  },
})
export class DogState {
  constructor(private store: Store) {
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
      [dog.message]: {
        ...dog,
        id: dog.message
      } },
    });
  }

  @Action(EmptyStore)
  emptyStore(ctx: StateContext<DogStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      dogs: {} ,
      // currentIndex: 1
    });
  }

@Action(AddToFavourites)
addToFavourites(ctx: StateContext<DogStateModel>, { favouriteDog }: AddToFavourites) {
  const state = ctx.getState();
  const dogsCopy = {...state.dogs};
  delete dogsCopy[favouriteDog.id];
  ctx.patchState({
    dogs : dogsCopy,
    favouriteDogs: {...state.favouriteDogs,
      [favouriteDog.message]: {
        ...favouriteDog,
        id: favouriteDog.message
      } },
  });
  this.store.dispatch( new SetLocalStorage());
}



  @Action(FavouriteDogsLoaded)
  favdogLoaded(ctx: StateContext<DogStateModel>, { favouriteDogs }: FavouriteDogsLoaded) {
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
  removeFromFavourites(ctx: StateContext<DogStateModel> , { favouriteDog }: RemoveFromFavourites) {
    const state = ctx.getState();
    const favdogsCopy = {...state.favouriteDogs};
    delete favdogsCopy[favouriteDog.id];


    ctx.patchState({
      favouriteDogs : favdogsCopy,
    });

    this.store.dispatch( new SetLocalStorage());
  }


  @Action(EditDogDetails)
  editDogDetails(ctx: StateContext<DogStateModel>, { dog }: EditDogDetails) {
    const state = ctx.getState();
    const dogsCopy = {...state.dogs};
    dogsCopy[dog.id] = dog;
    ctx.patchState({
      dogs : dogsCopy,
    });
  }

  @Action(EditFavDogDetails)
  editFavDogDetails(ctx: StateContext<DogStateModel>, { favouriteDog }: EditFavDogDetails) {
    const state = ctx.getState();
    const favdogsCopy = {...state.favouriteDogs};
    favdogsCopy[favouriteDog.id] = favouriteDog;
    ctx.patchState({
      favouriteDogs : favdogsCopy,
    });
    this.store.dispatch(new SetLocalStorage());
  }

}
