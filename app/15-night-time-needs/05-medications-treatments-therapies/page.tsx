/* eslint-disable max-len */

'use client';

import React from 'react';

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
const HelpYouNeedGettingInAndOutOfBed:React.FC = function HelpYouNeedGettingInAndOutOfBed() {
    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="Medication, treatments and therapies" caption="Night time care needs" />
            </Wrapper>
            <Wrapper>
                <p>This includes:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only need sometimes</li>
                    <li>help from a person, or using an aid, tool or adaptation</li>
                </ul>
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need help with medication, treatment or therapies at night?">
                    <p>This could include:</p>
                    <ul>
                        <li>needing prompted to take medication</li>
                        <li>having someone remind you to take medication</li>
                        <li>needing help with treatments at night</li>
                    </ul>
                    <Radios
                        name="medications-night"
                        id="medications-night"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help with medication, treatments and therapies at night',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help with medication, treatments and therapies at night',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="On average, how many nights a week do you need help with medication, treatments and therapies?">
                    <p>We know this can vary, so let us know if this can change. For example:</p>
                    <ul>
                        <li>4 nights a week</li>
                        <li>every night when my condition flares up, roughly 3 weeks out of 4</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about the help you need with medication, treatments and therapies at night">
                    <p>For example, having someone remind you to take medication at night, or using an aid, tool or adaptation to monitor a health condition during the night</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./04-managing-incontinence"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./06-staying-safe-night"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
