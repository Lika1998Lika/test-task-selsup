import React from "react";

export interface Param {
  id: number;
  name: string;
  type: 'string';
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Color {
  [key: string]: any;
}

export interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

export interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}


export class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues.map((pv) => ({ ...pv })),
    };
  }
  private handleChange = (paramId: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      this.setState((prev) => {
        const exists = prev.paramValues.find((pv) => pv.paramId === paramId);
        const newParamValues = exists
          ? prev.paramValues.map((pv) =>
            pv.paramId === paramId ? { ...pv, value: newValue } : pv
          )
          : [...prev.paramValues, { paramId, value: newValue }];

        return { paramValues: newParamValues };
      });
    };

  public getModel(): Model {
    return {
      paramValues: this.state.paramValues,
      colors: this.props.model.colors,
    };
  }

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div>
        {params.map((param) => {
          const pv = paramValues.find((pv) => pv.paramId === param.id);
          const value = pv ? pv.value : '';
          let editor: React.ReactNode;
          switch (param.type) {
            case 'string':
            default:
              editor = (
                <input
                  type="text"
                  value={value}
                  onChange={this.handleChange(param.id)}
                />
              );
          }

          return (
            <div key={param.id} style={{ marginBottom: 12 }}>
              <label style={{ marginRight: 8, minWidth: 100, display: 'inline-block' }}>
                {param.name}
              </label>
              {editor}
            </div>
          );
        })}
      </div>
    );
  }
}