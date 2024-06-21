import React from 'react';
import { createRoot } from 'react-dom/client';
import EcommerceApp from './components/EcommerceApp';
import "normalize.css/normalize.css";
import './styles/styles.scss'

// renders the output
createRoot(document.getElementById("root")).render(<EcommerceApp />);