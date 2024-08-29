/* eslint-disable max-len */

'use client';

import React from 'react';
import Image from 'next/image';

import Help1 from '@/public/images/moving-help-06.jpg';

import Aid1 from '@/public/images/dressing-aid-01.jpg';
import Aid2 from '@/public/images/dressing-aid-02.jpg';
import Aid3 from '@/public/images/dressing-aid-03.jpg';
import Aid4 from '@/public/images/dressing-aid-04.jpg';
import Aid5 from '@/public/images/dressing-aid-05.jpg';
import Aid6 from '@/public/images/dressing-aid-06.jpg';
import Aid7 from '@/public/images/dressing-aid-07.jpg';

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
                <PageHeader title="Help or support dressing and undressing" caption="Dressing and undressing" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need help or support dressing and undressing?">
                    <p>This includes:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                        <li>help from a person, or using an aid, tool or adaptation</li>
                    </ul>
                    <Radios
                        name="dressing"
                        id="dressing"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support dressing and undressing',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support dressing and undressing',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Help or support from someone else</h2>
                <p>Examples of help from someone else</p>
                <div style={{ marginBottom: '40px' }}>
                    <Grid columns={3}>
                        <Image
                            src={Help1}
                            alt="An image of a bathroom"
                            height={300}
                        />
                        <Image
                            src={Help1}
                            alt="A man in bath using tool to wash back"
                            height={300}
                        />
                        <Image
                            src={Help1}
                            alt="A man in bath using tool to wash back"
                            height={300}
                        />
                    </Grid>
                </div>
                <Question id="field-fixed-20" label="Tell us about the help or support you need from someone else to dress and undress">
                    <p>This includes help or support you might need but do not already have.</p>
                    <p>For example, if you need someone to:</p>
                    <ul>
                        <li>physically help you dress or undress</li>
                        <li>help you choose suitable clothes</li>
                        <li>remind or encourage you to dress or undress</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Aids, adaptations and tools</h2>
                <p>Examples of help you might need include:</p>
                <div style={{ marginBottom: '20px' }}>
                    <Grid columns={4}>
                        <figure>
                            <Image
                                src={Aid1}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Grabber</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid2}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Sock puller</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid3}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Shoehorn</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid4}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Something else</figcaption>
                        </figure>
                    </Grid>
                </div>
                <p>Examples of adapted clothes include:</p>
                <div style={{ marginBottom: '20px' }}>
                    <Grid columns={3}>
                        <figure>
                            <Image
                                src={Aid5}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Spin-on or loose fitting clothes</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid6}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Velcro fastenings</figcaption>
                        </figure>
                        <figure>
                            <Image
                                src={Aid7}
                                alt="An image of a bathroom"
                                height={300}
                            />
                            <figcaption>Something else</figcaption>
                        </figure>
                    </Grid>
                </div>
                <Question id="field-fixed-20" label="Tell us about any aids, adaptations or tools you use to dress and undress">
                    <p>For example, if you need to use adapted clothes, or if you need to use a sock puller whenever your condition flares up.</p>
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
