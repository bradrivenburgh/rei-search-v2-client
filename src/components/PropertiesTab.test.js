import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import TestWrapper from './TestWrapper';
import PropertiesTab from './PropertiesTab';

afterAll(() => jest.cleanup)

describe("PropertiesTab", () => {
  test("renders to the DOM", () => {
    render(
      <TestWrapper>
        <PropertiesTab />
      </TestWrapper>
    );
  });
    
  test('contains an "Properties" heading', () => {
    render(
      <TestWrapper>
        <PropertiesTab />
      </TestWrapper>
    );
    expect(screen.getByRole("heading", { name: /properties/i })).toBeInTheDocument();
  });

  test('pressing Add/Remove button toggles aria-pressed value', () => {
    render(
      <TestWrapper>
        <PropertiesTab />
      </TestWrapper>
    );

      const unpressedBtnsBefore = screen.getAllByRole("button", { pressed: false });
      fireEvent.click(unpressedBtnsBefore[0]);
      const unpressedBtnsAfter = screen.getAllByRole("button", { pressed: false });
      expect(unpressedBtnsAfter.length).toBeLessThan(unpressedBtnsBefore.length);
      screen.debug()
  });

});