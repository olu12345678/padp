import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import SummaryList from '@/components/SummaryList';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

export const metadata:Metadata = {
    title: 'Check your answers',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    const listItems = [
        {
            label: 'Name of condition',
            answer: 'Arthritis',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How long have you had this condition for?',
            answer: 'About a year',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us about your conditions and symtoms',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm. ',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you take medication',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Name of medication',
            answer: 'Ritalin',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Dosage',
            answer: '10mg',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How often do you take it',
            answer: 'Daily',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Does your medication cause any side effects',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us any side effects caused by your medication',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you take any treatments or therapies',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Treatment name',
            answer: 'Counselling',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Frequency',
            answer: 'Weekly',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Duration',
            answer: 'Weekly',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Does your treatrment cause any side effects',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us any side effects caused by your treatment',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
                <PageHeader
                    title={pageTitle}
                    caption="Conditions, medications and treatments"
                />
            </Wrapper>
            <Wrapper>
                <SummaryList
                    items={listItems}
                />
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./09-add-therapies"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default Page;
