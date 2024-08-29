/* eslint-disable max-len */

'use client';

import React from 'react';
import Image from 'next/image';

import Help1 from '@/public/images/toilet-help-01.jpg';
import Help2 from '@/public/images/toilet-help-02.jpg';
import Help3 from '@/public/images/toilet-help-03.jpg';

import Aid1 from '@/public/images/toilet-aid-01.jpg';
import Aid2 from '@/public/images/toilet-aid-02.jpg';
import Aid3 from '@/public/images/toilet-aid-03.jpg';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import Question from '@/components/Question';
import TextArea from '@/components/TextArea';
import SectionHeader from '@/components/SectionHeader';
import Grid from '@/components/Grid';

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
                <PageHeader title="Help or support with using the toilet or managing incontinence" caption="Toilet needs and managing incontinence" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <p>Using the toilet includes:</p>
                <ul>
                    <li>getting on and off a standard toilet (this means one that has not been specially adapted for you to use)</li>
                    <li>urinating (peeing) or pooing (this includes using a catheter or a stoma bag)</li>
                </ul>
                <p>Incontinence is:</p>
                <ul>
                    <li>an urge to urinate or poo that you cannot control</li>
                    <li>urinating or pooing without realising you needed the toilet</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Do you need help or support with using the toilet or managing incontinence?">
                    <p>This includes:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                        <li>help from a person, or using an aid, tool or adaptation</li>
                    </ul>
                    <Radios
                        name="help"
                        id="help"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support with using the toilet or managing incontinence',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support with using the toilet or managing incontinence',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Help or support from someone else</h2>
                <p>Example of help from a persion</p>
                <div style={{ marginBottom: '5px' }}>
                    <Grid columns={3}>
                        <figure>
                            <Image
                                src={Help1}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Someone to help you get on and off the toilet</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Help2}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Someone to help you clean yourself</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Help3}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Something else</figcaption>
                        </figure>
                    </Grid>
                </div>
                <Question id="field-fixed-20" label="Tell us about the help or support you need from someone else to use the toilet or manage incontinence">
                    <p>We know this may vary, so let us know if this can change. For example, tell us if you always have difficulty cleaning yourself after, or if you sometimes need encouragement from someone else to go to the toilet</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Aids, adaptations and tools</h2>
                <p>Example of aids and adaptations</p>
                <div style={{ marginBottom: '5px' }}>
                    <Grid columns={3}>
                        <figure>
                            <Image
                                src={Aid1}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Incontinence pads</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid2}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Raised toilet seat </figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid3}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Stoma bag or catheter</figcaption>
                        </figure>
                    </Grid>
                </div>
                <Question id="field-fixed-20" label="Tell us about any aids, adaptations or tools you use to use the toilet or manage incontinence">
                    <p>We know this may vary, so let us know if this can change. For example, tell us if you always need to use a stoma bag or catheter, or if you need someone to help you use the toilet when your condition flares up</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/06-washing-bathing"
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
