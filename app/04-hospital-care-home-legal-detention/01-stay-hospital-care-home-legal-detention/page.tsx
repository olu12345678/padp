/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import Question from '@/components/Question';
import TextArea from '@/components/TextArea';
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
                <PageHeader title="Stays in a hospital, care home or legal detention" caption="Current stays in a hospital, care home or legal detention" />
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="accomodation"
                        id="accomodation"
                        label="At the moment, are you staying in any of the following:"
                        items={[
                            {
                                label: 'hospital or hospice',
                                value: 'hospital or hospice',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(true);
                                },
                            },
                            {
                                label: 'care home',
                                value: 'care home',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(true);
                                },
                            },
                            {
                                label: 'legal detention',
                                value: 'legal detention',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(true);
                                },
                            },
                            {
                                label: 'none of the above',
                                value: 'none of the above',
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
            {open && (
                <Wrapper>
                    <Question id="field-fixed-20" label="Tell us about your stay">
                        <p>You should include:</p>
                        <ul>
                            <li>when your stay started</li>
                            <li>how long you&apos;ll be there, if you know</li>
                            <li>if you&apos;ve moved during your stay, for example from a care home to a hospital</li>
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
                        href="/04-hospital-care-home-legal-detention"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href={open ? './02-how-care-is-paid-for' : './03-check-your-answers'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
