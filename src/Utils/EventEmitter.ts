// export class EventEmitter {
//   private listeners: Map<string, any> = new Map()
//   static instance: EventEmitter
//   constructor() {
//     if (typeof EventEmitter.instance === 'object') {
//       return EventEmitter.instance
//     }
//     EventEmitter.instance = this
//     return this
//   }

//   public add(event: string, listener: any): void {
//     if (this.listeners.has(event)) {
//       const arrEvents = this.listeners.get(event)
//       arrEvents.push(listener)
//       this.listeners.set(event, arrEvents)
//     } else {
//       this.listeners.set(event, [listener])
//     }
//   }

//   public destoyEvent(event: string) {
//     this.listeners.delete(event)
//   }

//   public destroyListener(event: string, listener: any): void {
//     if (this.listeners.has(event)) {
//       const arrEvents = this.listeners.get(event)
//       const arg = arrEvents.filter((item: any) => item !== listener)
//       this.listeners.set(event, arg)
//     }
//   }

//   public notify(event: string, props: any): void {
//     if (this.listeners.has(event)) {
//       const arrEvents = this.listeners.get(event)
//       console.log({ arrEvents, props })
//       arrEvents.map((item: any) => item.update(event, props))
//     }
//   }
// }

// export class Observer {
//   private listeners: Map<string, any> = new Map()
//   static instance: Observer
//   constructor() {
//     if (typeof Observer.instance === 'object') {
//       return Observer.instance
//     }
//     Observer.instance = this
//     return this
//   }

//   public add<T extends Control>(event: string, listener: T): void {
//     if (this.listeners.has(event)) {
//       const arrEvents = this.listeners.get(event)
//       arrEvents.push(listener)
//       this.listeners.set(event, arrEvents)
//     } else {
//       this.listeners.set(event, [listener])
//     }
//   }

//   public destoyEvent(event: string) {
//     this.listeners.delete(event)
//   }

//   public destroyListener<T extends Control>(event: string, listener: T): void {
//     if (this.listeners.has(event)) {
//       const arrEvents = this.listeners.get(event)
//       const arrg = arrEvents.filter((item: any) => item !== listener)
//       this.listeners.set(event, arrg)
//     }
//   }

//   public notify(event: string, props: IProps): void {
//     if (this.listeners.has(event)) {
//       const arrEvents = this.listeners.get(event)
//       console.log({ arrEvents, props })
//       arrEvents.map((item: any) => item.update(event, props))
//     }
//   }
// }
