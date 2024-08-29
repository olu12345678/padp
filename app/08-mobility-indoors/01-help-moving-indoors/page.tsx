/* eslint-disable max-len */

'use client';

import React from 'react';
import Image from 'next/image';

import Help1 from '@/public/images/moving-help-01.jpg';
import Help2 from '@/public/images/moving-help-02.jpg';
import Help3 from '@/public/images/moving-help-03.jpg';
import Help4 from '@/public/images/moving-help-04.jpg';
import Help5 from '@/public/images/moving-help-05.jpg';
import Help6 from '@/public/images/moving-help-06.jpg';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Question from '@/components/Question';
import TextArea from '@/components/TextArea';
import SectionHeader from '@/components/SectionHeader';
import Checkboxes from '@/components/Checkbox';
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
                <PageHeader title="Help you need moving around indoors" caption="Moving around indoors" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <p>This includes:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only need sometimes</li>
                </ul>
                <p>Examples of help you might need include:</p>
                <Grid columns={3}>
                    <figure>
                        <Image
                            src={Help1}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <figcaption>Walking stick</figcaption>
                    </figure>
                    <figure>
                        <Image
                            src={Help2}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <figcaption>Walking frame, such as a zimmer frame</figcaption>
                    </figure>
                    <figure>
                        <Image
                            src={Help3}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <figcaption>Crutches</figcaption>
                    </figure>
                    <figure>
                        <Image
                            src={Help4}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <figcaption>Holding on to someone&apos;s arm</figcaption>
                    </figure>
                    <figure>
                        <Image
                            src={Help5}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <figcaption>Holding on to a grab rail or furniture </figcaption>
                    </figure>
                    <figure>
                        <Image
                            src={Help6}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <figcaption>Something else</figcaption>
                    </figure>
                </Grid>
            </Wrapper>
            <Wrapper>
                <Checkboxes
                    name="indoor-checkboxes"
                    id="indoor-checkboxes"
                    label="What help or support do you need moving around indoors during the day?"
                    hintText="Select all that apply"
                    items={[
                        {
                            label: 'Going up or down stairs',
                            value: 'up-down-stairs',
                        },
                        {
                            label: 'Getting to particular parts of your home',
                            value: 'parts-home',
                        },
                        {
                            label: 'Moving around safely',
                            value: 'moving-safely',
                        },
                        {
                            label: 'Getting in and out of a chair or wheelchair',
                            value: 'wheelchair',
                        },
                        {
                            label: 'Sitting in a chair',
                            value: 'chair',
                        },
                        {
                            label: 'Needing someone to encourage, prompt or watch over you',
                            value: 'someone',
                        },
                        {
                            label: 'Other help or support',
                            value: 'other',
                        },
                        {
                            label: 'I don\'t need any support moving around indoors during the day',
                            value: 'dont-need',
                            exclusive: true,
                        },
                    ]}
                />
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about what you need help or support with and any aids, tools or adaptions you use">
                    <p>We know this might vary, so let us know if this can change. For example, if you need help every day, or if you need help when your condition flares up every few weeks.</p>
                    <p>You should also tell us if the help or support needed is not described in the list above.</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/08-mobility-indoors"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./02-falls-stumbles"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
