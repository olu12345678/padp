/* eslint-disable max-len */

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Question from '@/components/Question';
import Input from '@/components/Input';

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
                <PageHeader title="About surgery or medical treatment you have planned" caption="Planned medical treatment" />
            </Wrapper>
            <Wrapper>
                <p>It&apos;s helpful for us to know about medical treatment you have planned:</p>
                <ul>
                    <li>related to your care needs</li>
                    <li>that means you need help or support</li>
                </ul>
                <Question id="field-default" label="What surgery you're going to have" hintText="For example, hip replacement">
                    <Input name="field-default" id="field-default" />
                </Question>
                <Question id="field-default" label="When it's planned for (optional)" hintText="For example, June 2023">
                    <Input name="field-default" id="field-default" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./about-surgery-treatment"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./about-surgery-treatment-summary"
                    >
                        Add
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
