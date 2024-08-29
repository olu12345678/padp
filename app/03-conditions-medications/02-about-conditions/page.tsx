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
                <PageHeader title="About your conditions and symptoms" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>Tell us about any conditions you have.</p>
                <p>We&apos;ll ask about:</p>
                <ul>
                    <li>the name of the condition</li>
                    <li>how long you&apos;ve had the condition</li>
                </ul>
                <p>You can also tell us about symptoms you have, if you do not know the name of your condition.</p>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_right"
                        iconSide="right"
                        href="./03-add-condition"
                    >
                        Add condition or symptoms
                    </Button>
                </ButtonGroup>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./01-tell-us-about-conditions"
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
