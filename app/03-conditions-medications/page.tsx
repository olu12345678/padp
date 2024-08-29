/* eslint-disable max-len */

import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';

export const metadata:Metadata = {
    title: 'About your conditions, medications and treatments',
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
                <PageHeader title={pageTitle} caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about any:</p>
                <ul>
                    <li>conditions you have</li>
                    <li>medications you take</li>
                    <li>treatments of therapies you have</li>
                </ul>
                <p>We will also ask:</p>
                <ul>
                    <li>about any symptoms you have, even if you do not have a diagnosis</li>
                    <li>how you&apos;re affected by your symptoms</li>
                    <li>any side effects caused by your medication or treatments</li>
                </ul>
                <p>You do not need a formal diagnosis to get Pension Age Disability Payment. However, it can be helpful for us to know about any condition that affects your care needs.</p>
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
                        href="03-conditions-medications/01-tell-us-about-conditions"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HospitalCareHomeLegalDetention;
