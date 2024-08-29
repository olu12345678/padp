/* eslint-disable max-len */

import type { Metadata } from 'next';
import Image from 'next/image';
import Pic1 from '@/public/images/night-01.png';
import Pic2 from '@/public/images/night-02.png';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Grid from '@/components/Grid';

export const metadata:Metadata = {
    title: 'About your care needs during the night',
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
                <PageHeader title={pageTitle} caption="Night time care needs" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '20px' }}>
                <Grid columns={2}>
                    <Image
                        src={Pic1}
                        alt="A man holding his head sitting on the edge of a bed"
                        height={300}
                    />
                    <Image
                        src={Pic2}
                        alt="Person leaving their bedroom during the night"
                        height={300}
                    />
                </Grid>
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about help you need at night.</p>
                <p>We&apos;ll ask about</p>
                <ul>
                    <li>getting settled and sleeping comfortably</li>
                    <li>getting to and using the toilet</li>
                    <li>managing incontinence</li>
                    <li>medication, treatments and therapies</li>
                    <li>staying safe at night</li>
                </ul>
                <p>This includes:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only need sometimes</li>
                    <li>help from a person, or using an aid, tool or adaptation</li>
                </ul>
                <p>We also ask if there is anything else you&apos;d like us to know about help or support at night.</p>
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
                        href="/15-night-time-needs/01-care-needs-night"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;
