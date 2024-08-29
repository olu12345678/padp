/* eslint-disable max-len */
import React from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Question from '@/components/Question';
import Input from '@/components/Input';

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
                <PageHeader title="What medication do you need and how do you take it?" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>You should also include any medications that you do not take regularly or only in emergencies.</p>
            </Wrapper>
            <Wrapper>
                <Question id="field-default" label="Name of medication?">
                    <Input name="field-default" id="field-default" />
                </Question>
                <Question id="field-default" label="Dosage">
                    <Input name="field-default" id="field-default" />
                </Question>
                <Question id="field-default" label="How often do you take it?">
                    <Input name="field-default" id="field-default" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./05-about-medications"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./05a-about-medications-summary"
                    >
                        Add
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
