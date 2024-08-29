/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import SectionHeader from '@/components/SectionHeader';
import Details from '@/components/Details';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="Tell us about your conditions and symptoms" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>If you know the name of your condition or conditions you can enter them below.</p>
                <Details label="Examples of conditions you might want to add">
                    <ul>
                        <li>arthritis</li>
                        <li>dementia</li>
                        <li>heart disease</li>
                        <li>respiratory disorders and diseases</li>
                        <li>anxiety</li>
                        <li>depression</li>
                        <li>stroke</li>
                        <li>cancer</li>
                        <li>something else</li>
                    </ul>
                </Details>
                <p>If you do not know the name of your condition or are waiting for a diagnosis, you can tell us about:</p>
                <ul>
                    <li>your symptoms</li>
                    <li>any test results you&apos;re waiting for</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="conditions"
                        id="conditions"
                        label="Do you have any conditions or symptoms?"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(true);
                                },
                            },
                            {
                                label: 'No',
                                value: 'no',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(false);
                                },
                            },
                        ]}
                    />
                </form>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href={open ? './02-about-conditions' : './04-medications'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
