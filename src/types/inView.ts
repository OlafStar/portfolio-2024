interface InViewOptions {
  root?: Element | Document;
  margin?: string;
  amount?: "some" | "all" | number;
}

export interface Options extends Omit<InViewOptions, "root" | "amount"> {
  once?: boolean;
  amount?: "some" | "all" | number;
}