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
                <PageHeader title="What treatments or therapies do you get?" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>Tell us the name of each treatment how often it happens and how long it takes:</p>
            </Wrapper>
            <Wrapper>
                <Question id="field-default" label="Treatment name">
                    <Input name="field-default" id="field-default" />
                </Question>
                <Question id="field-default" label="Frequency">
                    <Input name="field-default" id="field-default" />
                </Question>
                <Question id="field-default" label="Duration">
                    <Input name="field-default" id="field-default" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./08-about-therapies"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./08a-about-therapies-summary"
                    >
                        Add
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
