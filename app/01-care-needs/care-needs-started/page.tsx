/* eslint-disable max-len */

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Question from '@/components/Question';
import DateInput from '@/components/Date';
import Warning from '@/components/Warning';

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
                <PageHeader title="We want to know when your care needs started" caption="When your care needs started" />
            </Wrapper>
            <Wrapper>
                <Warning>If your application is successful we&apos;ll use this to calculate when your payments will start</Warning>
            </Wrapper>
            <Wrapper>
                <p>We can only pay you Pension Age Disability Payment after you have had care needs for 6 months or more.</p>
                <Question
                    id="dob-multi"
                    label="Tell us roughly when your care needs started"
                    tag="fieldset"
                >
                    <p>You&apos;ll have an opportunity to tell us more about your needs, conditions and circumstances later in the application. </p>
                    <p>Enter like this: 31 03 1980</p>
                    <DateInput
                        name="dob-multi"
                        id="dob-multi"
                        multiple
                    />
                </Question>
            </Wrapper>

            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/01-care-needs/care-needs-six-months"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/01-care-needs/check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
