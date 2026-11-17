import type {
  IBoard,
  ICategory,
  IGender,
  IRelationship,
  IReligion,
} from './masters.interface';

export interface IStudentAddMaster {
  relationships: IRelationship[];
  genders: IGender[];
  categories: ICategory[];
  religions: IReligion[];
  boards: IBoard[];
}
