/* eslint-disable react/display-name */
import { useState } from "react";
import { Tabs, Spin } from "antd";
import { useQuery } from "react-query";
import dayjs from "dayjs";

const withDataTabs =
  (Component) =>
  ({ tabsConfig, date, stayId }) => {
    const [activeKey, setActiveKey] = useState(tabsConfig[0]?.key);
    const [activeSubTab, setActiveSubTab] = useState(
      tabsConfig[0]?.subTabs?.[0]?.filterKey || null
    );

    console.log(tabsConfig, tabsConfig.Component, "randi");

    const tabItems = tabsConfig?.map(({ title, key, fetchData, subTabs }) => {
      const formattedDate = dayjs(date).isValid()
        ? dayjs(date).format("YYYY-MM-DD")
        : null;

      const { data, isLoading } = useQuery(
        [key, formattedDate, stayId, activeSubTab],
        () => fetchData(formattedDate, activeSubTab),
        { enabled: !!formattedDate }
      );

      const subTabItems = Array.isArray(subTabs)
        ? subTabs.map(({ title, filterKey, Component: SubComponent }) => ({
            label: title,
            key: filterKey,
            children: <SubComponent data={data || []} date={formattedDate} />,
          }))
        : [];

      return {
        label: title,
        key: key,
        children: isLoading ? (
          <Spin />
        ) : subTabs && subTabItems.length > 0 ? (
          <Tabs
            activeKey={activeSubTab}
            onChange={setActiveSubTab}
            items={subTabItems}
          />
        ) : (
          <Component
            data={data?.data || []}
            date={formattedDate}
            mainComponent={tabsConfig.Component}
          />
        ),
      };
    });

    return (
      <Tabs
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
          const newActiveSubTab =
            tabsConfig?.find((tab) => tab.key === key)?.subTabs?.[0]
              ?.filterKey || null;
          setActiveSubTab(newActiveSubTab);
        }}
        items={tabItems}
      />
    );
  };

export default withDataTabs;
