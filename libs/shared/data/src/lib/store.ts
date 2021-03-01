import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
export class Store<Type> {
  private readonly state$ = new BehaviorSubject(this.initialState);
  public getState$() {
    return this.state$.asObservable();
  }
  public getState() {
    return { ...this.state$.value };
  }
  public setState(newState: Type) {
    this.state$.next({ ...newState });
  }
  constructor(private readonly initialState: Type) {}
}

const miStore = new Store<number>(1);
miStore.setState(2);
miStore.getState$().subscribe((x) => console.log(x));

of(1);
from([1, 2, 3]);
http.get();

const s = new Subject();
s.subscribe();
s.next(342);

const bs = new BehaviorSubject(0);
bs.subscribe();
bs.next(342);

const rs = new ReplaySubject();
rs.subscribe();
rs.next(342);

const s0 = { dia: 'viernes', sesion: 2 };
miStore.setState(s0);
const sesion = miStore.getState();
console.log(sesion); //{ dia: 'viernes', sesion: 2 }
sesion.dia = 'sábado';
console.log(sesion); //{ dia: 'sábado', sesion: 2 }
const sesion2 = miStore.getState(); //{ dia: 'viernes', sesion: 2 }
s0.dia = 'domingo';
const sesion3 = miStore.getState(); //{ dia: 'viernes', sesion: 2 }

const cliente = {
  datospersonales: { nombre: '', apellido: '' },
  pedidos: [{}, {}],
};
const str = JSON.stringify(cliente);
const c2 = JSON.parse(str);
