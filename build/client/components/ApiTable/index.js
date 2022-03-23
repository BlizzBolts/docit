import { isEmpty } from 'lodash-es';
import React, { useEffect, useMemo, useState } from 'react';
const ApiTable = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        setLoading(true);
        props.get().then((data) => {
            setLoading(false);
            setData(data.default);
            console.log(data.default);
        });
    }, []);
    const enums = useMemo(() => {
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
        }, {});
    }, [data]);
    if (loading) {
        return React.createElement("div", null, "loading...");
    }
    return (React.createElement(React.Fragment, null, data
        ?.filter((o) => !isEmpty(o.props))
        .map((o) => {
        return (React.createElement("div", { key: o.componentName },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u5C5E\u6027"),
                        React.createElement("th", null, "\u7C7B\u578B"),
                        React.createElement("th", null, "\u9ED8\u8BA4\u503C"),
                        React.createElement("th", null, "\u5FC5\u586B"),
                        React.createElement("th", null, "\u63CF\u8FF0"))),
                React.createElement("tbody", null, o.props.map((p) => {
                    return (React.createElement("tr", { key: p.name },
                        React.createElement("td", null, p.name),
                        React.createElement("td", null,
                            React.createElement("span", { style: { color: p.isEnum ? 'red' : 'inherit' } }, p.type)),
                        React.createElement("td", null, p.defaultValue),
                        React.createElement("td", null, p.isRequired ? '是' : '否'),
                        React.createElement("td", null, p.description || '-')));
                })))));
    })));
};
export { ApiTable };
//# sourceMappingURL=index.js.map