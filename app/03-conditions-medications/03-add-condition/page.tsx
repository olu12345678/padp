/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Question from '@/components/Question';
import Input from '@/components/Input';
import Radios from '@/components/Radio';
import TextArea from '@/components/TextArea';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const [open, setOpen] = useState<number>(0);
    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="About your condition or symptoms" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="add-condition"
                        id="add-condition"
                        label="Do you know the name of your condition?"
                        hintText="If you do not know the name of your condition, we'll ask about symptoms you have and any test results you're waiting on"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(1);
                                },
                            },
                            {
                                label: 'No',
                                value: 'no',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(2);
                                },
                            },
                        ]}
                    />
                </form>
            </Wrapper>
            {open === 1 && (
                <Wrapper>
                    <Question id="field-default" label="What is the name of your condition?">
                        <Input name="field-default" id="field-default" />
                    </Question>
                    <Question id="field-default" label="How long have you had this condition?" hintText="For example, 3 years">
                        <Input name="field-default" id="field-default" />
                    </Question>
                </Wrapper>
            )}
            {open === 2 && (
                <Wrapper>
                    <Question id="field-fixed-20" label="What are your symptoms?">
                        <p>Tell us about:</p>
                        <ul>
                            <li>your symptoms</li>
                            <li>how you&apos;re affected by them</li>
                            <li>any test results you&apos;re waiting on</li>
                        </ul>
                        <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                    </Question>
                </Wrapper>
            )}

            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./02-about-conditions"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./02a-about-conditions-summary"
                    >
                        Add
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
