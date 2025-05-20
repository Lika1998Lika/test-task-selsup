interface Param  {
id: number;
name: string;
type: string;
};

interface ParamValue {
  paramId: number;
  value: string;
};

interface Model {
  paramValues: ParamValue[];
  colors: []
};

export interface Props {
  params: Param[];
  model: Model
};

export type model = {
  paramValues: [
    {
      paramId: number,
      value: string,
    }
  ]
};

export type params = {
  id: number,
  name: string
}[];