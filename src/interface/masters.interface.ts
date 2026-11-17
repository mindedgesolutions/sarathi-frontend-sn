export interface IApplicationStatus {
  status_code: number;
  status_desc: string;
  active_status: boolean;
}

export interface IGender {
  code: number;
  description: string;
  active_status: boolean;
}

export interface ICategory {
  code: number;
  description: string;
  active_status: boolean;
}

export interface IRelationship {
  code: number;
  description: string;
  active_status: boolean;
}

export interface IReligion {
  code: number;
  description: string;
  active_status: boolean;
}

export interface IBoard {
  code: number;
  description: string;
  brief_description: string;
  board_code: string;
  class_code: number;
  active_status: boolean;
}

export interface IClassMaster {
  code: number;
  description: string;
  active_status: boolean;
}

export interface IDistrict {
  dist_id_pk: number;
  dist_id_bs: number;
  state_id_fk: number;
  schcd: string;
  dist_name: string;
  district_name_alias: string;
  active_status: boolean;
}

export interface IBlock {
  block_id_pk: number;
  dist_id_fk: number;
  subdiv_id_fk: number;
  schcd: string;
  block_name: string;
  active_status: boolean;
}
