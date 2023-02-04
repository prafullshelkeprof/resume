import { Typography, Box, Divider } from "@mui/material";
import { BusinessCenterOutlined, DateRange } from "@mui/icons-material";
import { useMemo } from "react";

const useWorkConfig = () => {
  const getOrgTimePeriod = (timePeriod: string) => {
    return <Box display={"flex"}>
      <DateRange />
      <Typography>{timePeriod}</Typography>
    </Box>
  };
  const getWorkSummary = (workSummary: string) => {
    return <Box display={"flex"}>
      <Typography>{workSummary}</Typography>
    </Box>
  }

  const getOrganizationName = (orgName: string) => {
    return <Box >
      <Divider />
      <Typography>{orgName}</Typography>
    </Box>
  }
  const WORK_CONFIG = useMemo(() => [
    {
      organizationName: getOrganizationName('GoGift/Nordisk Films'),
      timeInOrganization: getOrgTimePeriod('Nov 2021 - Present'),
      workSummary: getWorkSummary(`
    Designing, developing and maintaining Multiple Gogift e-com websites (a platform that
    facilitates various brands to list and sell their gift cards based on geographical locations)
    The platform serves both B2B and B2C customers`)
    },
    {
      organizationName: getOrganizationName('Interactive Brokers'),
      timeInOrganization: getOrgTimePeriod('May 2019 - Sep 2021'),
      workSummary: getWorkSummary(`Worked on the web application which allows users to trade on various exchanges
    The platform contained various modules such as trading, market overview, watchlist 
    pages etc. for helping users to trade and manage their account`)
    },
    {
      organizationName: getOrganizationName('Morningstar India Pvt Ltd'),
      timeInOrganization: getOrgTimePeriod('Aug 2016 - Apr 2019'),
      workSummary: getWorkSummary(`Worked on web tools like Screener, Quick search, watch list etc., which are used by clients 
    to screen and filter data (mutual funds, share, etc.) in a user-friendly way.
    Implemented automation to eliminate repeated tasks such as bundling, minification etc.`)
    },
    {
      organizationName: getOrganizationName('Ness SES'),
      timeInOrganization: getOrgTimePeriod('Sep 2015 - Aug 2016'),
      workSummary: getWorkSummary(`Worked on a Learning Management System (LMS) project for US based educational 
    institutes.
    Developed web pages which mainly consisted of filters and interactive graphs with 
    dependency on each other`)
    },
    {
      organizationName: getOrganizationName('Zeus System India Pvt Ltd'),
      timeInOrganization: getOrgTimePeriod('Jul 2013 - Sep 2015'),
      workSummary: getWorkSummary(`Created interactive games, tools and widgets for US based organizations.
    Developed products catered for class 5 or below students with relative simplicity`)
    }
  ], []);
  return [WORK_CONFIG];
}

export { useWorkConfig };
