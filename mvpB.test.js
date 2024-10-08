import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Sprint 7 Challenge Learner Tests', () => {
  
  // 👉 TASK 1 - Unit Testing of sum function
  describe('sum function', () => {
    it('throws an error when no arguments are passed', () => {
      expect(() => sum()).toThrow('pass valid numbers');
    });

    it('throws an error when second argument is a string', () => {
      expect(() => sum(2, 'seven')).toThrow('pass valid numbers');
    });

    it('returns 4 when called with 1 and 3', () => {
      expect(sum(1, 3)).toBe(4);
    });

    it('returns 3 when called with "1" and 2', () => {
      expect(sum('1', 2)).toBe(3);
    });

    it('returns 13 when called with "10" and "3"', () => {
      expect(sum('10', '3')).toBe(13);
    });
  });

  // 👉 TASK 2 - Integration Testing of HelloWorld component
  describe('<HelloWorld /> component', () => {
    beforeEach(() => {
      render(<HelloWorld />);
    });

    it('renders a link that reads "Home"', () => {
      expect(screen.queryByText('Home')).toBeInTheDocument();
    });

    it('renders a link that reads "About"', () => {
      expect(screen.queryByText('About')).toBeInTheDocument();
    });

    it('renders a link that reads "Blog"', () => {
      expect(screen.queryByText('Blog')).toBeInTheDocument();
    });

    it('renders a text that reads "The Truth"', () => {
      expect(screen.queryByText('The Truth')).toBeInTheDocument();
    });

    it('renders a text that reads "JavaScript is pretty awesome"', () => {
      expect(screen.queryByText('JavaScript is pretty awesome')).toBeInTheDocument();
    });

    it('renders a text that includes "javaScript is pretty"', () => {
      expect(screen.queryByText(/javaScript is pretty/i)).toBeInTheDocument();
    });
  });
});

function sum(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    throw new Error('pass valid numbers');
  }
  return a + b;
}

function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  );
}