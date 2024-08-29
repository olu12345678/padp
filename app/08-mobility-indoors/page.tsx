/* eslint-disable max-len */

import type { Metadata } from 'next';
import Image from 'next/image';
import Pic1 from '@/public/images/mobility-01.jpg';
import Pic2 from '@/public/images/mobility-02.jpg';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Grid from '@/components/Grid';

export const metadata:Metadata = {
    title: 'About moving around indoors',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const GettingInAndOutOfBed:React.FC = function GettingInAndOutOfBed() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title={pageTitle} caption="Moving around indoors" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '20px' }}>
                <Grid columns={2}>
                    <Image
                        src={Pic1}
                        alt="Someone helping a man walk along the street"
                        height={300}
                    />
                    <Image
                        src={Pic2}
                        alt="A woman with a walking aid"
                        height={300}
                    />
                </Grid>
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about:</p>
                <ul>
                    <li>help or support you need moving around indoors during the day</li>
                    <li>help you need from someone else</li>
                    <li>any aids, adaptations or tools you use</li>
                </ul>
                <p>We will also ask about:</p>
                <ul>
                    <li>whether you ever fall or stumble moving about indoors</li>
                    <li>if you need help or support from someone to avoid falls or stumbles</li>
                    <li>help or support you need to feel confident when moving around indoors</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/08-mobility-indoors/01-help-moving-indoors"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;
