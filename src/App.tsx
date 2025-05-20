import { ParamEditor, type Model, type Param } from "./param-editor";

function App() {
  const dummyParams: Param[] = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
  ];

  const dummyModel: Model = {
    paramValues: [
      { paramId: 1, value: "100" },
      { paramId: 2, value: "200" },
    ],
    colors: [], // Пока заглушка
  };
  return (
    <ParamEditor params={dummyParams} model={dummyModel} />
  )
}

export default App
