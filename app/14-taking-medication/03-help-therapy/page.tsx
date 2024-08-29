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
                <PageHeader title="We want to know if you need someone to help you do therapy at home" caption="Support taking medication, monitoring a condition and with therapy" />
            </Wrapper>
            <Wrapper>
                <p>This is help with therapy or treatment that a health professional has told you to do at home. This includes help you only need sometimes.</p>
                <p>For example:</p>
                <ul>
                    <li>physiotherapy</li>
                    <li>dialysis</li>
                    <li>counselling or psychotherapy</li>
                    <li>something else</li>
                </ul>
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need someone to help you do therapy at home?">
                    <Radios
                        name="therapy-home"
                        id="therapy-home"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need someone to help me do therapy at home',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need someone to help me or I do not do therapy at home',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="How does someone help you do therapy at home, and why do you need this help?">
                    <p>This can be more than one person.</p>
                    <p>For example:</p>
                    <ul>
                        <li>I need someone to hold my legs up when I do my physiotherapy exercises</li>
                        <li>I need someone to set up the home dialysis equipment for me</li>
                        <li>I need someone to set up video calls with my counsellor or therapist</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="How long does someone spend helping you do therapy at home each week?" hintText="Select one">
                    <p>If you get help from more than one person, tell us the total time you get help for.</p>
                    <Radios
                        name="how-long"
                        id="how-long"
                        items={[
                            {
                                label: 'Less than 3.5 hours a week',
                                value: 'yes',
                            },
                            {
                                label: 'Between 3.5 and 7 hours a week',
                                value: 'no',
                            },
                            {
                                label: 'Between 7 and 14 hours a week',
                                value: 'yes',
                            },
                            {
                                label: 'More than 14 hours a week',
                                value: 'no',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>

            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./02-monitor-condition"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./04-check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
