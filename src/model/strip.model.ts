// Strip JSON data model
export interface IStripData {
  num:        number;
  title:      string;
  safe_title: string;
  transcript: string;
  img:        string;
  alt:        string;
  day:        string;
  month:      string;
  year:       string;
  link:       string;
  news:       string;
}

export interface IListState {
  value: IStripData | null;
  status: string;
  error: string | null;
  totalPages: number;
  totalItems: number;
}

export interface IListItem {
  name: string;
  picture: string;
  temperatures: any;
}

export interface IStateType {
  prevPath: { pathname: string }
}