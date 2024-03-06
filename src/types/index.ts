export interface InitalState {
  data:dataInitialState[],
  loading:boolean
  error:boolean
}

export interface dataInitialState {
  _id:number
  title:string
  audio:string
}

export interface newDataPostRequest {
  title:string
  audio:string
}