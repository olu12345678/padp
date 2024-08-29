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
                <PageHeader title="About your medication" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>If you have a recent prescription list showing your medication, you can either upload it online or post it to us.</p>
                <p>You can enter details of medications below if:</p>
                <ul>
                    <li>you do not have a prescription list</li>
                    <li>you need to add any medications that are not on your prescription list</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_right"
                        iconSide="right"
                        href="./06-add-medication"
                    >
                        Add medications
                    </Button>
                </ButtonGroup>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./04-medications"
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
