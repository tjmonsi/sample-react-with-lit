"use client";

import { SmallSnackbar as Element } from "@tjmonsi/small-snackbar";
import '@tjmonsi/small-snackbar/small-snackbar.js';
import React  from 'react';
import { createComponent } from '@lit/react';

export const SmallSnackbar = createComponent({
    tagName: 'small-snackbar',
    elementClass: Element,
    react: React,
    events: {
      onHide: 'hide'
    },
  });
