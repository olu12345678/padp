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
                <PageHeader title="We want to know if you need someone to help monitor a health condition" caption="Support taking medication, monitoring a condition and with therapy" />
            </Wrapper>
            <Wrapper>
                <p>Tell us about help you need to:</p>
                <ul>
                    <li>look out for changes in your health</li>
                    <li>deal with or manage any changes</li>
                </ul>
                <p>This could be either:</p>
                <ul>
                    <li>another person (or more than one person)</li>
                    <li>tools, aids or adaptations you use</li>
                </ul>
                <p>This includes:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only need sometimes</li>
                </ul>
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need someone or something to help you monitor a health condition?">
                    <Radios
                        name="health-condition"
                        id="health-condition"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need someone or something to help me monitor a health condition',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need someone or something to help me monitor a health condition',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="How does someone or something help you to monitor a health condition, and why do you need this help?">
                    <p>For example:</p>
                    <ul>
                        <li>taking your temperature checking your blood sugar levels</li>
                        <li>managing repeat prescriptions</li>
                        <li>something else</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="How often do you need this help?">
                    <p>We know this might vary so you do not have to be exact, just tell us roughly.</p>
                    <p>For example:</p>
                    <ul>
                        <li>I need someone&apos;s help every day</li>
                        <li>I need help about 4 days each week</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./01-help-medication"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./03-help-therapy"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
