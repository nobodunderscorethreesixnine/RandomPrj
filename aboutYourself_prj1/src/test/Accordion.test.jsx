import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import Accordion from "../components/Accordion";

const mockData = [
	{
		title: "item1",
		description: "content 1",
	},
	{
		title: "item2",
		description: "content 2",
	},
];

describe("Accordion Component", () => {
	it("renders accordion titles", () => {
		render(<Accordion accordionItems={mockData} />);
		expect(screen.getByText("item1")).toBeInTheDocument();
		expect(screen.getByText("item2")).toBeInTheDocument();
	});

	it("by default hide accordion content", () => {
		render(<Accordion accordionItems={mockData} />);
		const content1 = screen.getByText("content 1").parentElement;
		const content2 = screen.getByText("content 2").parentElement;
		expect(content1).toHaveAttribute("hidden");
		expect(content2).toHaveAttribute("hidden");
	});

	it("render accordion content on button click", async () => {
		const user = userEvent.setup();
		render(<Accordion accordionItems={mockData} />);
		const button = screen.getAllByRole("button")[0];
		await user.click(button);

		const content1 = screen.getByText("content 1").parentElement;
    expect(content1).not.toHaveAttribute('hidden')
		expect(button).toHaveAttribute("aria-expanded", "true");
	});

  it('clicking again hides content',async ()=> {
    const user = userEvent.setup()
    render(<Accordion accordionItems={mockData}/>)
    const button = screen.getAllByRole('button')[0]

    await user.click(button)
    await user.click(button)
    
    const content1 = screen.getByText('content 1').parentElement
    expect(content1).toHaveAttribute('hidden')
  })

  it('one accordion content is visible at a time',async ()=>{
    const user = userEvent.setup()
    render(<Accordion accordionItems={mockData}/>)
    const button1 = screen.getAllByRole('button')[0]
    const button2 = screen.getAllByRole('button')[1]

    await user.click(button1)
    await user.click(button2)

    const content1 = screen.getByText('content 1').parentElement
    const content2 = screen.getByText('content 2').parentElement

    expect(content1).toHaveAttribute('hidden')
    expect(content2).not.toHaveAttribute('hidden')

    expect(button1).toHaveAttribute('aria-expanded','false')
    expect(button2).toHaveAttribute('aria-expanded','true')
  })
});
