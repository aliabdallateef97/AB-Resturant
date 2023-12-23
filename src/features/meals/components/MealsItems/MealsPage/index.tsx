import React from "react";
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CustomTab } from "./style";
import TapContent from "./TapContent";
import { FormattedMessage } from "react-intl";

const MealsTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "10px" }}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile={true}
        >
          <CustomTab label={<FormattedMessage id="main-course"/>} value="1" />
          <CustomTab label={<FormattedMessage id="side-dish"/>} value="2" />
          <CustomTab label={<FormattedMessage id="appetizer"/>} value="3" />
          <CustomTab label={<FormattedMessage id="salad"/>} value="4" />
          <CustomTab label={<FormattedMessage id="soup"/>} value="5" />
          <CustomTab label={<FormattedMessage id="sauce"/>} value="6" />
          <CustomTab label={<FormattedMessage id="drink"/>} value="7" />
          <CustomTab label={<FormattedMessage id="dessert"/>} value="8" />
        </TabList>
      </Box>
      <TabPanel value="1"><TapContent type="main course" number={20}/></TabPanel>
      <TabPanel value="2"><TapContent type="side dish" number={20}/></TabPanel>
      <TabPanel value="3"><TapContent type="appetizer" number={20}/></TabPanel>
      <TabPanel value="4"><TapContent type="salad" number={20}/></TabPanel>
      <TabPanel value="5"><TapContent type="soup" number={20}/></TabPanel>
      <TabPanel value="6"><TapContent type="sauce" number={20}/></TabPanel>
      <TabPanel value="7"><TapContent type="drink" number={20}/></TabPanel>
      <TabPanel value="8"><TapContent type="dessert" number={20}/></TabPanel>
    </TabContext>
  );
};

export default MealsTabs;
