/* eslint-disable max-len */

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import SummaryCard from '@/components/SummaryCard';
import Question from '@/components/Question';
import TextArea from '@/components/TextArea';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const listItems = [
        {
            label: 'What surgery are you going to have?',
            answer: 'Surgery text',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'When is it planned for?',
            answer: '20th July 2023',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
    ];
    const listItems2 = [
        {
            label: 'What surgery are you going to have?',
            answer: 'Surgery text',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'When is it planned for?',
            answer: '22nd August 2023',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
    ];
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
                <SummaryCard
                    title="Surgery 01"
                    items={listItems}
                    actions={[
                        {
                            label: 'Delete',
                            action: '#',
                        },
                        {
                            label: 'Change',
                            action: '#',
                        },
                    ]}
                />
                <SummaryCard
                    title="Surgery 02"
                    items={listItems2}
                    actions={[
                        {
                            label: 'Delete',
                            action: '#',
                        },
                        {
                            label: 'Change',
                            action: '#',
                        },
                    ]}
                />
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_right"
                        iconSide="right"
                        href="./about-planned-surgery-treatment"
                    >
                        Add surgery or treatment
                    </Button>
                </ButtonGroup>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about the surgery or medical treatment you have planned, related to your care needs">
                    <p>It&apos;s helpful for us to know about:</p>
                    <ul>
                        <li>help or support you&apos;ll need before or after your surgery or medical treatment</li>
                        <li>how your needs might change before or after your surgery or medical treatment</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/02-planned-medical-treatment/about-planned-surgery-treatment"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/02-planned-medical-treatment/check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
