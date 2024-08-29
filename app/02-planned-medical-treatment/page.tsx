/* eslint-disable max-len */

import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';

export const metadata:Metadata = {
    title: 'About your planned medical treatment',
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
                <PageHeader title={pageTitle} caption="Planned medical treatment" />
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about any medical treatment you have planned, related to your care needs.</p>
                <p>This includes any:</p>
                <ul>
                    <li>regular treatment you receive</li>
                    <li>follow-up care you have planned</li>
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
                        href="02-planned-medical-treatment/planned-medical-treatment"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HospitalCareHomeLegalDetention;
