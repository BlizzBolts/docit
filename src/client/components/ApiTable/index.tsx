import { Loading } from "../Loading";
import { isEmpty } from "lodash-es";
import React, { useEffect, useMemo, useState } from "react";
interface ApiTableProps {
  get: () => Promise<any>;
  path: string;
}

type Enums = {
  [key: string]: { value: string; description: string }[];
};

const ApiTable: React.FC<ApiTableProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ResolvedComponentProps[]>(null);

  useEffect(() => {
    setLoading(true);
    props
      .get()
      .then((data) => {
        setLoading(false);
        setData(data.default);

        console.log(data.default);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const enums: Enums = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.reduce((acc, curr) => {
      return {
        ...acc,
        ...curr.props
          .filter((o) => o.isEnum)
          .reduce((acc_, curr_) => {
            return {
              ...acc_,
              [curr_.type]: curr_.enums,
            };
          }, {}),
      };
    }, {}) as Enums;
  }, [data]);

  return (
    <Loading loading={loading}>
      {data
        ?.filter((o) => !isEmpty(o.props))
        .map((o) => {
          return (
            <div key={o.componentName}>
              <table>
                <thead>
                  <tr>
                    <th>属性</th>
                    <th>类型</th>
                    <th>默认值</th>
                    <th>必填</th>
                    <th>描述</th>
                  </tr>
                </thead>

                <tbody>
                  {o.props.map((p) => {
                    return (
                      <tr key={p.name}>
                        <td>{p.name}</td>
                        <td>
                          <span style={{ color: p.isEnum ? "red" : "inherit" }}>
                            {p.type}
                          </span>
                        </td>
                        <td>{p.defaultValue}</td>
                        <td>{p.isRequired ? "是" : "否"}</td>
                        <td>{p.description || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}

      {/* <div>
        {Object.entries(enums || {})?.map(([key, value]) => {
          return (
            <table key={key}>
              <thead>
                <tr>
                  <th>属性</th>
                  <th>值</th>
                </tr>
              </thead>

              <tbody>
                {value?.map((p) => {
                  return (
                    <tr key={p.value}>
                      <td>{p.description || "-"}</td>
                      <td>{p.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </div> */}
    </Loading>
  );
};

export { ApiTable };
