/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import type { EventName } from '@stencil/react-output-target/runtime';
import { createComponent, createComponentForServerSideRendering } from '@stencil/react-output-target/runtime';
import { type CheckboxChangeEventDetail, type InputChangeEventDetail, type MyCheckboxCustomEvent, type MyInputCustomEvent, type MyPopoverCustomEvent, type MyRadioGroupCustomEvent, type MyRangeCustomEvent, type OverlayEventDetail, type RadioGroupChangeEventDetail, type RangeChangeEventDetail } from "component-library";
import { MyButton as MyButtonElement, defineCustomElement as defineMyButton } from "component-library/components/my-button.js";
import { MyCheckbox as MyCheckboxElement, defineCustomElement as defineMyCheckbox } from "component-library/components/my-checkbox.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "component-library/components/my-component.js";
import { MyInput as MyInputElement, defineCustomElement as defineMyInput } from "component-library/components/my-input.js";
import { MyPopover as MyPopoverElement, defineCustomElement as defineMyPopover } from "component-library/components/my-popover.js";
import { MyRadioGroup as MyRadioGroupElement, defineCustomElement as defineMyRadioGroup } from "component-library/components/my-radio-group.js";
import { MyRadio as MyRadioElement, defineCustomElement as defineMyRadio } from "component-library/components/my-radio.js";
import { MyRange as MyRangeElement, defineCustomElement as defineMyRange } from "component-library/components/my-range.js";
import { renderToString } from "component-library/hydrate";
import React from 'react';

type MyButtonEvents = {
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>
};

export const MyButton = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyButtonElement, MyButtonEvents>({
        tagName: 'my-button',
        elementClass: MyButtonElement,
        react: React,
        events: {
            onMyFocus: 'myFocus',
            onMyBlur: 'myBlur'
        } as MyButtonEvents,
        defineCustomElement: defineMyButton
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyButtonElement, MyButtonEvents>({
        tagName: 'my-button',
        renderToString,
    });

type MyCheckboxEvents = {
    onMyChange: EventName<MyCheckboxCustomEvent<CheckboxChangeEventDetail>>,
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>
};

export const MyCheckbox = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyCheckboxElement, MyCheckboxEvents>({
        tagName: 'my-checkbox',
        elementClass: MyCheckboxElement,
        react: React,
        events: {
            onMyChange: 'myChange',
            onMyFocus: 'myFocus',
            onMyBlur: 'myBlur'
        } as MyCheckboxEvents,
        defineCustomElement: defineMyCheckbox
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyCheckboxElement, MyCheckboxEvents>({
        tagName: 'my-checkbox',
        renderToString,
    });

type MyComponentEvents = { onMyCustomEvent: EventName<CustomEvent<number>> };

export const MyComponent = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyComponentElement, MyComponentEvents>({
        tagName: 'my-component',
        elementClass: MyComponentElement,
        react: React,
        events: { onMyCustomEvent: 'myCustomEvent' } as MyComponentEvents,
        defineCustomElement: defineMyComponent
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyComponentElement, MyComponentEvents>({
        tagName: 'my-component',
        renderToString,
    });

type MyInputEvents = {
    onMyInput: EventName<MyInputCustomEvent<KeyboardEvent>>,
    onMyChange: EventName<MyInputCustomEvent<InputChangeEventDetail>>,
    onMyBlur: EventName<CustomEvent<void>>,
    onMyFocus: EventName<CustomEvent<void>>
};

export const MyInput = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyInputElement, MyInputEvents>({
        tagName: 'my-input',
        elementClass: MyInputElement,
        react: React,
        events: {
            onMyInput: 'myInput',
            onMyChange: 'myChange',
            onMyBlur: 'myBlur',
            onMyFocus: 'myFocus'
        } as MyInputEvents,
        defineCustomElement: defineMyInput
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyInputElement, MyInputEvents>({
        tagName: 'my-input',
        renderToString,
    });

type MyPopoverEvents = {
    onMyPopoverDidPresent: EventName<CustomEvent<void>>,
    onMyPopoverWillPresent: EventName<CustomEvent<void>>,
    onMyPopoverWillDismiss: EventName<MyPopoverCustomEvent<OverlayEventDetail>>,
    onMyPopoverDidDismiss: EventName<MyPopoverCustomEvent<OverlayEventDetail>>
};

export const MyPopover = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyPopoverElement, MyPopoverEvents>({
        tagName: 'my-popover',
        elementClass: MyPopoverElement,
        react: React,
        events: {
            onMyPopoverDidPresent: 'myPopoverDidPresent',
            onMyPopoverWillPresent: 'myPopoverWillPresent',
            onMyPopoverWillDismiss: 'myPopoverWillDismiss',
            onMyPopoverDidDismiss: 'myPopoverDidDismiss'
        } as MyPopoverEvents,
        defineCustomElement: defineMyPopover
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyPopoverElement, MyPopoverEvents>({
        tagName: 'my-popover',
        renderToString,
    });

type MyRadioEvents = {
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>,
    onMySelect: EventName<CustomEvent<void>>
};

export const MyRadio = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyRadioElement, MyRadioEvents>({
        tagName: 'my-radio',
        elementClass: MyRadioElement,
        react: React,
        events: {
            onMyFocus: 'myFocus',
            onMyBlur: 'myBlur',
            onMySelect: 'mySelect'
        } as MyRadioEvents,
        defineCustomElement: defineMyRadio
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyRadioElement, MyRadioEvents>({
        tagName: 'my-radio',
        renderToString,
    });

type MyRadioGroupEvents = { onMyChange: EventName<MyRadioGroupCustomEvent<RadioGroupChangeEventDetail>> };

export const MyRadioGroup = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyRadioGroupElement, MyRadioGroupEvents>({
        tagName: 'my-radio-group',
        elementClass: MyRadioGroupElement,
        react: React,
        events: { onMyChange: 'myChange' } as MyRadioGroupEvents,
        defineCustomElement: defineMyRadioGroup
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyRadioGroupElement, MyRadioGroupEvents>({
        tagName: 'my-radio-group',
        renderToString,
    });

type MyRangeEvents = {
    onMyChange: EventName<MyRangeCustomEvent<RangeChangeEventDetail>>,
    onMyFocus: EventName<CustomEvent<void>>,
    onMyBlur: EventName<CustomEvent<void>>
};

export const MyRange = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<MyRangeElement, MyRangeEvents>({
        tagName: 'my-range',
        elementClass: MyRangeElement,
        react: React,
        events: {
            onMyChange: 'myChange',
            onMyFocus: 'myFocus',
            onMyBlur: 'myBlur'
        } as MyRangeEvents,
        defineCustomElement: defineMyRange
    })
    : /*@__PURE__*/ createComponentForServerSideRendering<MyRangeElement, MyRangeEvents>({
        tagName: 'my-range',
        renderToString,
    });
