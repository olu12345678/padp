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
            label: 'Do you need help to take prescribed medication?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'What help do you need to take medication, and why do you need this help?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How often do you need this help?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you need someone or something to help you monitor a health condition?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How does someone or something help you to monitor a health condition, and why do you need this help?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How often do you need this help?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you need someone to help you do therapy at home?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How does someone help you do therapy at home, and why do you need this help?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'How long does someone spend helping you do therapy at home each week?',
            answer: 'Between 3.5 and 7 hours a week',
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
                    caption="Support taking medication, monitoring a condition and with therapy"
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
                        href="./03-help-therapy"
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
