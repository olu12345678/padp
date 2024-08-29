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
                <PageHeader title="Treatments and therapies" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>In this section we&apos;ll ask about any treatments and therapies you get.</p>
                <p>This could include:</p>
                <ul>
                    <li>medical treatments</li>
                    <li>counselling</li>
                    <li>activities to improve wellbeing like art therapy and working with animals</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="therapies"
                        id="therapies"
                        label="Do you take any treatments or therapies?"
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
                        href={open ? './08-about-therapies' : './10-check-your-answers'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
