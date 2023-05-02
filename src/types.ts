export interface SearchDataProps {
  src: string;
  alt: string;
  id: string;
  title: string;
  class?: string;
}

export interface AsideDataProps {
  src: string;
  alt: string;
  id: string;
  title: string;
  class?: boolean;
}

export type TableBodyProps = {
  id: number;
  in_out: number;
  record: string;
  date: string;
  person_avatar: string;
  from_site: number;
  from_number: number;
  source: string;
  time: number;
  partnership_id: string;
  getGrade: JSX.Element;
  results: [];
  status: string;
  avatar: JSX.Element;
};

export type TResults = {
  type: string;
  title: string;
  tooltip: string;
};

export type PlayerProps = {
  record: string;
  partnership_id: string;
  time: number;
};

export interface ICallUser {
  src: string;
  alt: string;
}

export interface IDate {
  day: string;
  month: string;
  year: string;
}

export interface RowState {
  rows: TableBodyProps[];
  status: "idle" | "loading" | "resolved" | "FETCH_FAILED";
  error: string | null;
}

export interface RejectPayload {
  rows: TableBodyProps[] | null;
  error: string;
}

export interface ISearchCall {
  in_out: number;
}

export interface RootState {
  rows: {
    rows: TableBodyProps[];
    error: string | null;
    status: string;
  };
  filter: {
    filter: number | null;
  };
}
