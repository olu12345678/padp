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
                <PageHeader title="Help you need staying safe during the day" caption="Staying safe during the day" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need help or support to stay safe during the day?">
                    <p>You should tell us about:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                    </ul>
                    <p>We know this may vary, so let us know if this can change. For example if you need someone to:</p>
                    <ul>
                        <li>check-in on you every few days</li>
                        <li>support you during the day every day, even if you do not currently get this help</li>
                    </ul>
                    <Radios
                        name="safe-day"
                        id="safe-day"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support to keep me safe during the day',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support to keep me safe during the day',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>

                <Question id="field-fixed-20" label="Tell us about the help or support you need to help you stay safe during the day">
                    <p>This could be help from someone else, or using an aid, tool or adaptation. We know this may vary, so let us know if they can change. For example if you need help or support every day to keep you safe, or when your condition flares up</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/12-safe-day"
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
