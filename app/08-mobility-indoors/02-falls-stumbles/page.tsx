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
                <PageHeader title="Falls and stumbles when moving around indoors" caption="Moving around indoors" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you ever fall or stumble when moving around indoors?">
                    <Radios
                        name="fall-stumble"
                        id="fall-stumble"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always fall or stumble when moving around indoors',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never fall or stumble when moving around indoors',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Do you need help or support from someone or something to avoid falls or stumbles?">
                    <Radios
                        name="help"
                        id="help"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support from someone or something to avoid falls or stumbles',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support from someone or something to avoid falls or stumbles',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about the help or support you need from someone else to wash, shower or bathe yourself">
                    <p>We know this may vary, so let us know if this can change. For example, if you always have difficulty washing yourself without help from someone, or if you need someone to remind you to wash or bathe</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./01-help-moving-indoors"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./03-check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
