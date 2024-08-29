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
                <PageHeader title="Managing Incontinence" caption="Night time care needs" />
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
                <Question id="field-fixed-20" label="Do you need help managing incontinence at night?">
                    <p>This could include:</p>
                    <ul>
                        <li>getting changed</li>
                        <li>needing prompted or reminded to go to the toilet</li>
                    </ul>
                    <Radios
                        name="incontinence-night"
                        id="incontinence-night"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help with managing incontinence at night',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help with managing incontinence at night',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="On average, how many nights a week do you need help managing incontinence?">
                    <p>We know this can vary, so let us know if this can change. For example:</p>
                    <ul>
                        <li>4 nights a week</li>
                        <li>every night, when my condition flares up every few weeks</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about the help you need managing incontinence at night">
                    <p>For example, if you need help emptying a stoma bag, or you need help cleaning up after</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./03-getting-to-toilet"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./05-medications-treatments-therapies"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
