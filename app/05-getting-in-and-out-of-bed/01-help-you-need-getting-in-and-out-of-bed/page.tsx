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
                <PageHeader title="Help you need getting in and out of bed" caption="Getting in and out of bed" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <p>You should think about:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only need sometimes</li>
                    <li>help from a person, or using an aid, tool or adaptation</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Do you have difficulty getting in and out of bed?">
                    <p>This could be:</p>
                    <ul>
                        <li>physical difficulty</li>
                        <li>needing encouragement or motivation from someone else</li>
                        <li>needing to use an aid, tool or adaptation</li>
                        <li>taking a long time to get in or out of bed</li>
                    </ul>
                    <Radios
                        name="difficulty"
                        id="difficulty"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always have difficulty get in and out of bed',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never have difficulty get in and out of bed',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Do you ever use any aids, tools or adaptations to get in or out of bed?">
                    <p>Examples of aids and adaptations:</p>
                    <ul>
                        <li>stick</li>
                        <li>frame</li>
                        <li>handrail</li>
                        <li>hoist</li>
                        <li>changes to your bedroom</li>
                        <li>leaning on furniture</li>
                    </ul>
                    <Radios
                        name="aids"
                        id="aids"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always use an aid, tool or adatation to get in and out of bed',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never use an aid, tool or adatation to get in and out of bed',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about help and support you need getting in or out of bed">
                    <p>You should also tell us:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                        <li>help from a person, or using an aid, tool or adaptation</li>
                    </ul>
                    <p>We know this might vary, so let us know if this can change. For example, if your condition flares up every few weeks, or if you sometimes stay in bed all day.</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/05-getting-in-and-out-of-bed"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./02-check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
