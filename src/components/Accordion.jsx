import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [curOpen, setCurOpen] = useState(null);

  const handleToggleAccordion = (num) => {
    setCurOpen(num === curOpen ? null : num);
    setIsOpen(!isOpen);
  };

  const faqs = [
    {
      title: 'Where are these chairs assembled?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
    },
    {
      title: 'How long do I have to return my chair?',
      text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
    },
    {
      title: 'Do you ship to countries outside the EU?',
      text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
    },
  ];

  return (
    <div className="accordion">
      {faqs.map((q, i) => (
        <AccordionItem
          key={q.title}
          title={q.title}
          num={i}
          onClick={handleToggleAccordion}
          isOpen={isOpen}
          curOpen={curOpen}
        >
          {q.text}
        </AccordionItem>
      ))}
    </div>
  );
}
