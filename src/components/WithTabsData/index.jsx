/* eslint-disable react/display-name */
import { useState } from "react";
import { Tabs, Spin } from "antd";
import { useQuery } from "react-query";
import dayjs from "dayjs";

const withDataTabs =
  (TabContent) =>
  ({ tabsConfig, date, stayId }) => {
    const [activeKey, setActiveKey] = useState(tabsConfig[0]?.key);
    const [activeSubTab, setActiveSubTab] = useState(
      tabsConfig[0]?.subTabs?.[0]?.filterKey || null
    );

    const tabItems = tabsConfig?.map((configData) => {
      const formattedDate = dayjs(date).isValid()
        ? dayjs(date).format("YYYY-MM-DD")
        : null;

      const { data, isLoading } = useQuery(
        [formattedDate, stayId, activeSubTab],
        () => {
          if (activeKey !== configData.key) return;

          return configData.fetchData(formattedDate, activeSubTab);
        },
        { enabled: !!formattedDate }
      );

      const subTabItems = Array.isArray(configData.subTabs)
        ? configData.subTabs.map(
            ({ title, filterKey, Component: SubComponent }) => ({
              label: title,
              key: filterKey,
              children: <SubComponent data={data || []} date={formattedDate} />,
            })
          )
        : [];

      return {
        label: configData.title,
        key: configData.key,
        children: isLoading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBlock: "100px",
            }}
          >
            <Spin />
          </div>
        ) : configData.subTabs && subTabItems.length > 0 ? (
          <Tabs
            activeKey={activeSubTab}
            onChange={setActiveSubTab}
            items={subTabItems}
          />
        ) : (
          <TabContent
            data={Array.isArray(data) ? data : data?.data || []}
            date={formattedDate}
            CategoriesComponent={configData.CategoriesComponent}
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
