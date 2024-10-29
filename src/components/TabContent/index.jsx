import { Tabs } from "antd";
import { filterDataByDate } from "../../Utils/functions";

const TabContent = ({ data, subTabs, date, CategoriesComponent }) => {
  const items = subTabs?.map(({ title, filterKey, Component }) => ({
    key: filterKey,
    label: title,
    children: (
      <Component data={filterDataByDate(data[filterKey] || [], date)} />
    ),
  }));

  return subTabs ? (
    <Tabs items={Array.isArray(items) ? items : []} />
  ) : (
    CategoriesComponent && <CategoriesComponent data={data} />
  );
};

export default TabContent;
