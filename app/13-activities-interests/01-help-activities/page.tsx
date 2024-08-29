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
                <PageHeader title="Help with activities and interests" caption="Activities and interests" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Since your care needs started, do you need extra help or support from someone with activities and interests at home?">
                    <p>For example:</p>
                    <ul>
                        <li>reading</li>
                        <li>watching TV</li>
                        <li>doing puzzles</li>
                    </ul>
                    <Radios
                        name="acivities"
                        id="acivities"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support with activities and interest at home',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support with activities and interest at home',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Since your care needs started, do you need extra help or support from someone with activities and interests outside?">
                    <p>For example:</p>
                    <ul>
                        <li>visiting family</li>
                        <li>gardening</li>
                        <li>going for a walk</li>
                        <li>sports</li>
                        <li>clubs and groups</li>
                        <li>social or religious activities</li>
                    </ul>
                    <Radios
                        name="extra-support"
                        id="extra-support"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support with activities and interest outside',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support with activities and interest outside',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>

                <Question id="field-fixed-20" label="Tell us how your activities and interests have changed since your care needs started">
                    <p>If you do not take part in any activities or interests, you can tell us about any you would take part in if the right support was available.</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/13-activities-interests"
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
