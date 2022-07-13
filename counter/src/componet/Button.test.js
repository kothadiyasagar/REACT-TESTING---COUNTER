import { fireEvent, render, screen } from "@testing-library/react";
// import App from "../../../testing/src/App";
import App from "../App";
import {Button , ButtonRedus} from "./Button";
import renderer from "react-test-renderer"
import userEvent from "@testing-library/user-event"

describe("Button Testing", function () { 
    it.only("COUTER ADD 5 &&SUB 5",function(){
        render(<App></App>);
        let h3 = screen.getByText(0);
       //  expect(h3).toBeInTheDocument()
 
   
        let themeButton = screen.getByText("ADD+5")
   
       //   let
        userEvent.click(themeButton)
        // expect(h3).toHaveTextContent("Theme is dark")
        expect(h3).toHaveTextContent(5)

        let Button = screen.getByText("REDUCE-5")
        userEvent.click(Button)
        expect(h3).toHaveTextContent(0)


      })

      it.only("should call given  ADD function ",function(){
        const mockfn = jest.fn()
        render(<Button onClick={mockfn}>Change</Button>)
        const btn = screen.getByText("Change")
        fireEvent.click(btn)
    
        expect(mockfn).toBeCalledTimes(1)
      })

      it.only("should call given  REDUS function ",function(){
        const mockfn = jest.fn()
        render(<ButtonRedus onClick={mockfn}>Change</ButtonRedus>)
        const btn = screen.getByText("Change")
        fireEvent.click(btn);
        expect(mockfn).toBeCalledTimes(1)
      })
})