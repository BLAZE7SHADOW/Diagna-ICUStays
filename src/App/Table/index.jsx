import { Tabs } from "antd";
import { filterDataByDate } from "../../Utils/functions";

const TabContent = ({ data, subTabs, date, mainComponent }) => {
  console.log("helloxx", data, mainComponent);
  const items = Array.isArray(subTabs)
    ? subTabs.map(({ title, filterKey, Component }) => ({
        key: filterKey,
        label: title,
        children: (
          <Component data={filterDataByDate(data[filterKey] || [], date)} />
        ),
      }))
    : [];

  return (
    <Tabs items={subTabs ? items : []}>
      {!subTabs ? <mainComponent data={data} /> : null}
    </Tabs>
  );
};

export default TabContent;
