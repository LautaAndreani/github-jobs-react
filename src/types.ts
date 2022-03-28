export interface Job {
  _id: string;
  company: string;
  position: string;
  type: string;
  location: string;
  created_at: number;
  company_img?: string | null;
  description: string;
  contact: string;
}

export interface Props {
  jobs: Job[];
}

export interface FilterProps {
  jobs: Job[];
  filterType: Function;
}

export interface PaginatorProps {
  handleMoreJobs: React.MouseEventHandler<HTMLButtonElement>;
  handleLessJobs: React.MouseEventHandler<HTMLButtonElement>;
  indexPaginator: number;
}

export interface HeaderTypes {
  searchFilter: Function;
}

export interface JobProps {
  filterJob?: Job;
}
