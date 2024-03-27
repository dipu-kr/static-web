import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdKeyboardArrowDown } from "react-icons/md";

const BookDemoQNA = () => {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const dataList = [
    {
      id: 1,
      question: "What is Inimble, and how does it benefit my organization ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 2,
      question: "How does Inimble support remote work environments ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 3,
      question: "What learning resources does Inimble offer ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 4,
      question: "How secure is data on Inimble ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 5,
      question: "Can vendors collaborate with Inimble ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 6,
      question: "How does Inimble assist in hiring ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 7,
      question: " What support does Inimble offer for meetings ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 8,
      question: "Is Inimble scalable for different-sized organizations ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
    {
      id: 9,
      question: "How can I get started with Inimble ?",
      answer:
        "Inimble is a modern platform that boosts employee engagement by connecting teams, offering diverse learning resources, streamlining HR tasks, and supporting remote work effectively.",
    },
  ];
  return (
    <div className="w-full flex flex-col border xl:border-none rounded-[14px] py-6 xl:py-0 px-2 xl:px-0">
      <h2 className="text-[24px] lg:text-[30px] font-[700] leading-[30px] lg:leading-[46px] text-[#1F1F1F] text-center">
        Do you have any Question
      </h2>
      <div className="mt-3">
        {dataList?.map((val) => (
          <Accordion
            key={val?.id}
            expanded={expanded === val?.id}
            onChange={handleChange(val?.id)}
            style={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<MdKeyboardArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <b className="text-[14px] lg:text-[18px] font-[500] leading-[22px]">
                {val?.question}
              </b>
            </AccordionSummary>
            <AccordionDetails className="text-[12px] lg:text-[15px] font-[400] text-[#000000]">
              {val?.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default BookDemoQNA;
