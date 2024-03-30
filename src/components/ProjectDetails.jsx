import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ProjectDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;
  const [workSection, setWorkSection] = React.useState([]);
  const [workData, setWorkData] = React.useState({
    title: "",
    description: "",
  });

  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x.trim() === "");
    if (isEmpty) return;

    const duplicate = () => {
      let arr = resumeInfo.projects.projectData;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(workData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updatedValue = {
      ...resumeInfo.projects,
      projectData: resumeInfo.projects.projectData.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      projects: updatedValue,
    };
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  React.useEffect(() => {
    createProjectSection();
  }, []);

  const createProjectSection = () => {
    setWorkSection(workSection.concat(projectExperienceForm()));
  };

  const projectExperienceForm = () => {
    return (
      <Stack spacing={4} key={workSection.length}>
        <FormControl>
          <FormLabel>Title </FormLabel>
          <Input
            type="text"
            placeholder="Enter Project Title"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Descriptions:</FormLabel>
          <Textarea
            placeholder="Project Descriptions"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, description: e.target.value }));
            }}
          />
          <FormHelperText>Hit enter for newline</FormHelperText>
        </FormControl>
      </Stack>
    );
  };

  return (
    <Stack spacing={4}>
      {workSection}
      <Button
        colorScheme="messenger"
        onClick={createProjectSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Projects
      </Button>

      <HStack spacing={8} justify="center">
        <Button
          colorScheme="blue"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>
        <Button
          colorScheme="whatsapp"
          onClick={() => {
            saveData();
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </HStack>
    </Stack>
  );
};

export default ProjectDetails;
