import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdKeyboardArrowDown } from "react-icons/md";

const BookDemoQNA = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-[30px] font-[700] leading-[46px] text-[#1F1F1F] text-center">
        Do you have any Question
      </h2>
      <div className="mt-3">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <b className="text-[18px] font-[500] leading-[22px]">
              What is Inimble, and how does it benefit my organization ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              How does Inimble support remote work environments ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              What learning resources does Inimble offer ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              How secure is data on Inimble ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              Can vendors collaborate with Inimble ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              How does Inimble assist in hiring ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              What support does Inimble offer for meetings ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              Is Inimble scalable for different-sized organizations ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
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
            <b className="text-[18px] font-[500] leading-[22px]">
              How can I get started with Inimble ?
            </b>
          </AccordionSummary>
          <AccordionDetails className="text-[15px] font-[400] text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default BookDemoQNA;
