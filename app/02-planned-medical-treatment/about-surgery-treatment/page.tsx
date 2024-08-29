/* eslint-disable max-len */

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="About your surgery or treatment" caption="Planned medical treatment" />
            </Wrapper>
            <Wrapper>
                <p>Tell us about any surgery or treament you have planned.</p>
                <p>We&apos;ll ask about:</p>
                <ul>
                    <li>what surgery or treatment you&apos;re going to have</li>
                    <li>when it&apos;s planned for, if you know</li>
                </ul>
                <p>You should include any regular treatments you receive, as well as follow-up care you have planned</p>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_right"
                        iconSide="right"
                        href="/02-planned-medical-treatment/about-planned-surgery-treatment"
                    >
                        Add surgery or treatment
                    </Button>
                </ButtonGroup>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/02-planned-medical-treatment/planned-medical-treatment"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="#"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
