# React Modal Component Package

A simple and reusable modal component for React applications.

## Installation

Install the package using npm:

```bash
npm install react-modal-component-package
```

## Usage

### Basic Example

```jsx
import React, { useState } from 'react';
import Modal from 'react-modal-component-package';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is a simple modal component.</p>
        {/* The "Close" button is already provided by the Modal component */}
      </Modal>
    </div>
  );
}

export default App;
```

### Explanation 

- The Modal component automatically includes a "Close" button.
- You only need to provide the children content for the modal and the onClose callback to close it.
- Do not add another "Close" button inside the Modal because it is already built-in.

## Props

### Modal Component

| Prop     | Type       | Description                                     | Required |
|----------|------------|-------------------------------------------------|----------|
| isOpen   | `boolean`  | Controls the visibility of the modal            | Yes      |
| onClose  | `function` | Callback function to close the modal            | Yes      |
| children | `ReactNode`| Content to be displayed inside the modal        | No       |

## Styling

The modal comes with default styles, but you can easily customize them by:
- Overriding inline styles

## Features

- Simple and lightweight
- Fully customizable
- Responsive design
- Easy to integrate