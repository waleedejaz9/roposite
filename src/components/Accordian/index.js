import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import "./style.scss";
const RopoAccordian = ({ title, description }) => {
  return (
    <>
      <Accordion>
        <AccordionItem className="accordianBackground">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton className="accordianButton accordianBackground">
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box
                    flex="1"
                    textAlign="left"
                    textColor="primary"
                    paddingLeft="2"
                    fontWeight="bold"
                  >
                    {title}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{description}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default RopoAccordian;
