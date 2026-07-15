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

export type TalentBuild = {
  id: string;
  name: string;
  branches: TalentBranch[];
};

export type TalentTreeData = {
  commander: string;
  builds: TalentBuild[];
};
