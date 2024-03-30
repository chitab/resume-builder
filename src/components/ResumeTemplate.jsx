import { PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import ReactToPrint from "react-to-print";

const ResumeTemplate = (props) => {
  const { resumeInfo, page } = props;

  const ref = React.useRef(null);
  return (
    <>
      <Stack spacing={4} ref={ref} m={6} fontFamily="sans-serif">
        <Stack spacing={1}>
          <Center>
            <Heading as="h1">
              {resumeInfo.profile.firstname} {resumeInfo.profile.lastname}
            </Heading>
          </Center>
          <Center>
            <HStack
              justify="center"
              wrap="wrap"
              divider={<StackDivider borderColor="gray.500" />}
            >
              {resumeInfo.profile.email.length ? (
                <Link
                  href={resumeInfo.profile.email}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  {resumeInfo.profile.email}{" "}
                </Link>
              ) : null}
              {resumeInfo.profile.linkedin.length ? (
                <Link
                  href={resumeInfo.profile.linkedin}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Linkedin{" "}
                </Link>
              ) : null}
              {resumeInfo.profile.github.length ? (
                <Link
                  href={resumeInfo.profile.github}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Github{" "}
                </Link>
              ) : null}
              {resumeInfo.profile.website.length ? (
                <Link
                  href={resumeInfo.profile.website}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Portfolio{" "}
                </Link>
              ) : null}
            </HStack>
          </Center>
          <HStack
            justify="center"
            wrap="wrap"
            divider={<StackDivider borderColor="gray.500" />}
          >
            {resumeInfo.profile.phone.length > 0 && (
              <>
                <PhoneIcon /> {resumeInfo.profile.phone}{" "}
              </>
            )}
            <address>{resumeInfo.profile.address}</address>
          </HStack>
        </Stack>
        {resumeInfo.profile && resumeInfo.profile.summary.length > 0 && (
          <VStack spacing={2} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              SUMMARY
            </Heading>
            <Text>{resumeInfo.profile.summary}</Text>
          </VStack>
        )}
        {resumeInfo.professional.work.length ? (
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              WORK EXPERIENCE
            </Heading>
            {resumeInfo.professional.work.map((w, i) => {
              return (
                <VStack align="stretch" key={i}>
                  <HStack justify="space-between" align="baseline">
                    <VStack align="stretch">
                      <Heading as="h5" fontSize="lg">
                        {w.jobTitle}
                      </Heading>
                      <Heading as="h5" fontSize="md">
                        {w.company}
                      </Heading>
                    </VStack>
                    <Heading as="h6" fontSize="md">
                      {w.startDate} &#8212; {w.endDate}
                    </Heading>
                  </HStack>
                  <UnorderedList px="20px">
                    {w.jobDetails.split("\n").map((d, i) => {
                      return d.length ? <ListItem key={i}>{d}</ListItem> : null;
                    })}
                  </UnorderedList>
                </VStack>
              );
            })}
          </VStack>
        ) : null}
        {resumeInfo.projects.projectData.length ? (
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              PROJECTS
            </Heading>
            {resumeInfo.projects.projectData.map((w, i) => {
              return (
                <VStack align="stretch" key={i}>
                  <HStack justify="space-between" align="baseline">
                    <VStack align="stretch">
                      <Heading as="h5" fontSize="lg">
                        {w.title}
                      </Heading>
                    </VStack>
                  </HStack>
                  <UnorderedList px="20px">
                    {w.description.split("\n").map((d, i) => {
                      return d.length ? <ListItem key={i}>{d}</ListItem> : null;
                    })}
                  </UnorderedList>
                </VStack>
              );
            })}
          </VStack>
        ) : null}
        <VStack spacing={4} align="stretch">
          {resumeInfo.education.length > 0 && (
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              EDUCATION
            </Heading>
          )}
          {resumeInfo.education.map((e, i) => {
            return (
              <HStack justify="space-between" align="baseline" key={i}>
                <VStack align="stretch">
                  <Heading as="h5" fontSize="lg">
                    {e.course}
                  </Heading>
                  <Heading as="h5" fontSize="md">
                    {e.college}
                  </Heading>
                </VStack>
                <Heading as="h6" fontSize="md">
                  {e.startDate} &#8212; {e.endDate}
                </Heading>
              </HStack>
            );
          })}
        </VStack>
        {resumeInfo.certification.length ? (
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              CERTIFICATIONS
            </Heading>
            {resumeInfo.certification.map((c, i) => {
              return (
                <VStack align="stretch" key={i}>
                  <Heading as="h5" fontSize="lg">
                    {c.link}
                  </Heading>
                  <Text>{c.details}</Text>
                </VStack>
              );
            })}
          </VStack>
        ) : null}
        {resumeInfo.skillsSet && resumeInfo.skillsSet.title.length > 0 && (
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              SKILLS
            </Heading>
            <Heading as="h6" fontSize="md">
              {resumeInfo.skillsSet.title}
            </Heading>
            {/* <UnorderedList px="20px">
              {resumeInfo.skillsSet.Skills.split("\n").map((s, i) => (
                <ListItem key={i}>{s.trim()}</ListItem>
              ))}
            </UnorderedList> */}
          </VStack>
        )}
      </Stack>
      <HStack divider={<StackDivider />}>
        <Button
          w="max-content"
          colorScheme="blue"
          isDisabled={page !== 5}
          onClick={() => {
            window.location.reload();
          }}
        >
          Create
        </Button>
        <div>
          <ReactToPrint
            trigger={() => (
              <Button
                colorScheme="whatsapp"
                w="max-content"
                isDisabled={page !== 5}
              >
                Print
              </Button>
            )}
            content={() => ref.current}
          />
        </div>
      </HStack>
    </>
  );
};

export default ResumeTemplate;
