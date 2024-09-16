/* eslint-disable max-len */

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import SummaryCard from '@/components/SummaryCard';
import SnackBar from '@/components/SnackBar';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const listItems = [
        {
            label: 'What is the name of your condition?',
            answer: 'Arthritis',
            actions: [{
                label: 'Change',
                action: './01-tell-us-about-conditions',
            }],
        },
        {
            label: 'How long have you had the condition?',
            answer: '3 years',
            actions: [{
                label: 'Change',
                action: './01-tell-us-about-conditions',
            }],
        },
    ];
    const listItems2 = [
        {
            label: 'What are your symptoms?',
            answer: 'Test content',
            actions: [{
                label: 'Change',
                action: './01-tell-us-about-conditions',
            }],
        },
        {
            label: 'When is it planned for?',
            answer: '22nd August 2023',
            actions: [{
                label: 'Change',
                action: './01-tell-us-about-conditions',
            }],
        },
    ];
    return (
        <>
            <SnackBar text="You have added 'My symptoms'" />
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
                        href="./01-tell-us-about-conditions"
                    >
                        Add another condition or symptom
                    </Button>
                </ButtonGroup>
            </Wrapper>
            <Wrapper>
                <SummaryCard
                    title="Condition 01"
                    items={listItems}
                    actions={[
                        {
                            label: 'Delete',
                            action: '#',
                        },
                        {
                            label: 'Change',
                            action: './01-tell-us-about-conditions',
                        },
                    ]}
                />
                <SummaryCard
                    title="Symoptom 01"
                    items={listItems2}
                    actions={[
                        {
                            label: 'Delete',
                            action: '#',
                        },
                        {
                            label: 'Change',
                            action: './01-tell-us-about-conditions',
                        },
                    ]}
                />
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
                        href="./04-medications"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
