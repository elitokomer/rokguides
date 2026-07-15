export type TalentNode = {
  id: string;
  label: string;
  percent?: string;
  rank: string;
  x: number;
  y: number;
  connections: string[];
};

export type TalentBranch = {
  id: string;
  name: string;
  color: string;
  nodes: TalentNode[];
};

export type TalentTreeData = {
  commander: string;
  branches: TalentBranch[];
};
