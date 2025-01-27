export interface PropsBase {
  className?: string;
  children: React.ReactNode;
}

export type PropsVoid = {
  className?: string;
};

export type PropsMayBeVoid = {
  className?: string;
  children?: React.ReactNode;
};
