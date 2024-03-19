import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdKeyboardArrowDown } from "react-icons/md";

const BookDemoQNA = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-[22px] font-bold text-center">
        Do you have any Question
      </h2>
      <div className="mt-3">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <b className="font-[500]">
              What is Inimble, and how does it benefit my organization ?
            </b>
          </AccordionSummary>
          <AccordionDetails>
            Inimble is a modern platform that boosts employee engagement by
            connecting teams, offering diverse learning resources, streamlining
            HR tasks, and supporting remote work effectively.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <b className="font-[500]">
              How does Inimble support remote work environments ?
            </b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">
              What learning resources does Inimble offer ?
            </b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">How secure is data on Inimble ?</b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">Can vendors collaborate with Inimble ?</b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">How does Inimble assist in hiring ?</b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">
              What support does Inimble offer for meetings ?
            </b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">
              Is Inimble scalable for different-sized organizations ?
            </b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <b className="font-[500]">How can I get started with Inimble ?</b>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default BookDemoQNA;
