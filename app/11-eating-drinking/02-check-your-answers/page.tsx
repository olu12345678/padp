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
            label: 'Do you need help or support eating and drinking?',
            answer: 'Yes',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us about the help or support you need from someone else to eating and drinking',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            actions: [{
                label: 'Change',
                action: '#',
            }],
        },
        {
            label: 'Tell us about any aids, adaptations or tools you use eating and drinking',
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
                    caption="Eating and drinking"
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
                        href="./01-help-support-eating-drinking"
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
