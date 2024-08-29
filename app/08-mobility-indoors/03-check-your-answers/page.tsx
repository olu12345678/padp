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
            label: 'What help or support do you need moving around indoors during the day?',
            answer: 'Going up or down stairs',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us about what you need help or support with and any aids, tools or adaptions you use',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you ever fall or stumble when moving around indoors?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Do you need help or support from someone or something to avoid falls or stumbles?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us about the help or support you need from someone else to wash, shower or bathe yourself',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                    caption="Moving around indoors"
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
                        href="./01-help-moving-indoors"
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
