/* eslint-disable max-len */

import type { Metadata } from 'next';
import Image from 'next/image';
import Pic1 from '@/public/images/activities-01.png';
import Pic2 from '@/public/images/activities-02.png';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Grid from '@/components/Grid';

export const metadata:Metadata = {
    title: 'About your activities and interests',
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
                <PageHeader title={pageTitle} caption="Activities and interests" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '20px' }}>
                <Grid columns={2}>
                    <Image
                        src={Pic1}
                        alt="An older person knitting"
                        height={300}
                    />
                    <Image
                        src={Pic2}
                        alt="A person sitting under a tree next to a bike"
                        height={300}
                    />
                </Grid>
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about activities and interests.</p>
                <p>We&aps;ll ask how your activities and interests have changed since your care needs started.</p>
                <p>This includes whether you need extra help with:</p>
                <ul>
                    <li>activities indoors</li>
                    <li>activities outdoors</li>
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
                        href="/13-activities-interests/01-help-activities"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;
