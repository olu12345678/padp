/* eslint-disable max-len */

import type { Metadata } from 'next';
import Image from 'next/image';

import Pic1 from '@/public/images/care-needs-01.png';
import Pic2 from '@/public/images/care-needs-02.png';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Grid from '@/components/Grid';

export const metadata:Metadata = {
    title: 'About your care needs',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const HospitalCareHomeLegalDetention:React.FC = function HospitalCareHomeLegalDetention() {
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
                <PageHeader title={pageTitle} caption="When your care needs started" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '20px' }}>
                <Grid columns={2}>
                    <Image
                        src={Pic1}
                        alt="A man holding his knee"
                        height={300}
                    />
                    <Image
                        src={Pic2}
                        alt="A nurse helping an older man to walk"
                        height={300}
                    />
                </Grid>
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about your care needs.</p>
                <p>This includes asking:</p>
                <ul>
                    <li>whether you have had care needs for 6 months or more</li>
                    <li>when your care needs started, if you have not had care needs for 6 months or more</li>
                </ul>
                <h2>What care needs are</h2>
                <p>Care needs are help or support you need during the day or night. This could be because of a condition or disability.</p>
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
                        href="01-care-needs/care-needs-six-months"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HospitalCareHomeLegalDetention;
