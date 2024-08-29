/* eslint-disable max-len */

'use client';

import React from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="About your treatments or therapies" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>Tell us about any treatment or therapies you take.</p>
                <p>We&apos;ll ask about:</p>
                <ul>
                    <li>the name of the treatment or therapy</li>
                    <li>how frequently you do it</li>
                    <li>how long it takes</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_right"
                        iconSide="right"
                        href="./09-add-therapies"
                    >
                        Add treatment or therapies
                    </Button>
                </ButtonGroup>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./07-therapies"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="#"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
