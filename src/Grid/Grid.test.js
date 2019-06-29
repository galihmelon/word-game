import {render} from "@testing-library/react";
import {Grid} from "./Grid";
import React from "react";
import '../reactTestSetup'

describe('Grid', () => {
   it('should render a grid of letters', () => {
       const { getAllByTestId } = render(<Grid xDim={4} yDim={4} input={''}/>);
       expect(getAllByTestId('square').length).toEqual(16)
   });

    it('should render five selected letters given an input of length 5', () => {
        const { getAllByTestId } = render(<Grid xDim={4} yDim={4} input={'knife'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(5)
    });

    it('should should not select a letter if that letter is not next to the previous letter', () => {
        const { getAllByTestId } = render(<Grid xDim={4} yDim={4} input={'abcde'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(4)
    })
});