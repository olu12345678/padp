/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import SectionHeader from '@/components/SectionHeader';

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
                <PageHeader title="Tell us about any medication you take" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>In this section we&apos;ll ask about any medication you take.</p>
                <p>This includes how often you take it and any medication that you do not take regularly or only need in emergencies. </p>
                <p>Things that could help you complete this section include:</p>
                <ul>
                    <li>medication packaging </li>
                    <li>a recent perscription</li>
                    <li>letters from a doctor or medical professional</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="medication"
                        id="medication"
                        label="Do you take any medication?"
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
                        href={open ? './05-about-medications' : './07-therapies'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
