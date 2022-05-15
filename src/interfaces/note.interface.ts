export interface INote {
  id?: string;
  title: string;
  content: string;
  createAt?: Date;
  tags: string[];
}
