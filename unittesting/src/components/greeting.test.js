import Greeting from "./greeting";
import { render, screen } from "@testing-library/react";

describe('Greenting component test',()=>{ //testsuite
    test('check "Hello react"',()=>{ //testcas
        render(<Greeting/>);
        const text = screen.getByText("Hello React",{exact:false});
        expect(text).toBeInTheDocument();
    });
})
