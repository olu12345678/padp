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
                <PageHeader title="Planned medical treatment" caption="Planned medical treatment" />
            </Wrapper>
            <Wrapper>
                <p>It&apos;s helpful for us to know about medical treatment for any condition or disability that means you need help or support.</p>
                <p>You should also tell us about:</p>
                <ul>
                    <li>regular treatments you receive</li>
                    <li>any follow-up care you have planned</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="waiting-list"
                        id="waiting-list"
                        label="Are you on a waiting list for surgery or medical treatment?"
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
                        href="/01-care-needs"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href={open ? '/02-planned-medical-treatment/about-surgery-treatment' : '/02-planned-medical-treatment/check-your-answers'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
