import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Center,
  Heading,
  Progress,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import BasicDetails from "./BasicDetailsForm";
import EduacationDetails from "./EducationDetails";
import ProfessionalDetails from "./ProfessionalDetailsForm";
import ResumeTemplate from "./ResumeTemplate";
import SkillsSetDetails from "./SkillsSetDetailsForm";
import ProjectDetails from "./ProjectDetails";
const ResumeForm = () => {
  const [page, setPage] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 798px)");

  const initialState = {
    profile: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      address: "",
      summary: "",
    },
    professional: {
      work: [],
    },
    education: [],
    certification: [],
    skillsSet: {
      Skills: "",
      title: "",
    },
    projects: {
      projectData: [],
    },
  };

  const [resumeInfo, setResumeInfo] = useState(initialState);

  const formPage = [
    "Profile Details",
    "Experience",
    "Projects",
    "Educational Details",
    "Skill Details",
  ];

  const renderForm = () => {
    switch (page) {
      case 0:
        return (
          <BasicDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 1:
        return (
          <ProfessionalDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 2:
        return (
          <ProjectDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 3:
        return (
          <EduacationDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 4:
        return (
          <SkillsSetDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      default:
        return;
    }
  };

  return (
    <Stack pt="50px">
      <Center
        style={{ display: page === 5 ? "none" : "flex" }}
        w="100%"
        px="12px"
        flexDir="column"
      ></Center>
      {isMobile ? (
        <HStack p={4} spacing={3} justify="center">
          <VStack
            justify="center"
            spacing={4}
            width="90%"
            style={{ display: page === 5 ? "none" : "block" }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="gray.900"
              color="white"
              boxShadow="xl"
              rounded="md"
            >
              <Center>
                <Heading mb={4}>{formPage[page]}</Heading>
              </Center>
              {renderForm()}
            </Box>
          </VStack>
          <VStack style={{ display: page === 5 ? "block" : "none" }}>
            <ResumeTemplate resumeInfo={resumeInfo} page={page} />
          </VStack>
        </HStack>
      ) : (
        <HStack
          p={4}
          spacing={3}
          align="stretch"
          justify="center"
          className="scrollable-container"
        >
          <VStack
            justify="center"
            spacing={4}
            width="50%"
            style={{ display: page === 5 ? "none" : "block" }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="gray.900"
              color="white"
              boxShadow="xl"
              rounded="md"
            >
              <Center>
                <Heading mb={4}>{formPage[page]}</Heading>
              </Center>
              {renderForm()}
            </Box>
          </VStack>
          <VStack 
            style={{ width: page === 5 ? "80%" : "50%" }} 
            bg="gray.900"
            borderRadius="lg"
            color="white"
            boxShadow="xl"
            rounded="md"
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="gray.900"
              color="white"
              boxShadow="xl"
              rounded="md"
            >
              <ResumeTemplate resumeInfo={resumeInfo} page={page} />
            </Box>
          </VStack>
        </HStack>
      )}
    </Stack>
  );
};

export default ResumeForm;
