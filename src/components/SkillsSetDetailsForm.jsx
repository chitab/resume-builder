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
import React from "react";

const SkillsSetDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Heading </FormLabel>
        <Input
          type="text"
          placeholder="Enter like C, C++, JavaScripts with comma separated"
          value={resumeInfo.skillsSet.title}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.skillsSet,
              title: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              skillsSet: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>
      {/* <FormControl>
        <FormLabel>Tags:</FormLabel>
        <Textarea
          placeholder="Javascripts, C, C++, etc.."
          value={resumeInfo.skillsSet.Skills}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.skillsSet,
              Skills: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              skillsSet: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
        <FormHelperText>Hit enter for newline</FormHelperText>
      </FormControl> */}
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

export default SkillsSetDetails;
