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
                <PageHeader title="Staying safe during the night" caption="Night time care needs" />
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
                <Question id="field-fixed-20" label="Do you need help staying safe during the night?">
                    <p>For example:</p>
                    <ul>
                        <li>you sometimes get confused</li>
                        <li>you have dizzy spells or blackouts</li>
                        <li>you need support with your mental health</li>
                        <li>you have someone come round to check on you</li>
                        <li>someone comes to help you with taking medication at night</li>
                        <li>you sometimes trip or fall at night and need help getting back up</li>
                    </ul>
                    <Radios
                        name="safe-night"
                        id="safe-night"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help staying safe during the night',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need need help staying safe during the night',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="On average, how many nights a week do you need help staying safe during the night?">
                    <p>We know this can vary, so let us know if this can change. For example:</p>
                    <ul>
                        <li>4 nights a week</li>
                        <li>every night, when my condition flares up every few weeks</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about the help you need from someone to stay safe during the night">
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./05-medications-treatments-therapies"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./07-other-care-needs"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
